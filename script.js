// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {

    // Generated password
    var password = "";

    // Set of characters organized by type
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // This loop is for: error handling password length
    var passwordNotWithinBounds = true;
    while (passwordNotWithinBounds) {

        // Store the user input for password length
        var passwordLength = parseInt(prompt('How many chars?'));

        // Check if it meets our length requirement
        if ((passwordLength < 8) || (passwordLength > 128)) {
            alert("Please select between 8 - 128 characters!");
        } else {
            passwordNotWithinBounds = false;
        };
    }

    alert("You will be asked " + passwordLength + " prompts to determine the password.");
    // This loop: asks the user for the char type at each iteration and updates the password accordingly
    for (let i = 0; i < passwordLength; i++) {
        
        // Store user input for character type
        var currentCharacter = prompt("Please enter the type of character for the password: 'c' for capital letter, 'l' for lowercase letter, 'n' for a number, 's' for a special character");

        // This loop is for: error handling password character type
        var incorrectCharacterType = true;
        while (incorrectCharacterType) {
            // If user selects correct type, then break error handling loop
            if ( (currentCharacter == "c") || (currentCharacter == "l") || (currentCharacter == "n") || (currentCharacter == "s") ) {
                incorrectCharacterType = false;
            } else {
                alert("PLEASE ENTER VALUES 'c', 'l', 'n', 's' ONLY");
                currentCharacter = prompt("Please enter the type of character for the password: 'c' for capital letter, 'l' for lowercase letter, 'n' for a number, 's' for a special character");
            }

        }

        // This switch case: generates a random character depending on the user selected current-character-type, then appends it to the password
        switch (currentCharacter) {
            case "c":
                password += capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length));
                break;
            case "l":
                password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                break;
            case "n":
                password += numbers.charAt(Math.floor(Math.random() * numbers.length));
                break;
            case "s":
                password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
                break;
        }
    }

    return password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);







