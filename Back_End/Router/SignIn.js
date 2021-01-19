
const express = require('express');
const { signIn } = require('../Controller/SignIn');

const router = express.Router()

router.post('/sign-in',

    signIn(),

    (req, res) => {

       
        res.json(req.signIn)
    }
)

module.exports = router;