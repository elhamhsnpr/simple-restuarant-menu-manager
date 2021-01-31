const express = require('express');
const { Showmenu } = require('../Controller/Menu');

const router = express.Router();

router.get('/menu',

    Showmenu(),

    (req, res) => {

        res.json(req.menu)
        
    }
)

module.exports = router;