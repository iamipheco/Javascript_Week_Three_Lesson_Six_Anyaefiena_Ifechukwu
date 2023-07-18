// Missing parentheses
// Task: 6(a)
// Given the following code snippet, identify and fix the syntax error:
// if (x === 5 {
//   console.log("x is equal to 5");
// }

// Solution
const x = 5

if (x === 5) {
  console.log('x is equal to 5')
}

// Task 6(b): Missing semicolon
// Given the following code snippet, identify and fix the syntax error:

// const message = "Hello, world"
// console.log(message)

// Solutiion
const message = 'Hello, world'
console.log(message)

// Task 6(c): Incorrect closing brace placement
// Given the following code snippet, identify and fix the syntax error:

// function sayHello() {
//   console.log("Hello!");
// }
// console.log("Goodbye!");

// Solution
function sayHello () {
  console.log('Hello!')
}

console.log('Goodbye!')
sayHello()

// Task 6(d): Mismatched opening and closing brackets

// Given the following code snippet, identify and fix the syntax error:
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2];

// Solution
const numbers = [1, 2, 3, 4, 5]
console.log(numbers[2])

// Task 6(e): Incorrect function definition

// Given the following code snippet, identify and fix the syntax error:

// const addNumbers = function(x, y)
//   return x + y;
// };
// console.log(addNumbers(5, 10));

// Solution
const addNumbers = function (x, y) {
  return x + y
}
console.log(addNumbers(5, 10))
