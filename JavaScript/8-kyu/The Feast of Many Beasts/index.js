// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Parameters: two strings representing the animal's name and a string representing the dish
// Returns: boolean value indicating whether the dish is allowed to be brought to the feast
// Example: feast("great blue heron", "garlic naan") => true, feast("chickadee", "chocolate cake") => true, feast("brown bear", "bear claw") => false

// Pseudocode:
// 1. Define a function feast that takes two parameters: beast and dish.
// 2. Check if the start letter of the beast is equal to the first letter of dish.
// 3. Check if the end letter of beast is equal to the last letter of dish.
// 4. If both conditions are true, return true.
// 5. If either condition is false, return false.

// Solution 1

function feast(beast, dish) {
  // Check if the first letter of beast is equal to the first letter of dish
  const startLetterMatch = beast[0] === dish[0];
  
  // Check if the last letter of beast is equal to the last letter of dish
  const endLetterMatch = beast[beast.length - 1] === dish[dish.length - 1];
  
  // Return true if both conditions are true, otherwise return false
  return startLetterMatch && endLetterMatch;
}

module.exports = feast;