// ======================================================
// 📌 Topic: Function Overloading Concept in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * **Function Overloading** is the concept of creating multiple functions with the same name but different parameters.
 * 
 * ✅ But in JavaScript?
 * - JavaScript doesn't have true function overloading like languages such as Java or C++.
 * - However, we can **simulate overloading** using:
 *   - Optional Parameters
 *   - `typeof` checks
 *   - Rest Parameters
 * 
 * ✅ Why is it useful?
 * - Builds flexible, powerful functions
 * - Handles different argument types/lengths
 * - Improves readability in real-world utilities
 */

// 🧠 Basic Example — Simulated Overloading with Parameters
function greet(name, emoji) {
  if (emoji) {
    console.log(`Hello, ${name} ${emoji}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}
greet("Rohit");
// Output: "Hello, Rohit"
greet("Rohit", "🚀");
// Output: "Hello, Rohit 🚀"

// ✅ Using `typeof` for Flexible Overloading
function display(value) {
  if (typeof value === "number") {
    console.log(`Number: ${value}`);
  } else if (typeof value === "string") {
    console.log(`String: ${value}`);
  } else {
    console.log("Unsupported type");
  }
}
display(100);
// Output: "Number: 100"
display("PureCravve");
// Output: "String: PureCravve"

// ✅ Using Rest Parameters for Overloading
function showItems(...items) {
  if (items.length === 0) {
    console.log("No items provided");
  } else {
    console.log(`Items: ${items.join(", ")}`);
  }
}
showItems();
// Output: "No items provided"
showItems("Cake", "Cookies", "Brownie");
// Output: "Items: Cake, Cookies, Brownie"

// ✅ Combining Techniques for Complex Overloading
function processInput(input, ...options) {
  if (typeof input === "string") {
    console.log(`Processing string: ${input}`);
  } else if (typeof input === "number") {
    console.log(`Processing number: ${input}`);
  } else {
    console.log("Unsupported input type");
  }

  if (options.length > 0) {
    console.log(`Options: ${options.join(", ")}`);
  }
}
processInput("Hello", "option1", "option2");
// Output: "Processing string: Hello"
// Output: "Options: option1, option2"
processInput(42, "optionA");
// Output: "Processing number: 42"
// Output: "Options: optionA"

// ✅ Using Destructuring for Overloading
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Alice", age: 30 });
// Output: "Name: Alice, Age: 30"
// displayUser({ name: "Bob" }); // Error: age is missing
// Output: "Name: Bob, Age: undefined" (if age is optional)

// ✅ Using Default Parameters for Overloading
function greetUser(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}
greetUser();
// Output: "Hello, Guest!"
greetUser("Rohit");
// Output: "Hello, Rohit!"

// ✅ Using Optional Parameters for Overloading
function calculateArea(length, width = length) {
  return length * width;
}
console.log(calculateArea(5));
// Output: 25 (square area)
console.log(calculateArea(5, 10));
// Output: 50 (rectangle area)


// ============================================================= //

// ✅ Real-world Example: Flexible Cart Function
function addToCart(product, quantity = 1) {
  console.log(`Added ${quantity} x ${product} to cart`);
}
addToCart("Muffin");
// Output: "Added 1 x Muffin to cart"
addToCart("Brownie", 3);
// Output: "Added 3 x Brownie to cart"

// ✅ Real-world Example: Utility Function
function calculateTotal(...prices) {
  if (prices.length === 0) {
    return 0;
  }
  return prices.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(10, 20, 30));
// Output: 60
console.log(calculateTotal(5, 15));
// Output: 20
console.log(calculateTotal());
// Output: 0 (no prices provided)