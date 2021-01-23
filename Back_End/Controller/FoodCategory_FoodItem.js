const pgclient = require('../DB/ConnectDB');
const jwt = require('../Utils/Jwt');

exports.addCategory = () => {


    return (req, res, next) => {


        pgclient.query('INSERT INTO category(categoryName) VALUES ($1)', [req.body.categoryName]).then(

            console.log("Insert Done")

        ).catch(err => next(err));
    };



};

exports.addItem = () => {


    return (req, res, next) => {

        pgclient.query('INSERT INTO item(itemName,categoryName) VALUES ($1,$2)', [req.body.itemName, req.body.categoryName]).then(

            console.log("Insert Done")

        ).catch(err => next(err));
    };


}

