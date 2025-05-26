// Kata Link: https://www.codewars.com/kata/57284d23e81185ae6200162a

// Task
// Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:

// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"
// Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".

// This task may be more difficult for beginners. Good Luck!

// Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.

// for example, after you click "submit", you see these text on your screen:

// Top secret files: No. 3330
// Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
// and then:

// question 1 should answer:"3330"
// question 2 should answer:"eEB"
// question 3 should answer:"Apple core"
// if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)

// Although the text is not the same every time, the next time may appear:

// Top secret files: No. 2135
// Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
// You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.

// Parameters: string of encrypted text
// Return: decrypted string
// Example:
// "Pb qdph lv MrkqH." => "My name is John."
// "wklv lv dq hadpsoh" => "this is an example"
// "Khoor Zruog" => "Hello World"
// Note:

// Pseudo code: Declare a function named topSecret that takes a string as an argument. Inside the function, create a variable to hold the decrypted string. Loop through each character in the input string. If the character is an uppercase letter, shift it left by 3 positions in the alphabet. If the character is a lowercase letter, shift it left by 3 positions in the alphabet. If the character is not a letter, leave it unchanged. Return the decrypted string.

// Parameters: string of encrypted text
// Return: decrypted string
// Example:
// "Pb qdph lv Mrkq." => "My name is John."
// "wklv lv dq hadpsoh" => "this is an example"
// "Khoor Zruog" => "Hello World"

// Pseudo code: Declare a function named topSecret that takes a string as an argument. Inside the function, create a variable to hold the decrypted string. Loop through each character in the input string. If the character is an uppercase letter, shift it left by 3 positions in the alphabet. If the character is a lowercase letter, shift it left by 3 positions in the alphabet. If the character is not a letter, leave it unchanged. Return the decrypted string.

function topSecret(str){
    // Initialize an empty string to hold the decrypted text
    let decrypted = '';
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Get the character code of the current character
        let charCode = str.charCodeAt(i);
        // Check if the character is an uppercase letter
        // If it is, shift it left by 3 positions in the alphabet
        if (charCode >= 65 && charCode <= 90) { // Uppercase
            // Calculate the new character code and convert it back to a character
            // The formula ((charCode - 65 + 23) % 26) + 65 shifts the character left by 3 positions
            decrypted += String.fromCharCode(((charCode - 65 + 23) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase
            // Check if the character is a lowercase letter
            // If it is, shift it left by 3 positions in the alphabet
            // The formula ((charCode - 97 + 23) % 26) + 97 shifts the character left by 3 positions
            decrypted += String.fromCharCode(((charCode - 97 + 23) % 26) + 97);
        } else {
            // If the character is not a letter, leave it unchanged
            // Append the character to the decrypted string as is
            // This includes spaces, punctuation, and other special characters
            decrypted += str[i];
        }
    }
    return decrypted;
}

//question1: The top secret file number is...
answer1="3515";
//question2: Super agent's name is...
answer2="ZMJQHX";
//question3: He stole the treasure is...
answer3="Marie's husband";

module.exports = topSecret;