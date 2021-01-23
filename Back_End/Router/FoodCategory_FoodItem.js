const express = require('express');
const { addCategory , addItem, Showmenu} = require('../Controller/FoodCategory_FoodItem');
const jwt = require('../Utils/Jwt');

const router = express.Router();

router.post('/addCategory',

    jwt.verifyToken,

    addCategory(),

    (req, res) => {
        // category.addCategory()
        res.status(200).end();

        // res.json('done')
    }
)

router.post('/addItem',

    jwt.verifyToken,

    addItem(),

    (req, res) => {
        // category.addCategory()
        res.status(200).end();

        // res.json(req.addItem)
    }
)



module.exports = router;