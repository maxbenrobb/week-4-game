var numberToGuess;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var totalScore;
var wins = 0;
var losses = 0;

$(document).ready(function() {

  resetGame();

  $('#crystal1, #crystal2, #crystal3, #crystal4').click(function(e){
    var imageId = e.target.id;

    if(imageId === 'crystal1') {
      totalScore += crystal1;
    } else if(imageId == 'crystal2') {
      totalScore += crystal2;
    } else if(imageId == 'crystal3') {
      totalScore += crystal3;
    } else if(imageId == 'crystal4') {
      totalScore += crystal4;
    }
    $('#total-score').text(totalScore);

    if(totalScore === numberToGuess) {
      wins++;
      $('#wins-counter').text(wins);
      resetGame();

    } else if(totalScore > numberToGuess) {
      losses++;
      $('#losses-counter').text(losses);
      resetGame();
    }
   });
});

function resetGame() {
  numberToGuess = Math.floor(Math.random()*100)+19;
  crystal1 = Math.floor(Math.random()*20 + 1);
  crystal2 = Math.floor(Math.random()*20 + 1);
  crystal3 = Math.floor(Math.random()*20 + 1);
  crystal4 = Math.floor(Math.random()*20 + 1);
  totalScore = 0;

  $('#total-score').text(totalScore);
  $('#number2guess').text(numberToGuess);
}