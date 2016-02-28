$(document).ready(function() {
    $(function() {
        $.ajax({
            url: "api/posting_reviews/" + jobID,
            success: function(data) {
                // populate posting.

                var getAvgRating = function(posting) {
                    return (posting.avgCareerDevelopmentRating + posting.avgCultureRating + posting.avgPerksRating) / 3;
                };
                var getAvgRating2 = function(review) {
                    return (review.careerDevelopmentRating + review.cultureRating + review.perksRating) / 3;
                }

                var posting = data[0];
                var jobTitle = posting.jobTitle;
                var avgRating = getAvgRating(posting);
                var careerScore = posting.avgCareerDevelopmentRating;
                var cultureScore = posting.avgCultureRating;
                var perksScore = posting.avgPerksRating;
                var postingID = posting._id;

                var postingHTML = `
                         <a href="review/${postingID}">
                            <div class="panel panel-default">


                                <div class="panel-heading">
                                    <table style="width:100%">
                                        <tr>
                                            <td>${jobTitle}</td>
                                            <td width = "10%">Rating: ${avgRating}</td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="panel-body">
                                    <table style="width:100%">
                                        <tr>
                                            <td>Content</td>
                                            <td width = "10%"><img src="/images/culture.png" height="22px" width="22px" ="culture">: ${cultureScore}<br>
                                                <img src="/images/compensation.png" height="22px" width="22px">: ${perksScore}<br>
                                                <img src="/images/career.png" height="22px" width="22px">: ${careerScore}<br>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </a>
                    `;

                $(".postingentry").append(postingHTML);

                // populate reviews
                console.log(data);
                for (var i=1; i<data.length; i++) {
                    var review = data[i];

                    var comment = review.comment;
                    var careerScore = review.careerDevelopmentRating;
                    var cultureScore = review.cultureRating;
                    var perksScore = review.perksRating;
                    var avgRating = getAvgRating2(review);
                    var salary = posting.salary;

                    var reviewHTML = `
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <table style="width:100%">
                                    <tr>
                                        <td>Review</td>
                                        <td width = "10%">Rating: ${avgRating} </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="panel-body">
                                <table style="width:100%">
                                    <tr>
                                        <td>${comment}</td>
                                        <td width = "10%"><img src="/images/culture.png" height="22px" width="22px">: ${cultureScore}<br>
                                            <img src="/images/compensation.png" height="22px" width="22px">: ${perksScore}<br>
                                            <img src="/images/career.png" height="22px" width="22px">: ${careerScore}<br>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    `
                }

                $(".reviewlist").append(reviewHTML);
            }
        })
    })
});