const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    drillHoleID: {
        type: Number,
        required: true
    },
    purpose: {
        type: text,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    z: {
        type: Number,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    projectDepth: {
        type: Number,
        required: true
    },
    azimut: {
        type: Number,
        required: true
    },
    dip: {
        type: Number,
        required: true
    },
    status: {
        type: Text,
        required: true
    },
    coreTypeHQ: {
        type: Text,
        required: true
    },
    coreTypeNQ: {
        type: Text,
        required: true
    },
    dateCollared: {
        type: Date,
        required: true
    },
    dateCompleted: {
        type: Date,
        required: true
    },
    drillingField: {
        type: Text,
        required: true
    },
    note: {
        type: Text,
        required: true
    }
});
let status = mongoose.model('status', statusSchema)
module.exports = status