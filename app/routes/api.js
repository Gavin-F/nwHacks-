var express = require("express");
var router = express.Router();
var JobPost = require("../models/jobpost.js");
var UserReview = require("../models/userreview.js");

//router.get("/jobtitles", function(req, res) {
//    // Placeholder
//    //var jobtitles = ["application developer", "software engineer", "financial analyst"];
//    //res.json(jobtitles);

//
//});
//
//router.get("/companies", function(req, res){
//
//});
//
//router.get("/schools", function(req, res) {
//
//});
//
//router.get("/faculties", function(req, res) {
//
//});

router.get("/jobtitles", function(req, res) {
    JobPost.find().distinct({}, function(err, docs) {
        var json_res = [];
        for (var i=0; i<docs.length; i++) {
            json_res.push(docs[i]["jobTitle"]);
        }

        res.json(json_res);
    });
});
module.exports = router;

// list of job title
// list of company
// list of schools
// list of faculty