document.ready = function () {

$(".start-button").on("click", function(){
    $("#start-page").css("visibility", "hidden");
    startGame();
    console.log("done");
})
$(".done-button").on("click", function () {
    $("#quiz").hide();
    resultsPage();
})

var correct = 0;
var incorrect = 0;
var unsanswered = 0;

var startGame = function() {
    $("#start-page").hide();
}

var questionsPage = function () {
    $("#quiz").show();
}

var resultsPage = function () {
    $("#results-page").css("visibility", "visible");
}

var timer = function () {

}
}