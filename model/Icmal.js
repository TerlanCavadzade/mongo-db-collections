const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    fieldName: {
        type: Text,
        required: true
    },
    quyuSayi: {
        type: Number,
        required: true
    },
    quyuDerinliyi: {
        type: Number,
        required: true
    },
    CompletedQuyuCount: {
        type: Number,
        required: true
    },
    qaliIsQuyuSayi: {
        type: Number,
        required: true
    },
    QaliIsQuyuDerinliyi: {
        type: Number,
        required: true
    },
    Note: {
        type: Text,
        required: true
    }
});
let overview = mongoose.model('overview', overviewSchema)
module.exports = overview