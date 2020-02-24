// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";
  // create array for lowercase english characters
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lowercase = letters.split("");
  var numOfChars;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumber;
  var includeSpecial;

//create array for uppercase english 
var upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercase = upperletters.split("");

//create array for special characters  
var specialletters = "!@#$%^&*()"
var special = specialletters.split("");
//create array for special characters  
var numberletters = "1234567890"
var number = numberletters.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordResult = "";

}
//write function for generatePassword 
function  generatePassword(){
    getPrompts();
    var pass = buildPassword();
    return pass;
    
}

function getPrompts(){
  //length 8-128
  numOfChars = prompt("how many characters do you want (8 - 128");
  //check for lower case
  includeLowerCase = confirm('include lowercase letters?')

  //check for upper
  includeUpperCase = confirm('include uppercase letters?')

  //check for number 
  includeNumber = confirm('include number?')

  //check for special 
  includeSpecial = confirm('include Special Character?')
}

function buildPassword(){
    //check for number & proper length of password 
    console.log(typeof(numOfChars))
    if(!isNaN(parseInt(numOfChars))
    && numOfChars>= 8
    && numOfChars<= 128){
    //build password using loop
    // var passwordResult = "";
    var possibleCharacters = buildArray();
    for(var i = 0; i< numOfChars; i++){
      var randomCharacter = getRandomFromArray(possibleCharacters);
      passwordResult = passwordResult + randomCharacter;
    }
    return passwordResult;
  }
}

function buildArray() {
  var resultArray = [];
  if (includeLowerCase){
    // we want to include lowercase, add lowercase letters to resultArray 
    // letters = 'abcd...xyz'
    for (var i = 0; i < letters.length; i++){
      resultArray.push(letters[i]);
    }
  }
  if (includeUpperCase){
    // we want to include lowercase, add lowercase letters to resultArray 
    // letters = 'abcd...xyz'
    for (var i = 0; i < upperletters.length; i++){
      resultArray.push(upperletters[i]);
    }
  }
  if (includeNumber){
    // we want to include lowercase, add lowercase letters to resultArray 
    // letters = 'abcd...xyz'
    for (var i = 0; i < numberletters.length; i++){
      resultArray.push(numberletters[i]);
    }
  }
  if (includeSpecial){
    // we want to include lowercase, add lowercase letters to resultArray 
    // letters = 'abcd...xyz'
    for (var i = 0; i < specialletters.length; i++){
      resultArray.push(specialletters[i]);
    }
  }
  return resultArray;
}


function getRandomFromArray(array){
  return array[parseInt(Math.random() * array.length)]
}
    

 

//condition that throws an error if number less than 8 is entered 





//add prompt for 8-128 characters
  //if <8, quit

//add alert for lowercase

//add alert for uppercase

//add alert for symbol


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
