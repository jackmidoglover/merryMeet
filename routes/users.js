var express = require('express');
var router = express.Router();
const db = require('../models');


/* GET users listing. */
router.post('/signin', function(req, res, next) {
  console.log("sign in hit");
  db.User.findOne({username: req.body.username}, function(err, user){
    console.log("User", user);
    if (err) {
      res.json({message: "There was an error logging you in"});
    }
    if (!user.comparePassword(req.body.password, function(err, isMatch){
      if (err) {
        res.json({message:"Error signing in"})
      }
       else{ 
         console.log("passwords match");
        res.json({message: "Check password and Username", success: isMatch, user});
    }  
    }));


    
  });
});

router.post("/signup", function(req, res, next){
  console.log("sign up hit");
  db.User.findOne({ where : {username: req.username}}).then((err, response) => {
    console.log(response);
    if(err) {
    res.json({success: false, message: "Sorry, there was an issue registering you."});
    }
    else {
      db.User.create(req.body);
      res.json({message: "User added!"});
    }

  });
    // db.User.insertOne()

})

module.exports = router;

