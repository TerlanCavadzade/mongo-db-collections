const mongoose = require('mongoose');

const aboutMineSchema = new mongoose.Schema({
    mineId: {
        type: Number,
        required: true
    },
    generalInfo: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    stratiqrafiya: {
        type: String,
        required: true
    },
    tektonika: {
        type: String,
        required: true
    },
    intruzivi: {
        type: String,
        required: true
    },
    suxurlarinPetqorafikXususiyyetleri: {
        type: String,
        required: true
    },
    temasMetasomatikSuxur: {
        type: String,
        required: true
    },
    yataqlarinGeolojiQurulusu: {
        type: String,
        required: true
    },
    geoFizika: {
        type: String,
        required: true
    },
    
});
let aboutMine = mongoose.model('aboutMine', aboutMineSchema)
module.exports = aboutMine