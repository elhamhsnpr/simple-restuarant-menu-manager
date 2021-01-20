const bcrypt = require("bcrypt");
const Promise = require('bluebird');
// const pgclient = require('../db/pgconnect');

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS);

module.exports.UserSchema = {
    'firstName': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'lastName': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'username': {
        notEmpty: {
            errorMessage: 'empty'
        },
        isUsername: {
            errorMessage: 'not_valid_username'
        },
        isLength: {
            options: { min: 5, max: 15 },
            errorMessage: 'length_not_5_to_15'
        }
    },
    'password': {
        notEmpty: {
            errorMessage: 'empty'
        },
        isLength: {
            options: { min: 6, max: 20 },
            errorMessage: 'length_not_6_to_20'
        }
    },
    'userType':{}
}    
