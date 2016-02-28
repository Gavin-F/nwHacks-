var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    jobPostID: String,
    comment: String,
    careerDevelopmentRating: Number,
    cultureRating: Number,
    perksRating: Number,
    salary: Number
});

reviewSchema.methods.avgRating = function() {
    return (this.cultureRating + this.perksRating + this.careerDevelopmentRating) / 3;
};

module.exports = mongoose.model("user_review", reviewSchema);