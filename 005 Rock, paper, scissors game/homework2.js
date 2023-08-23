var defaultOptions = ["Rock", "Paper", "Scissors"];

var computerOption =
  defaultOptions[Math.floor(Math.random() * defaultOptions.length)];

var playerOption =
  defaultOptions[Math.floor(Math.random() * defaultOptions.length)];

function displayOption(computer, player, winner) {
  console.log("Computer choice: " + '"' + computer + '"');
  console.log("Player choice: " + '"' + player + '"');
  console.log("\n" + winner + " wins!");
}

function play() {
  //case 1
  if (computerOption == "Rock" && playerOption == "Paper") {
    displayOption("Rock", "Paper", "Player");

    // case 2
  } else if (computerOption == "Rock" && playerOption == "Scissors") {
    displayOption("Rock", "Scissors", "Computer");

    // case 3
  } else if (computerOption == "Paper" && playerOption == "Rock") {
    displayOption("Paper", "Rock", "Computer");

    // case 4
  } else if (computerOption == "Scissors" && playerOption == "Rock") {
    displayOption("Scissors", "Rock", "Player");

    // case 5
  } else if (computerOption == "Paper" && playerOption == "Scissors") {
    displayOption("Paper", "Scissors", "Player");

    // case 6
  } else if (computerOption == "Scissors" && playerOption == "Paper") {
    displayOption("Scissors", "Paper", "Computer");

    // case tie
  } else if (computerOption == playerOption) {
    console.log("It's a tie");
    console.log("Try again");

    // unknown choice
  } else {
    console.log("Unknown choice" + "\n" + "Please try again!");
  }
}

play();
