// ======================================================
// 📌 Topic: Arrow Functions `()=>` in JavaScript (ES6+)
// ======================================================

/**
 * ✅ What is it?
 * Arrow Functions provide a shorter syntax for writing functions using `()=>`.
 * 
 * ✅ Why is it useful?
 * - Concise, clean function syntax
 * - Inherits `this` from surrounding context (lexical `this`)
 * - Common in modern JavaScript, especially with arrays, callbacks, React, etc.
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * const functionName = (parameters) => {
 *     // code to execute
 * };
 * 
 * ✅ Real-life example:
 * - Short utility functions
 * - Array methods (map, filter, etc.)
 * - Safer `this` handling in classes or components
 */

// 🧠 Basic Example — Arrow Function
const greet = () => {
  console.log("Hello, World!");
};
greet();
// Output: "Hello, World!"

// ✅ Arrow Function with Parameters
const welcomeUser = (name) => {
  console.log(`Welcome, ${name}!`);
};
welcomeUser("Rohit");
// Output: "Welcome, Rohit!"

// ✅ Arrow Function Returning Value (Implicit Return)
const add = (a, b) => a + b;
console.log(add(5, 3));
// Output: 8


// ✅ Arrow Functions & `this` Behavior
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  }
};
person.greet();
// Output after 1 sec: "Hello, Alice"

// ✅ Shortest Form — Single Parameter, One-liner
const square = n => n * n;
console.log(square(4));
// Output: 16

// ✅ Arrow Function with Multiple Parameters
const multiply = (x, y) => x * y;
console.log(multiply(3, 7));
// Output: 21

// ✅ Arrow Function with No Parameters
const sayHello = () => console.log("Hello!");
sayHello();
// Output: "Hello!"

// ✅ Arrow Function with Default Parameters
const greetUser = (name = "Guest") => console.log(`Hello, ${name}!`);
greetUser();
// Output: "Hello, Guest!"

// ✅ Arrow Function with Rest Parameters
const logNumbers = (...numbers) => console.log("Numbers:", numbers);
logNumbers(1, 2, 3, 4);
// Output: "Numbers: [1, 2, 3, 4]"

// ✅ Arrow Function with Destructuring Parameters
const displayUser = ({ name, age }) => console.log(`Name: ${name}, Age: ${age}`);
displayUser({ name: "Alice", age: 30 });
// Output: "Name: Alice, Age: 30"

// ✅ Arrow Function as Callback
const processData = (data, callback) => {
  const processed = data.map(item => item * 2);
  callback(processed);
};
processData([1, 2, 3], (result) => {
  console.log("Processed Data:", result);
});
// Output: "Processed Data: [2, 4, 6]"

// ✅ Arrow Function with Arrow Function as Callback
const fetchData = (callback) => {
  const data = [1, 2, 3];
  callback(data);
}
fetchData(data => {
  console.log("Fetched Data:", data);
});
// Output: "Fetched Data: [1, 2, 3]"


// ✅ Emoji/Unicode Example
const showEmoji = emoji => console.log(`Emoji: ${emoji}`);
showEmoji("🚀");
// Output: "Emoji: 🚀"

// ======================================================= //

// ✅ Real-world Example: Array `.map()` with Arrow Functions
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6]

// ✅ Real-world Example: Array `.filter()` with Arrow Functions
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2]

// ✅ Real-world Example: Array `.reduce()` with Arrow Functions
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 6
