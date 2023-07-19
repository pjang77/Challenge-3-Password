// Assignment Code - what is the point of the generateBtn 
var generateBtn = document.querySelector("#generate");
var includeUppercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(passwordLength,) {
  var userchoice = userInfo(); 
  
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
  var includeUppercase = confirm("Would you like uppercase characters?");
  var includeLowercase = confirm("Would you like uppercase characters")
  var includeNumeric = confirm("Would you like numeric characters?");
  var includeSpecial = confirm("Would you like special characters?");


var finalpassword = {
  length: passwordLength,
  includeUppercase: includeUppercase
}
return finalpassword
}

// Add event listener to generate button {
  // var passwordLength = prompt("Please enter the lenght of your password. Choose between 8 and 128 characters.");
  // passwordLength = parseInt(passwordLength); 


// if (passwordLength >= 8 || passwordLength <= 128) {
//   var includeLowercase = ("Would you like lowercase characters?");
//   var includeUppercase = ("Would you like uppercase characters?");
//   var includeNumeric = ("Would you like numeric characters?");
//   var includeSpecial = ("Would you like special characters?");
// }


generateBtn.addEventListener("click", writePassword);