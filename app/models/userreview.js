var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://admin:nwhacks@ds045684.mlab.com:45684/nwhacks")

var reviewSchema = new Schema({
    jobPostID: String,
    comment: String,
    careerDevelopmentRating: Number,
    cultureRating: Number,
    perksRating: Number,
    salary: Number,
    salaryGiven: Boolean
});

module.exports = mongoose.model("user_review", reviewSchema);