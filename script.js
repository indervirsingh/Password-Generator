// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {

    var password = "";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789";
    const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // This loop is for: error handling password length
    while (passwordNotWithinBounds) {

        // Store the user input
        var pwlength = parseInt(prompt('How many chars?'));

        // Check if it meets our length requirement
        if ((pwlength < 8) || (pwlength > 128)) {
            alert("Please select between 8 - 128 characters!");
          } 
        else {
            passwordNotWithinBounds = false;
        };
    }

    // This loop: asks the user for the char type at each iteration and updates the password accordingly
    for (let i = 0; i < pwlength; i++) {
        alert("You will be asked " + pwlength + " prompts to determine the password.");
        var currentCharacter = prompt("Please enter the type of character for the password: 'c' for capital letter, 'l' for lowercase letter, 'n' for a number, 's' for a special character");
        // This loop is for: error handling password character type
        var 
        switch (currentCharacter) {
            case 'c':
                password += capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length));
                break;
            case 'l':
                password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                break;
            case 'n':
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                break;
            case 's':
                password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
                break;
        }
        // password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);







