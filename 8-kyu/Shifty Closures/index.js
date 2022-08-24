// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

let name = 'Abe';
let greet_abe = function() {
    return "Hello, " + name + '!';
};
let name2 = 'Ben';
let greet_ben = function() {
    return "Hello, " + name2 + '!';
};