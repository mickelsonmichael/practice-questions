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
    return num % 2 === 0 ? "even" : "odd";
}

// Combining two statements
//
// You can use the ternary operator in more complex
// functional assignments, like React's setState method
//
// Using the spread (...) operator, convert the function
// below into a single statement. Do not assign `someone` to
// a variable and instead return it directly from the function
// (e.g. `return { age: age }`)
//
// params:
// `age` the age of the person (number)
// `numberOfCats` the number of cats the person owns
//
// returns:
// { name: string, age: number, canDrive: boolean, canDrink: boolean, catOwnerStatus: string }
function getPerson(age, numberOfCats) {
    return {
        age,
        canDrive: age > 15 ? true : false,
        catOwnerStatus: numberOfCats > 0 ? "some" : "none"
    };
}

module.exports = {
    isOddOrEven,
    getPerson
}