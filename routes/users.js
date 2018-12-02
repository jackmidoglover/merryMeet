var express = require('express');
var router = express.Router();
const db = require('../models');


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
        console.log("passwords match", user);
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

module.exports = router;

