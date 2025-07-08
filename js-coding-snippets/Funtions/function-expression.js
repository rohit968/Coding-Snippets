// ======================================================
// 📌 Topic: Function Expressions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Function Expression** defines a function and assigns it to a variable.
 * Can be:
 * - Anonymous (no name)
 * - Named (for debugging/recursion)
 * 
 * ✅ Why is it useful?
 * - Useful for assigning functions as values
 * - Supports function expressions inside objects or callbacks
 * - Doesn't support hoisting (must be declared before use)
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * const myFunc = function(parameters) {
 *     // code to execute
 * };
 * 
 * ✅ Real-life example:
 * - Passing functions as arguments (callbacks)
 * - Functions inside objects
 * - Building utilities with predictable scope
 */

// 🧠 Basic Example — Anonymous Function Expression
const greet = function () {
  console.log("Hello, World!");
};
greet();
// Output: "Hello, World!"

// ✅ Function Expression with Parameters
const welcomeUser = function (name) {
  console.log(`Welcome, ${name}!`);
};
welcomeUser("Rohit");
// Output: "Welcome, Rohit!"

// ✅ Function Expression Returning Value
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));
// Output: 20

// ✅ Named Function Expression (Helps in Debugging)
const sum = function addNumbers(a, b) {
  return a + b;
};
console.log(sum(3, 7));
// Output: 10

// ✅ Function as a Callback
const numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num);
});
// Output: 1 2 3

// ✅ Function Expression Inside an Object
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  }
};
console.log(calculator.add(10, 5));
// Output: 15

// ✅ Function Expression with Default Parameters
const greetUser = function (name = "Guest") {
  console.log(`Hello, ${name}!`);
};
greetUser();
// Output: "Hello, Guest!"

// ✅ Function Expression with Rest Parameters
const logNumbers = function (...numbers) {
  console.log("Numbers:", numbers);
};
logNumbers(1, 2, 3, 4);
// Output: "Numbers: [1, 2, 3, 4]"

// ✅ Function Expression with Destructuring Parameters
const displayUser = function ({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Alice", age: 30 });
// Output: "Name: Alice, Age: 30"

// ✅ Function Expression with Callback
const processData = function (data, callback) {
  const processed = data.map(item => item * 2);
  callback(processed);
};
processData([1, 2, 3], function (result) {
  console.log("Processed Data:", result);
});
// Output: "Processed Data: [2, 4, 6]"

// ✅ Function Expression with Arrow Function as Callback

const fetchData = function (callback) {
  const data = [1, 2, 3];
  callback(data);
}
fetchData(data => {
  console.log("Fetched Data:", data);
});
// Output: "Fetched Data: [1, 2, 3]"


// ✅ Emoji/Unicode Example
const showEmoji = function (emoji) {
  console.log(`Your emoji: ${emoji}`);
};
showEmoji("🚀");
// Output: "Your emoji: 🚀"

// ======================================================= //

// ✅ Real-world Example: Function in Object
const new_calculator = {
  add: function (x, y) {
    return x + y;
  },
};
console.log(new_calculator.add(5, 10));
// Output: 15

// ✅ Real-world Example: Function as Callback
const processArray = function (arr, callback) {
  const result = arr.map(callback);
  console.log("Processed Array:", result);
}
processArray([1, 2, 3], function (num) {
  return num * 2;
});
// Output: "Processed Array: [2, 4, 6]"
