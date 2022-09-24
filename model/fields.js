const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    fieldName: {
        type: Number,
        required: true
    }
});
let field = mongoose.model('field', fieldSchema)
module.exports = field