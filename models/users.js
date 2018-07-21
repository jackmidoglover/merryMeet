const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 
const saltRounds = 10; 

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        minlength: 3, 
        maxlength: 20 
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 6, 
        maxlength: 15
    }, 
    religion: {
        type: String
    }, 
    imageUrl: {
        type: String
    }, 
    bio: {
        type: String,
        maxlength: 250
    },
    comments: {
        type: Schema.Types.ObjectId, 
        ref: "Comments"
    },
    friends: {
        type: Schema.Types.ObjectId, 
        ref: "Users"
    },
    zipcode: {
        type: Number, 
        required: true
    }
}); 

UserSchema.pre('save', function(next){
    let user = this;

    if (!user.isModified('password')) return next(); 

    bcrypt.genSalt(saltRounds, function(err, salt){
        if (err) return next(err);
        
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);

            user.password = hash; 
            next();            
        });
    });
});

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        return cb(null, isMatch);
    });
};

let User = mongoose.model("Users", UserSchema);
module.exports = User;