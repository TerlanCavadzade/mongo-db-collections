const mongoose = require('mongoose');

const mineSchema = new mongoose.Schema({
    mineName: {
        type: Number,
        required: true
    }
});
let mine = mongoose.model('mine', mineSchema)
module.exports = mine