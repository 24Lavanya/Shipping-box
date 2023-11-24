const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
    name: String, 
    weight: Number,
    color: String,
    country: String,
    cost:Number,
})

module.exports = mongoose.model("Shipping", shipSchema);