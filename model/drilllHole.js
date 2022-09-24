const mongoose = require('mongoose');

const drillHoleSchema = new mongoose.Schema({
    HoleName: {
        type: Text,
        required: true
    },
});
let drillHole = mongoose.model('drillHoleID', drillHoleSchema)
module.exports = drillHole