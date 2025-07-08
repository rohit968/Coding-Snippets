// ======================================================
// 📌 Topic: Returning Values from Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Functions can return values using the `return` keyword, sending data back to where the function was called.
 * 
 * ✅ Why is it useful?
 * - Allows functions to produce results
 * - Enables chaining, calculations, and data processing
 * - Helps build reusable, predictable logic
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function functionName() {
 *     return value;
 * }
 * 
 * ✅ Real-life example:
 * - Calculating totals or discounts
 * - Fetching processed data
 * - Building utility functions
 */

// 🧠 Basic Example — Returning a String
function greet() {
  return "Hello, World!";
}

console.log(greet());
// Output: "Hello, World!"

// ✅ Function with Parameters Returning a Value
function welcomeUser(name) {
  return `Welcome, ${name}!`;
}

const message = welcomeUser("Rohit");
console.log(message);
// Output: "Welcome, Rohit!"

// ✅ Returning Numbers from Functions
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);
console.log(sum);
// Output: 8

// ✅ Returning Objects from Functions
function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
const user = createUser("Alice", 25);
console.log(user);
// Output: { name: "Alice", age: 25 }

// ✅ Returning Functions (Higher-Order Functions)
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5));
// Output: 10

// ✅ Returning Arrays from Functions
function getFruits() {
  return ["Apple", "Banana", "Cherry"];
}
const fruits = getFruits();
console.log(fruits);
// Output: ["Apple", "Banana", "Cherry"]

// ✅ Returning Boolean Values
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
// Output: true

// ✅ Emoji/Unicode Example
function favoriteEmoji() {
  return "🚀";
}
console.log(favoriteEmoji());
// Output: "🚀"

// ======================================================= //

// ✅ Real-world Example: Calculate Discount
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  return price - discount;
}
console.log(calculateDiscount(1000, 10));
// Output: 900

// ✅ Real-world Example: Fetching Data
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}
fetchData().then(data => {
  console.log(data);
});
// // Output: "Data fetched successfully!" (after 1 second)

// ✅ Real-world Example: Async/Await
async function fetchDataAsync() {
  const data = await fetchData();
  console.log(data);
}
fetchDataAsync();
// // Output: "Data fetched successfully!" (after 1 second)
