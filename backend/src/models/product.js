const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    enabled: {
        type: Boolean,
        default: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    number: {
        type: Number,
    }
});

schema.plugin(require('mongoose-autopopulate'));

const product = mongoose.model('product', schema);
module.exports = {product}