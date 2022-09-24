const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    fieldId: {
        type: Number,
        required: true
    },
    mineId: {
        type: Number,
        required: true
    },
    info: {
        type: String,
        required: true
    }
});
let history = mongoose.model('history', historySchema)
module.exports = history