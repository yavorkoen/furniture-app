const mongoose = require('mongoose');


const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minlength: 4
    },
    model:  {
        type: String,
        required: true,
        minlength: 4
    },
    year: {
        type: Number,
        min: 1950,
        max: 2050,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 11 
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
        required: true,
    },
    material:{
        type: String,
    },
    _ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;

