var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render("new_review_form");
});

module.exports = router;