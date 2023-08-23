var button = document.getElementById("submit");
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");

button.addEventListener("click", validation);

function validation(e) {
  e.preventDefault();

  // Get the values of first and last name form input
  var firstNameValue = document.getElementsByClassName("firstName")[0].value;
  var lastNameValue = document.getElementsByClassName("lastName")[0].value;

  // Validation of First and Last names & set Confirmation banner visible
  if (firstNameValue === "") {
    firstName.style.border = "2px solid red";
  } else {
    firstName.style.border = "2px solid black";
  }

  if (lastNameValue === "") {
    lastName.style.border = "2px solid red";
  } else {
    lastName.style.border = "2px solid black";
    document.querySelector(".confirmation-banner").style.display = "block";
  }

  // Get First Name form input
  var name = document.querySelector(".name");
  name.innerHTML = firstNameValue;

  // Get the Gender option
  var option = document.getElementsByName("gender");

  for (var i = 0; i < option.length; i++) {
    if (option[i].checked) {
      userOption = "Gender: " + option[i].value;
    }
  }

  // Get the message from textarea
  var messageBox = document.querySelector(".message");
  var messageText = messageBox.value;

  // Display all the info in console
  console.log("First Name: " + firstNameValue);
  console.log("Last Name: " + lastNameValue);
  console.log(userOption);
  console.log("User message: " + messageText);
}
