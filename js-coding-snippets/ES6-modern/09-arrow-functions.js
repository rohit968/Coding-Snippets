// ======================================================
// 📌 Topic: Arrow Functions in JavaScript (ES6+)
// es6-modern/09-arrow-functions.js
// ======================================================

/**
 * ✅ What is it?
 * Arrow functions provide a concise syntax for writing functions
 * and lexically bind the `this` context to the enclosing scope.
 *
 * ✅ Why is it useful?
 * - Shorter syntax (especially for small callbacks)
 * - Lexical `this` avoids manual binding in many cases
 * - Implicit return for single-expression bodies
 *
 * ✅ Syntax:
 * const fn = (param1, param2) => expression;
 * const fn = (param) => { statements };
 * const fn = () => expression;
 */

// 🔹 Basic Syntax
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 🔹 Single Parameter (no parentheses needed)
const square = x => x * x;
console.log(square(4)); // 16

// 🔹 No Parameters
const greet = () => console.log('Hello World');
greet(); // 'Hello World'

// 🔹 Block Body and Explicit Return
const max = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(max(5, 10)); // 10

// 🔹 Lexical `this`
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(`Timer: ${this.seconds}s`);
  }, 1000);
}
const timer = new Timer(); // `this` inside arrow refers to Timer instance

// 🔹 Real-life Example: Array Methods
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// 🔹 Real-life Example: Filtering
const people = [
  { name: 'Rohit', age: 26 },
  { name: 'Alice', age: 17 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

// 🗣️ Interview Tip:
// "Arrow functions are great for short callbacks and when you need `this`
// from the outer scope. But remember they cannot be used as constructors and
// lack their own `arguments` object."