var targetNumber = $("#random-number").append(Math.floor(Math.random()*100)+19);
var crystals = [$("crystal1"), $("crystal2"), $("crystal3"), $("crystal4")];
  var wins = 0;
  var losses = 0;

  // value for crystal, need to make 4 integers to assign to the 4 crystals
  var numberOptions = $("#crystal-value").text(Math.floor(Math.random()*20));
  console.log(numberOptions);


  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.click("crystals", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.


    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      gameReset();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      gameReset();
    }

  });

  function gameReset() {
    counter = "";
    computerGuess = getNewComputerGuess();
    document.getElementById("guess-counter").innerHTML = "";
    document.getElementById("guess-left").innerHTML = guessLeft;
}