$(document).ready(function() {
    $(function() {
        $.ajax({
            url: "api/all_postings",
            success: function(all_postings) {
                console.log(all_postings);



                var getAvgRating = function(posting) {
                    return (posting.avgCareerDevelopmentRating + posting.avgCultureRating + posting.avgPerksRating) / 3;
                };

                for (var i=0; i<all_postings.length; i++) {
                    var posting = all_postings[i];
                    var jobTitle = posting.jobTitle;
                    var avgRating = getAvgRating(posting);
                    var careerScore = posting.avgCareerDevelopmentRating;
                    var cultureScore = posting.avgCultureRating;
                    var perksScore = posting.avgPerksRating;
                    var postingID = posting._id;

                    var newEntry = `
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

                    $(".panel-group").append(newEntry);
                }

            }
        })
    })
});