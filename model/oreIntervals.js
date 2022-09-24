const mongoose = require('mongoose');

const otherDateSchema = new mongoose.Schema({
    holeName: {
        type: Text,
        required: true
    },
    from: {
        type: Number,
        required: true
    },
    to: {
        type: Number,
        required: true
    },
    tickness: {
        type: Number,
        required: true
    },
    oreBody: {
        type: Text,
        required: true
    },
    drillingField: {
        type: Text,
        required: true
    }
});
let otherDate = mongoose.model('oreIntervals', otherDateSchema)
module.exports = otherDate