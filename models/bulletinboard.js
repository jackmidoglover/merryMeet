const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const bulletinSchema = new Schema({
    latitude: {
        type: Number, 
        required: true
    }, 
    longitude: {
        type: Number,
        required: true
    }, 
    comments: {
        type: Schema.Types.ObjectId, 
        ref: "Comments"
    }, 
    image: {
        type: String, 
        required: true
    }, 
    religion: {
        type: String
    }
})

let Bulletin = mongoose.model("Bulletins", bulletinSchema);
module.exports = Bulletin; 