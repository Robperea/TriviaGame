$(document).ready(function(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    $("#correct").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);
      
  var startPage = function () {
      $("#quiz").hide();
      $("#results-page").hide();
  }
  startPage();

  $(".start-button").on("click", function(){
    $("#start-page").hide();
    $("#quiz").show();
    })

    $(".done-button").on("click", function () {
        $("#quiz").hide();
        $("#results-page").show();
        answers();
    })

var answers = function () {
    var q1 = $("input").find("name='Q1'").val();

    if (q1 == "greywind") {
        correct++;
        alert("Correct = " + correct);
    }
    else if (q1 == undefined) {
        unanswered++;
    }
    else {
        incorrect++;
    }
}
})

