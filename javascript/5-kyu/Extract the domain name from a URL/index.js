// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Tags: Parsing, Regular Expressions

// Parameters: a url as a string
// Returns: a string containing the domain name from the original URL
// Examples: “http://github.com/carbonfive/raygun” => “github”, 
//           “https://5-4iww203ghdte47uus7dy7.edu/img/” => “5-4iww203ghdte47uus7dy7”
//           “y21lwmavhw.pro/error” => “y21lwmavhw”

// Psuedo: Decalre a function called domainName that takes in a url(string) that parses out just the domain name and returns it as a string

// Solution 1
// Replace the schemes with an empty string 
// Split the string at the . delimeter and return the first element that shows just the domain
const domainName = (url) => url.replace('http://', '').replace('https://', '').replace('www.', '').split('.').shift()

// Solution 2
// function domainName(url){
//     return url.replace(/.+\/\/|www.|\..+/g, '')
// }  