const express = require('express');
const { upload } = require('../Controller/Uploadimage');

const router= express.Router();

router.post('/upload'

    , upload.single('image'),

    (req, res, next) => {

        try {
            return res.status(201).json({
                message: 'File uploded successfully'
            });
        } catch (error) {
            console.error(error);
        }
    });

module.exports = router;