
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var numeric = "1234567890"
var special = "*&^%$#@!"; 
var finalChar = ""; 
var finishedPassword = ""; 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = userInfo(); 

  if (passwordLength === null) {
    return null; 
  }

  for (var i = 0; i < passwordLength; i++) {
    finishedPassword += finalChar.charAt(Math.floor (Math.random() * finalChar.length));
  }
  return finishedPassword;
}
  
function userInfo() {
  var passwordLength = parseInt(prompt("Please enter the length of your password. Choose between 8 and 128 characters."));
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength >= 128) {
    alert("How many characters are in your password? Please choose between 8 - 128")
    return null; 
  }
  if (Number.isNaN(passwordLength)){
    alert("How many characters are in your password? Please choose between 8 - 128")
    return null;
  }
  var includeUppercase = confirm("Please confirm the use of uppercase characters");
  var includeLowercase = confirm("Please confirm the use of lowercase characters")
  var includeNumeric = confirm("Please confirm the use of numeric characters?");
  var includeSpecial = confirm("Please confirm the use of special characters?");

  if (includeUppercase) {
  finalChar += uppercase
    }
 
  if (includeLowercase) {
  finalChar += lowercase
    }
 
  if (includeNumeric) {
  finalChar += numeric
    }
 
  if (includeSpecial) {
   finalChar += special
    }
 
  return passwordLength; 
}


generateBtn.addEventListener("click", writePassword);
