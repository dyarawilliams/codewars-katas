// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// The sorting should sort by symbols and numbers first, then uppercase letters, and finally lowercase letters.

// PREP method:
// Parameters: an array of strings (textbooks)
// Returns: an array of strings (textbooks) sorted by subject
// Example: ["Math", "science", "History"] => ["History", "Math", "science"], ["Alg#bra", "$istory", "Geom^try", "**english"] => ["$istory", "**english", "Alg#bra", "Geom^try"]

// Pseudocode: 
// 1. Create a function called sorter that takes an array of strings as a parameter
// 2. Use the sort method to sort the array of strings
// 3. Use the toLowerCase method to make the sorting case insensitive
// 4. Return the sorted array of strings

const sorter = (textbooks) => {
    return textbooks.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        return (aLower < bLower) ? -1 : (aLower > bLower) ? 1 : 0;
    });
}

module.exports = sorter;