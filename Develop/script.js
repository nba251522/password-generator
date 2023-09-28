// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

function generatePassword() {
var length;
var includeLowercase;                                                                             
var includeUppercase;
var includeNumber;
var includeSpecialCharacter;
var passwordLength = prompt("Enter password length between 8 and 128:");

var includeLowercase = confirm("Include lowercase characters?");
var numLowercase = 0; 
if (includeLowercase) {
    numLowercase = parseInt(prompt("Please enter the desired amount of lower case letters?"));
  }
}





























// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
