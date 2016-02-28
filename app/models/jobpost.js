var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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