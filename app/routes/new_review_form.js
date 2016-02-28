var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    var targetJobTitle = req.query.jobTitle;
    var targetEmployer = req.query.employer;
    var hasTarget = false;
    if (targetJobTitle) {
        hasTarget = true;
    }
    console.log(targetJobTitle);
    console.log(targetEmployer);
    var data = {
        job: targetJobTitle || "",
        emp: targetEmployer || "",
        exists: hasTarget
    };
    res.render("new_review_form", data);
});

module.exports = router;