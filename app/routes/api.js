var express = require("express");
var router = express.Router();
var JobPost = require("../models/jobpost.js");
var UserReview = require("../models/userreview.js");

router.get("/jobtitles", function(req, res) {
    JobPost.find().distinct("jobTitle", function(err, results) {
        res.json(results);
    })
});

router.get("/companies", function(req, res){

});

router.get("/schools", function(req, res) {

});

router.get("/faculties", function(req, res) {

});

module.exports = router;

// list of job title
// list of company
// list of schools
// list of faculty