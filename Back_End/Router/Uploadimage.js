const express = require('express');
const { upload, pathInsert } = require('../Controller/Uploadimage');
// const {addFood} = require('../Controller/FoodCategory_FoodItem');

const router= express.Router();

router.post('/upload',

upload,pathInsert);

module.exports = router;