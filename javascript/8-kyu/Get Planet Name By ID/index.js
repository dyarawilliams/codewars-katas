// The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"

// Parameters: positive integer between 1 and 8
// Returns: a string consisting of a planet name
// Examples: (7) -> Uranus, (5) -> Jupiter, (2) -> Venus, (0) -> NOT A VALID PLANET ID

// Psuedo: Create a function called getPlanetName that takes in one parameter which is the id of the planet and returns a planet name if the correct id number is invoked within the function. 

// Solution 1 
// function getPlanetName(id) {
//     switch (id) {
//         case 1:
//             return 'Mercury'
//         case 2:
//             return 'Venus'
//         case 3:
//             return 'Earth'
//         case 4:
//             return 'Mars'
//         case 5:
//             return 'Jupiter'
//         case 6:
//             return 'Saturn'
//         case 7:
//             return 'Uranus'
//         case 8:
//             return 'Neptune'
//     }

//     return name;
// }

// Solution 2 
function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
        default: 
            name = 'NOT A VALID PLANET ID';
    }

    return name;
}

console.log(getPlanetName(7));
console.log(getPlanetName(5));
console.log(getPlanetName(2));
console.log(getPlanetName(0));