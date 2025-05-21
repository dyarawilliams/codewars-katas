// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.

// Parameters: a string (full name of the neighbor)
// Returns: an array containing the full name and the truncated version of the name
// Example: whoIsPaying("Mexico") => ["Mexico", "Me"], whoIsPaying("Melania") => ["Melania", "Me"], whoIsPaying("Me") => ["Me", "Me"], whoIsPaying("") => [""], whoIsPaying("I") => ["I"]

// Pseudocode:
// 1. Create a function named whoIsPaying that takes a string as an argument.
// 2. Check if the length of the string is less than or equal to 2.
// 3. If it is, return an array containing the string as is.
// 4. If it is not, create a new string that contains the first two letters of the original string.
// 5. Return an array containing the original string and the new string.

// Solution 1
function whoIsPaying(name) {
    // Check if the length of the name is less than or equal to 2
    if (name.length <= 2) {
        // If it is, return an array containing the name as is
        return [name];
    } else {
        // If it is not, create a new string that contains the first two letters of the original string
        const truncatedName = name.slice(0, 2);
        // Return an array containing the original string and the new string
        return [name, truncatedName];
    }
}

module.exports = whoIsPaying;