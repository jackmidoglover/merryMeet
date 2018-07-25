var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */

router.post("/addmarker", (req, res, next) => {
  let markerObject = req.body.params;
  console.log("route hit");
  db.Bulletin.create({
    latitude: markerObject.currentLocation.lat,
    longitude: markerObject.currentLocation.lng,
    image: markerObject.newMarker.imgUrl,
  }, function (err, marker) {
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

module.exports = router;
