const mongoose = require('mongoose');

const topMapSchema = new mongoose.Schema({
    mapDXF: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});
let topMap = mongoose.model('topograpchialMap', topMapSchema)
module.exports = topMap