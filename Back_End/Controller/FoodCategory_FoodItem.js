const pgclient = require('../DB/ConnectDB');


exports.addFood = () => {


    return (req, res, next) => {


        pgclient.query('INSERT INTO Food(category, item, price, description) VALUES ($1,$2,$3,$4)',
            [req.body.category, req.body.item, req.body.price, req.body.description]).then(

                console.log("Insert Done"),
                 
                res.status(200).end()

            ).catch(err => next(err));
    };



};


