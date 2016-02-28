var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    console.log(req.uni);
    console.log(req.fac);
    res.render("review");
});

module.exports = router;