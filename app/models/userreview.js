var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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