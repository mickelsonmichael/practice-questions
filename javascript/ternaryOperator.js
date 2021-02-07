// The ternary operator (:?) is an inline alternative to the if...else statement
// it is also called the conditional operator

let result;
let condition = true; // could be any condition (e.g. 1 === myVar)

// The syntax is simple:
result = condition ? true : false;

// Which is equivalent to:
if (condition) {
    result = true;
}
else {
    result = false;
}

// =====
// Practice problems
// =====

// Simplifying a function
//
// Ternary operators can be used to simplify a multi-line
// statement into a single, succinct line
// This can help to reduce code complexity and readablility
//
// Convert the method below into a single-line ternary expression
//
// params:
// `num` the number to check
// returns:
// a string representing whether `num` is odd or even
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Combining two statements
//
// You can use the ternary operator in more complex
// functional assignments, like React's setState method
//
// Using the spread (...) operator, convert the function
// below into a single statement. Do not assign `someone` to
// a variable and instead return it directly from the function
// (e.g. `return { name: "Sarah" }`)
//
// params:
// `name` of the person (string)
// `age` the age of the person (number)
//
// returns:
// { name: string, age: number, canDrive: boolean, canDrink: boolean }
function getPerson(name, age) {
    let someone = { name, age };

    if (someone.age > 15) {
        someone.canDrive = true;
    } else {
        someone.canDrive = false;
    }

    if (someone.age > 20) {
        someone.canDrink = true;
    } else {
        someone.canDrink = false;
    }

    return someone;
}

module.exports = {
    isOddOrEven,
    getPerson
}