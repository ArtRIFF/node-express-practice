const {Schema, model} = require('mongoose');

const products = new Schema({
    src: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    label: {
        status: String,
        text: String
    },
    prices: {
        retail:{
            type: Number,
            require: true
        },
        sale: Number,
        currency: String,
        procent: Number,
    }
})

module.exports = model("Products", products);