// ======================================================
// 📌 Topic: Function Declarations in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Function Declaration** defines a named function using the `function` keyword.
 * 
 * ✅ Why is it useful?
 * - Creates reusable blocks of code
 * - Supports hoisting (can be called before declaration)
 * - Improves readability with meaningful names
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function functionName(parameters) {
 *     // code to execute
 * }
 * 
 * ✅ Real-life example:
 * - Processing user inputs
 * - Performing calculations
 * - Building reusable utilities
 */

// 🧠 Basic Example — Function Declaration
function greet() {
  console.log("Hello, World!");
}
greet();
// Output: "Hello, World!"

// ✅ Function with Parameters
function welcomeUser(name) {
  console.log(`Welcome, ${name}!`);
}
welcomeUser("Rohit");
// Output: "Welcome, Rohit!"

// ✅ Function Returning a Value
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);
console.log(sum);
// Output: 8

// ✅ Hoisting Example (Works before declaration)
sayHi();
function sayHi() {
  console.log("Hi there!");
}

// ✅ Function with Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser();
// Output: "Hello, Guest!"

// ✅ Function with Rest Parameters
function logNumbers(...numbers) {
  console.log("Numbers:", numbers);
}
logNumbers(1, 2, 3, 4);
// Output: "Numbers: [1, 2, 3, 4]"

// ✅ Function with Destructuring Parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Alice", age: 30 });
// Output: "Name: Alice, Age: 30"

// ✅ Function with Callback
function processData(data, callback) {
  const processed = data.map(item => item * 2);
  callback(processed);
}
processData([1, 2, 3], (result) => {
  console.log("Processed Data:", result);
});
// Output: "Processed Data: [2, 4, 6]"

// ✅ Function with Arrow Function as Callback
function fetchData(callback) {
  const data = [1, 2, 3];
  callback(data);
}
fetchData(data => {
  console.log("Fetched Data:", data);
});
// Output: "Fetched Data: [1, 2, 3]"

// Advanced Examples
// ✅ Function with Nested Functions
function outerFunction() {
  function innerFunction() {
    console.log("Inner function called!");
  }
  innerFunction();
}
outerFunction();
// Output: "Inner function called!"

// ✅ Function with IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed!");
}
)();
// Output: "IIFE executed!"

// ✅ Function with Closure
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    console.log(`Count: ${count}`);
  };
}
const counter = makeCounter();
counter(); // Output: "Count: 1"
counter(); // Output: "Count: 2"

// ✅ Function with Promises
function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}
fetchDataAsync().then(data => {
  console.log(data);
}
);
// Output: "Data fetched successfully!" (after 1 second)

// ✅ Function with Async/Await
async function fetchDataAsyncAwait() {
  const data = await fetchDataAsync();
  console.log(data);
}
fetchDataAsyncAwait();
// Output: "Data fetched successfully!" (after 1 second)


// ✅ Emoji/Unicode Example
function showEmoji(emoji) {
  console.log(`Your emoji: ${emoji}`);
}
showEmoji("🚀");
// Output: "Your emoji: 🚀"

// ================================================ //

// ✅ Real-world Example: Calculate Discount
function calculateDiscount(price, discountPercent) {
  return price - (price * (discountPercent / 100));
}
console.log(calculateDiscount(1000, 10));
// Output: 900

// ✅ Real-world Example: Format Date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}
console.log(formatDate(new Date()));
// Output: "October 1, 2023" (or similar based on current date)


