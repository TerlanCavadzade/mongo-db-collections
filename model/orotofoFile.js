const mongoose = require('mongoose');

const ortofoFileSchema = new mongoose.Schema({
    tiffUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
let ortofoFile = mongoose.model('ortofoFile', ortofoFileSchema)
module.exports = ortofoFile