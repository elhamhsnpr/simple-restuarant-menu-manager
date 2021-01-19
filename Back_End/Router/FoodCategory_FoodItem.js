const express = require('express');
const { addFood} = require('../Controller/FoodCategory_FoodItem');
const jwt = require('../Utils/Jwt');

const router = express.Router();

router.post('/addFood',

    jwt.verifyToken,

    addFood(),

    (req, res) => {
       
        res.status(200).end();

        // res.json('done')
    }
)


module.exports = router;