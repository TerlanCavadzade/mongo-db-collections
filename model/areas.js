const mongoose = require('mongoose');

const mineAreaSchema = new mongoose.Schema({
    fieldId: {
        type: Number,
        required: true
    },
    mineId: {
        type: Number,
        required: true
    },
    area: {
        type: Object,
        required: true
    }
});
let mineArea = mongoose.model('mineArea', mineAreaSchema)
module.exports = mineArea