const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 
const saltRounds = 10; 

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageUrl: {
        type: String, 
        required: true,
    },
    imageId: {
        type: String, 
        required: true
    }
}); 

let Image = mongoose.model("Image", ImageSchema);
module.exports = Image;