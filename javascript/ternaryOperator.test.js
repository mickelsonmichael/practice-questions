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
        expect(getPerson(32, 0)).toHaveProperty("canDrive", true);
    });

    test("12 year olds can't drive", () => {
        expect(getPerson(12, 0)).toHaveProperty("canDrive", false);
    });

    test("owning any cats means they own cats", () => {
        expect(getPerson(21, 2)).toHaveProperty("catOwnerStatus", "some");
    });

    test("owning no cats means they own no cats", () => {
        expect(getPerson(21, 0)).toHaveProperty("catOwnerStatus", "none");
    });
})

