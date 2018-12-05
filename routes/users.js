var express = require('express');
var router = express.Router();
const db = require('../models');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
    
    const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "merryMeet",
    allowedFormats: ["jpg", "png"],
    transformation: [
      { width: 200, height: 200, gravity: "face", radius: "max", crop: "thumb"},
      {width:200, crop: "scale"}]
    });
  const parser = multer({ storage: storage });

// POST user image to image db

router.post('/:id/images', parser.single('image'), (req, res) => {
  console.log(req.file);
  console.log(req.params.id);
  const userId = req.params.id;
  const image = {};
  image.imageUrl = req.file.url;
  image.imageId = req.file.public_id;

  db.Image.create(image).then((imgData) => {
    // console.log(imgData);
    db.User.findByIdAndUpdate(userId, {$set: {image: imgData._id}}, function(err, doc){
      if (err){
        console.log(err)
      }
      res.json(doc);
    })
  })

})
/* GET users listing. */
router.get('/login', function(req, res, next) {
  db.User.findOne({username: req.query.username}, function(err, user){
    if (err || !user) {
      res
      .status(401)
      .json({message: "There was an error logging you in"});
      return;
    }
    if (!user.comparePassword(req.query.password, function(err, isMatch){
      if (err) {
        res.json({message:"Error signing in", err})
      } else {  
        console.log("passwords match");
        res.status(201).send({success: true, user});
      }
      
    }));
  });
});

router.post("/signup", function(req, res){
  console.log("Request body", req.body.user);
  var user = req.body.user;
  db.User.findOne({ where : {username: user.username}}).then((err, response) => {
    console.log(response);
    if(err) {
    res.json({success: false, message: "Sorry, there was an issue registering you."});
    }
    else {
      db.User.create(user).then(function(user){
        res.json({success: true, user});
      })
      // .catch(function(err){console.log(err)});
    }

  });
});

router.get("/:userid", function(req, res){
  console.log("general user route hit: " + req.params.userid);

  db.User.findById(req.params.userid, (err,response)=> {
    console.log("Database response:" + response);
    
      if(err){
        console.log(err);
      }
      return response;

  }).populate("image").then(docs => {
      console.log(docs);
      return docs;
  }).then((data) => {
    res.json(data);
  });
});

module.exports = router;

