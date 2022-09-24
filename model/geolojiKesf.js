const mongoose = require('mongoose');

const inventionSchema = new mongoose.Schema({
    info: {
        type: Text,
        required: true
    },
    kmzFileUrl: {
        type: Text,
        required: true
    },
    statusId: {
        type: Number,
        required: true
    },
    OtherDate: {
        type: Number,
        required: true
    },
    icmalId: {
        type: Text,
        required: true
    }
});
let invention = mongoose.model('invention', inventionSchema)
module.exports = invention