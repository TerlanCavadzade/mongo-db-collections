const mongoose = require('mongoose');

const otherDateSchema = new mongoose.Schema({
    startingDate: {
        type: Date,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    },
    workTitle: {
        type: Text,
        required: true
    }
});
let otherDate = mongoose.model('otherDate', otherDateSchema)
module.exports = otherDate