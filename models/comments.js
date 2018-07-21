const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    bulletin: {
        type: Schema.Types.ObjectId, 
        required: true
    }, 
    text: {
        type: String, 
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId, 
        required: true
    }, 
    userImage: {
        type: String
    }, 
}); 

let Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;