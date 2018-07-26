var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.post("/addMarker", (req, res, next) => {
  let markerObject = req.body.params;
  console.log("route hit", markerObject);
  db.Bulletin.create({
    latitude: markerObject.currentLocation.lat,
    longitude: markerObject.currentLocation.lng,
    image: markerObject.newMarker.image,
    religion: markerObject.newMarker.religion
  }, function (err, marker) {
    console.log(marker);
    if (err) console.log(err);
    res.json(marker);
  });
});

router.get("/loadMarkers", (req, res, next) => {
  console.log("load marker route hit");
  db.Bulletin.find({}, function (err, marker) {
    if (err) console.log(err);
  }).then(markers => {
    res.status(200).json(markers);
  })
});

router.get("/bulletinboard", (req, res, next) => {
  let bulletinid = req.query.bulletin;
  console.log("bulletinboard route hit", bulletinid);
  db.Comments.find({where: {bulletin: bulletinid}}, function(err, comments){
    if (err) console.log(err);
  }).then(comments => {
    res.status(200).json(comments);
  });
});

router.post("/addComment", (req, res, next) => {
  console.log("add comment route hit", req.body);
  res.status(200);
  db.Comments.create(req.body);
    res.status(200).json({message: "comment added!"});
  });


module.exports = router;
