var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://admin:nwhacks@ds045684.mlab.com:45684/nwhacks")

var jobSchema = new Schema({
    jobTitle: String,
    employer: String,
    location: String,
    university: String,
    faculty: String,
    avgCareerDevelopmentRating: Number,
    avgCultureRating: Number,
    avgPerksRating: Number,
    avgSalary: Number
});


module.exports = mongoose.model("job_post", jobSchema)