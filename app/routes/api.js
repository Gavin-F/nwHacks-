var express = require("express");
var router = express.Router();
var JobPost = require("../models/jobpost.js");
var UserReview = require("../models/userreview.js");

router.get("/jobtitles", function(req, res) {
    var target_uni = req.uni;
    var target_fac = req.fac;
    JobPost.find({university: target_uni, faculty: target_fac}).distinct("jobTitle", function(err, results) {
        res.json(results);
    })
});

router.get("/companies", function(req, res){
    var target_uni = req.uni;
    var target_fac = req.fac;
    JobPost.find({university: target_uni, faculty: target_fac}).distinct("employer", function(err, results) {
        res.json(results);
    })
});

router.get("/locations", function(req, res) {
    var target_uni = req.uni;
    var target_fac = req.fac;
    JobPost.find({university: target_uni, faculty: target_fac}).distinct("location", function(err, results) {
        res.json(results);
    })
});

router.get("/schools", function(req, res) {
    JobPost.find().distinct("university", function(err, results) {
        res.json(results);
    })
});

router.get("/faculties", function(req, res) {
    JobPost.find().distinct("faculty", function(err, results) {
        res.json(results);
    });
});

module.exports = router;

// list of job title
// list of company
// list of schools
// list of faculty