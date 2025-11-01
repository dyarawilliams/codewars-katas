// Kata Link: https://www.codewars.com/kata/57e3f79c9cb119374600046b

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// Parameters: string such as "john" or "aliCE"
// Returns: a string such as "Hello, John!" or "Hello, World!"
// Examples: (john) => "Hello, John!", (aliCE) => "Hello, Alice!", (null) => "Hello, World!", ("") => "Hello, World!"

// Solution 1
// function hello(name) {
//     return (name == '' || name == null) ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
// }

// Psuedo code
// 1. Check if name is empty or null
// 2. If it is, return "Hello, World!"
// 3. If not, capitalize the first letter of name and make the rest lowercase
// 4. Return "Hello, " + name + "!"

// Solution 2 - arrow function
const hello = (name) => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;

module.exports = hello;