// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    let century = 100
    let x = year/century
    if(year <= century) {
      return 1
    } else if(x > Math.round(x)) {
      return Math.round(x) + 1
    } else if(year > century) {
      return Math.round(x)
    }
}  