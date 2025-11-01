// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// Parameters: rooms: hash table
// Result: hash table

// Psuedo Code: 

let rooms = {
    room1: {
        name: "Run",
        description: "Your fridge is running better catch it",
        completed: true
    },
    room2: {
        name: "Walk",
        description: "Take your time",
        completed: true
    },
    room3: {
        name: "Sprint",
        description: "Go, Go, Go",
        completed: false
    }
}

module.exports = rooms;