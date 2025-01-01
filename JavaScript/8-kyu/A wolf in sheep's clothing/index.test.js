const warnTheSheep = require('./index');

describe("Warn the sheep in front of the wolf that it is about to be eaten", () => {

    test ("If the wolf is the closest animal to you", () => {
        expect(warnTheSheep(["wolf"])).toBe(
            "Pls go away and stop eating my sheep"
        );
        expect(warnTheSheep(["sheep", "sheep", "wolf"])).toBe(
            "Pls go away and stop eating my sheep"
        );
    });

    test("If the wolf is close to a sheep", () => {
        expect(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])).toBe("Oi! Sheep number 2! You are about to be eaten by a wolf!");
        expect(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])).toBe("Oi! Sheep number 5! You are about to be eaten by a wolf!")
        expect(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])).toBe("Oi! Sheep number 6! You are about to be eaten by a wolf!");
        expect(warnTheSheep(["sheep", "wolf", "sheep"])).toBe("Oi! Sheep number 1! You are about to be eaten by a wolf!");
    });
});