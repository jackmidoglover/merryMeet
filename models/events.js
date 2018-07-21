const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date: {
        type: Number,
        required: true
    }, 
    location: {
        type: String,
        required: true
    }, 
    imgUrl: {
        type: String, 
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number, 
        required: true
    }
});

let Events = mongoose.model("Events", eventSchema);
module.exports = Events;