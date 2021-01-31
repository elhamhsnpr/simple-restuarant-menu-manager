const express = require('express');
const { upload, foodInsert } = require('../Controller/FoodCategory_FoodItem');
const jwt = require('../Utils/Jwt');

const router = express.Router();

router.post('/addFood',

    jwt.verifyToken,

    upload,

    foodInsert
    );

module.exports = router;