// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// Parameters: nbPetals, a positive integer representing the number of petals on the flower.
// Returns: a string representing the phrase corresponding to the last petal.

// Example: 
// howMuchILoveYou(7) => "I love you", howMuchILoveYou(3) => "a lot", howMuchILoveYou(6) => "not at all"

// Pseudo Code:
// 1. Create an array of phrases corresponding to the petals.
// 2. Calculate the index of the phrase based on the number of petals.
// 3. Return the phrase at the calculated index.

const howMuchILoveYou = (nbPetals) => {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    
    // Calculate the index based on the number of petals
    const index = (nbPetals - 1) % phrases.length;
    
    // Return the corresponding phrase
    return phrases[index];
}

module.exports = howMuchILoveYou;