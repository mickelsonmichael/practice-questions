const { test, expect, describe } = require("@jest/globals");
const { isOddOrEven, getPerson } = require("./ternaryOperator");

describe("is odd or even", () => {

    test("is odd correct", () => {
        expect(isOddOrEven(101)).toBe("odd");
    })
    
    test("is even correct", () => {
        expect(isOddOrEven(42)).toBe("even");
    })

});

describe("get person", () => {

    test("32 year olds can drive", () => {
        expect(getPerson("tim", 32)).toHaveProperty("canDrive", true);
    });

    test("12 year olds can't drive", () => {
        expect(getPerson("rebecca", 12)).toHaveProperty("canDrive", false);
    });

    test("21 year olds can drink", () => {
        expect(getPerson("jessica", 21)).toHaveProperty("canDrink", true);
    });

    test("2 year olds cannot drink", () => {
        expect(getPerson("wendy", 2)).toHaveProperty("canDrink", false);
    });
})

