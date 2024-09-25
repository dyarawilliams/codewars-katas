// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be strings, and normal letters.

// For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.

// Parameters: non empty strings, and normal letters
// Returns: boolean, true or false
// Examples: ("Fox", "x") -> true, ("Rhino", "o") -> true
// ("Meerkat", "t") -> true, ("Dog", "a"), ("Cat", "b") -> false, ("Tiger", "t") -> false 

// Psuedo: Debug the given function so that the tail arguement is the same as the last letter of the body arguement

// function correctTail(bod, tail ;
  
//   sub = body.substr(bodylength-(tail.length)
  
//   if sub = tail) ;
//     return true
//   }
//   else 
//     return false

// Solution 1
// function correctTail(body, tail){
//     let sub = body[body.length-1];
//     return (sub === tail) ? true : false;
// }

// Solution 2 
function correctTail(body, tail){
  
  let sub = body.substr(body.length-(tail.length));
  
  if (sub === tail){
    return true;
  } else { 
    return false;
  }
}

// Solution 3 - arrow function
// const correctTail = (body, tail) => sub === tail ? true : false;

module.exports = correctTail;