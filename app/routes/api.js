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

router.get("/all_postings", function(req, res) {
    var target_uni = req.uni;
    var target_fac = req.fac;
    JobPost.find({university: target_uni, faculty: target_fac}, function(err, docs) {
        if (err) console.log(err);

        res.json(docs);
    })
});

router.get("/posting_reviews/:id", function(req, res) {
    var posting_id = req.params.id;
    JobPost.find({_id: posting_id}, function(err, posting) {
        if (err) console.log(err);

        UserReview.find({jobPostID: posting_id}, function(err2, docs) {
            if (err2) console.log(err2);

            console.log(docs);
            res.send(posting.concat(docs));
        })
    })
})

module.exports = router;

// list of job title
// list of company
// list of schools
// list of faculty