// Sign Up
const pgclient = require('../DB/ConnectDB');


exports.signUp = user => {
    let userId = null;
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)
            .then(hashedPassword => {
                user.password = hashedPassword;
                pgclient.query(
                    `INSERT INTO users (firstName,lastName,username,password,userType) 
                             VALUES ($1,$2,$3,$4,$5) RETURNING _id`,
                    [user.firstName, user.lastName,user.username, user.password,user.userType]
                    
                ).then(
                    function (res) {
                        userId = res.rows[0]._id;
                    },
                    function (err) {
                       
                        console.log(err);
                        
                        reject(err);
                    }
                )
            })
            .catch(err => {
                reject(err);
            });
    });
};