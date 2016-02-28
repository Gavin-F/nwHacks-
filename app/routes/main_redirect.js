var express = require("express");
var bodyParser = require("body-parser");
var urlencoded = bodyParser.urlencoded({extended: true});
var router = express.Router();

router.post("/", urlencoded, function(req, res) {
    var target_uni = req.body.university;
    var target_fac = req.body.faculty;
    var target_url = "/" + target_uni + "/" + target_fac + "/main";
    console.log(target_url);
    res.redirect(target_url);
});

module.exports = router;