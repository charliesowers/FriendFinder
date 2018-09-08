
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/survey", function(req, res) {
    
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

router.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});
  


module.exports = router;