module.exports.FoodSchema = {
    'category': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'item': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'price': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'description': {
        notEmpty: {
            errorMessage: 'empty'
        }
    }
}

