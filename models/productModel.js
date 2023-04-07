const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: 'This field is required'
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Product', productSchema);