var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserReview = require("./userreview.js");

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

jobSchema.methods.getAvgCareerDevelopmentRating = function() {
   UserReview.find({}, "careerDevelopmentRating", function(err, docs) {
       //if (err) console.log(err);
       //
       //var count = 0;
       //var sum = 0;
       //for (var i=0; i<docs.length; i++) {
       //    sum += docs[i];
       //    count++;
       //}
       //return sum/count;
       console.log(docs);
   })
};


module.exports = mongoose.model("job_post", jobSchema)