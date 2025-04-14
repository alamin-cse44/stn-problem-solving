// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.


const square = (x) => x * x;
const double = (x) => x * 2;
const addFive = (x) => x + 5;

const composedFunction = (x) => addFive(double(square(x)));
const result = composedFunction(3); // (3^2 * 2) + 5 = 9 * 2 + 5 = 18 + 5 = 23
console.log(result); // Output: 23
