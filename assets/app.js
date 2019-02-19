$(document).ready(function(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var number = 60;
    var countdown;

    var timer = function () {
        $("#timer").html();
    }
    var timer = function () {
        countdown = setInterval(decrement, 1000);
    }
    var decrement = function () {
        number--;
        $("#quiz-timer").html("" + number + "");
    }
    if (number === 0) {
        answers();
    }

  var startPage = function () {
      $("#quiz").hide();
      $("#results-page").hide();
  }
  startPage();

  $(".start-button").on("click", function(){
    $("#start-page").hide();
    $("#quiz").show();
    timer();
    })

    $(".done-button").on("click", function () {
        $("#quiz").hide();
        $("#results-page").show();
        answers();
    })
    

var answers = function () {
    var q1 = $("#q1:input:radio:checked").val();

    if (q1 === "greywind") {
        correct++;
        $("#correct").text("Correct: " + correct);
        console.log(correct);
        
    }
    else if (q1 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q2 = $("#q2:input:radio:checked").val();

    if (q2 === "robert") {
        correct++;
        $("#correct").text("Correct: " + correct);
        console.log(correct);
        
    }
    else if (q2 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q3 = $("#q3:input:radio:checked").val();

    if (q3 === "drogon") {
        correct++;
        $("#correct").text("Correct: " + correct);
        console.log(correct);
        
    }
    else if (q3 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q4 = $("#q4:input:radio:checked").val();

    if (q4 === "barristan") {
        correct++;
        $("#correct").text("Correct: " + correct);
        console.log(correct);
        
    }
    else if (q4 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q5 = $("#q5:input:radio:checked").val();

    if (q5 === "olenna") {
        correct++;
        $("#correct").text("Correct: " + correct);
        console.log(correct);
        
    }
    else if (q5 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }
}
})

