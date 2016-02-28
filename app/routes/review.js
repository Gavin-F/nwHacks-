var express = require("express");
var router = express.Router();

router.get("/:id", function(req, res) {
    console.log(req.uni);
    console.log(req.fac);
    res.render("review", {jobID: req.params.id});
});

module.exports = router;