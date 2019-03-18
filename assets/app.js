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
    
        if (number === 0) {
            answers();
        }
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
    var q1 = $("input[name=Q1]:checked").val();
    console.log("Q1", q1);


    if (q1 === "greywind") {
        correct++;
        $("#correct").text("Correct: " + correct);
    
        
    }
    else if (q1 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q2 = $("input[name=Q2]:checked").val();
    console.log("Q2", q2);

    if (q2 === "robert") {
        correct++;
        $("#correct").text("Correct: " + correct);
        
    }
    else if (q2 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q3 = $("input[name=Q3]:checked").val();
    console.log("Q3", q3);

    if (q3 === "drogon") {
        correct++;
        $("#correct").text("Correct: " + correct);
        
    }
    else if (q3 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q4 = $("input[name=Q4]:checked").val();
    console.log("Q4", q4);

    if (q4 === "barristan") {
        correct++;
        $("#correct").text("Correct: " + correct);
        
    }
    else if (q4 == false) {
        unanswered++;
        $("#unanswered").html("Unanswered: " + unanswered);
        
    }
    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
    }

    var q5 = $("input[name=Q5]:checked").val();
    console.log("Q5", q5);

    if (q5 === "olenna") {
        correct++;
        $("#correct").text("Correct: " + correct);
        
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

