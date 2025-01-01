// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// Parameters: a string of a person name 
// Returns: a greeting consisting of Hello, my love if Johnny or Hello, (name) of the person if not Johnny
// Examples: ("Sandra") -> "Hello, Sandra!", ("Ben") -> "Hello, Ben!", ("Johnny") -> "Hello, my love!"

// Psuedo: Create a function called greet that takes in one parameter called name which is a string and returns a greeting stating Hello, (name)!

// Solution 1
// function greet(name){
//     return (name === "Johnny") ? "Hello, my love!" : "Hello, " + name + "!"
// }

// Solution 2 - Arrow Function 
const greet = name => name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`

console.log(greet("Sandra"))
console.log(greet("Ben"))
console.log(greet("Johnny"))