const express = require('express');
const { addFood} = require('../Controller/FoodCategory_FoodItem');
const jwt = require('../Utils/Jwt');

const router = express.Router();

router.post('/addFood',

    jwt.verifyToken,


    addFood(),

    (req, res,next) => {

        try {
            return res.status(201).json({
                message: 'successfully'
            });
        } catch (error) {
            console.error(error);
        }
       
        // res.status(200).end();

        // res.json('done')
    }
)


module.exports = router;