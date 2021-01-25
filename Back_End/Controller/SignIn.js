const bcrypt = require('bcrypt');
const pgclient = require('../DB/ConnectDB');
const userModels = require('../Models/Admin');
const JWT = require('../Utils/Jwt');


exports.signIn = getInfo => {

    //Get req From Cleint
    if (typeof getInfo === 'undefined')
        getInfo = (req) => {
            return {
                username: req.body.username,
                password: req.body.password
            };
        };

    console.log(typeof getInfo)

    return (req, res, next) => {
        let user = null;

        const info = getInfo(req);
        // console.log(info);

        pgclient.query(
            `SELECT * FROM  admin  WHERE username=$1 `,
            [info.username])
            .then(
                function (result) {
                    // User not found

                    if (result === undefined) throw new Error('username_or_password', 404);

                    user = result.rows[0];
                    console.log(user)


                    // Check password
                    return bcrypt.compare(info.password, user.password);
                },
                function (err) {
                    console.log('1 Err:', err);
                }
            )
            .then(compareResult => {
                // Compare failed
                if (compareResult === false) throw new Error('Incorroct password', 404);



                // Generate Token
                let users = {
                    id: user._id,
                    user: user.username,
                    type: user.usertype
                };
                return JWT.GenerateToken(users);



            }).then(token => {
                // console.log(token)

                delete user.password;

                req.signIn = {
                    token,
                    user,
                };
                //Save token in the cookie
                res.cookie('authcookie', token, { maxAge: 90000});
                res.json(req.signIn);

                // return next();


            }).catch(err => next(err));
    };
};