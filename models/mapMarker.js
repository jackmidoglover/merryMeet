const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const markerSchema = new Schema({
    imageUrl: {
        type: String, 
        required: true
    },
    religion: {
        type: String
    }
});

let Markers = mongoose.model("Markers", markerSchema);
module.exports = Markers;