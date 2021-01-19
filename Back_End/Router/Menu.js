const express = require('express');
const { Showmenu } = require('../Controller/Menu');

const router = express.Router();

router.get('/menu',

    Showmenu(),

    (req, res) => {

        console.log('ok')
        res.json(req.menu)
        // res.status(200).end();
    }
)

module.exports = router;