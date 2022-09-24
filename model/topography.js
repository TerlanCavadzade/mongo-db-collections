const mongoose = require('mongoose');

const topographySchema = new mongoose.Schema({
    mapId: {
        type: Number,
        required: true
    },
    ortofoFileId: {
        type: Number,
        required: true
    },
    fieldId: {
        type: Number,
        required: true
    },
    mineId: {
        type: Number,
        required: true
    }
});
let topography = mongoose.model('topography', topographySchema)
module.exports = topography