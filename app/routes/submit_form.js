var express = require("express");
var router = express.Router();

var bodyParser = require("body-parser");
router.use("/", bodyParser.urlencoded({extended: true}));
var JobPost = require("../models/jobpost.js");
var UserReview = require("../models/userreview.js");

router.post("/", function(req, res) {
    console.log(req.uni);
    console.log(req.fac);

    var companyName = req.body.companyName;
    var jobTitle = req.body.jobTitle;
    var location = req.body.location;

    var careerScore = req.body.career;
    var cultureScore = req.body.culture;
    var compensationScore = req.body.compensation;
    var avgScore = (parseInt(careerScore) + parseInt(cultureScore) + parseInt(compensationScore)) / 3;
    console.log(avgScore);
    var salary = req.body.salary;
    var comments = req.body.comments;

    console.log(companyName);
    console.log(jobTitle);
    console.log(location);

    var targetJobPost = JobPost.findOne({employer: companyName, jobTitle: jobTitle}, "_id", function(err, jobID) {
        if (err) console.log(err);

        if (jobID) {
            var newUserReview = new UserReview({
                jobPostID: jobID._id,
                comment: comments,
                careerDevelopmentRating: careerScore,
                cultureRating: cultureScore,
                perksRating: compensationScore,
                avgRating: avgScore,
                salary: salary
            });



            newUserReview.save(function(err) {
                if (err) console.log(err);

                res.send("Review Added!")
            });
        }
        else {
            res.send("No such job.");
        }
    });
});

module.exports = router;