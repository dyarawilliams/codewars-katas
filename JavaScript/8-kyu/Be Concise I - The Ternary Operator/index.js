// Kata Link: https://www.codewars.com/kata/56f3f6a82010832b02000f38

// Be Concise I - The Ternary Operator
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

// TODO: Refactor and shorten the function

// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }

// Parameter: age (positive integer)
// Return: A string describing the age category
// Example: describeAge(12) => "You're a(n) kid", describeAge(15) => "You're a(n) teenager", describeAge(30) => "You're a(n) adult", describeAge(70) => "You're a(n) elderly"

const describeAge = age => `You're a(n) ${age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly"}`;

module.exports = describeAge;