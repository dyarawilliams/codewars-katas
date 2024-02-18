/* 
Given an array of integers your solution should find the smallest integer.

For example:

  - Given [34, 15, 88, 2] your solution will return 2
  - Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// Parameters: array of integers
// Returns: smallest integer
// Examples: [34,15,88,2] -> 2, [34, -345, -1, 100] -> -345, [78,56,232,12,18] -> 12

// Psuedo: ?

// Solution 1
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
// }

// Solution 2 

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallestNumber;
//     // Loop through the array to check each number
//     for(let i = 0; i < args.length; i++){
//       const arrNum = args[i];
//       if (i === 0) {
//         smallestNumber = arrNum;
//       }
//       if(arrNum < smallestNumber){
//         smallestNumber = arrNum;
//       }
//     }
//     return smallestNumber;
//   }
// }

// Solution 3
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let temp;
    for(let i = 0; i < args.length; i++) {
      if (args[i] <= args[0]){
        args[0] = args[i];
        temp = args[i];
      }
    }
    return temp;
  }
}

// console.log(findSmallestInt([34, 15, 88, 2]))
// console.log(findSmallestInt([34, -345, -1, 100]))
// console.log(findSmallestInt([78,56,232,12,18]))