const pgclient = require('../DB/ConnectDB');

exports.Showmenu = () => {

    return (req, res, next) => {

        let menu = null;
        pgclient.query('SELECT * FROM food').then(
            function (result) {
                menu = result.rows,
                    console.log(menu),
                    res.json(menu)

            },function (err) {
                console.log(err)
                
            }

        ).catch(err => next(err));
    }
}