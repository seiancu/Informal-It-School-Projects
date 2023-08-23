var defaultOptions = ["Rock", "Paper", "Scissors"];

var computerOption =
  defaultOptions[Math.floor(Math.random() * defaultOptions.length)];

var playerOption =
  defaultOptions[Math.floor(Math.random() * defaultOptions.length)];

function play() {
  //case 1
  if (computerOption == "Rock" && playerOption == "Paper") {
    console.log("Computer choice: " + '"' + "Rock" + '"');
    console.log("Player choice: " + '"' + "Paper" + '"');
    console.log("\n" + "Player wins!");

    // case 2
  } else if (computerOption == "Rock" && playerOption == "Scissors") {
    console.log("Computer choice: " + '"' + "Rock" + '"');
    console.log("Player choice: " + '"' + "Scissors" + '"');
    console.log("\n" + "Computer wins!");

    // case 3
  } else if (computerOption == "Paper" && playerOption == "Rock") {
    console.log("Computer choice: " + '"' + "Paper" + '"');
    console.log("Player choice: " + '"' + "Rock" + '"');
    console.log("\n" + "Computer wins!");

    // case 4
  } else if (computerOption == "Scissors" && playerOption == "Rock") {
    console.log("Computer choice: " + '"' + "Scissors" + '"');
    console.log("Player choice: " + '"' + "Rock" + '"');
    console.log("\n" + "Player wins!");

    // case 5
  } else if (computerOption == "Paper" && playerOption == "Scissors") {
    console.log("Computer choice: " + '"' + "Paper" + '"');
    console.log("Player choice: " + '"' + "Scissors" + '"');
    console.log("\n" + "Player wins!");

    // case 6
  } else if (computerOption == "Scissors" && playerOption == "Paper") {
    console.log("Computer choice: " + '"' + "Scissors" + '"');
    console.log("Player choice: " + '"' + "Paper" + '"');
    console.log("\n" + "Computer wins!");

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
