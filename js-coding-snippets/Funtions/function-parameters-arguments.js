// ======================================================
// 📌 Topic: Function Parameters & Arguments in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * - **Parameters** are placeholders defined in the function declaration.
 * - **Arguments** are actual values passed when the function is called.
 * 
 * ✅ Why is it useful?
 * - Makes functions flexible and reusable
 * - Passes dynamic data to functions
 * - Essential for building utilities, logic, calculations
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function functionName(parameter1, parameter2) {
 *     // use parameters inside function
 * }
 * 
 * Call with:
 * functionName(argument1, argument2);
 * 
 * ✅ Real-life example:
 * - Sending user names, prices, or settings
 * - Building customizable functions
 * - Reusable operations across projects
 */

// 🧠 Basic Example — Parameters & Arguments
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Rohit");
// Output: "Hello, Rohit!"

// ✅ Function with Multiple Parameters
function calculateTotal(price, tax) {
  return price + tax;
}
console.log(calculateTotal(100, 15));
// Output: 115

// ✅ Using Arguments in Real-world Example
function formatOrder(product, quantity) {
  return `Order: ${quantity} x ${product}`;
}
console.log(formatOrder("Cookies", 3));
// Output: "Order: 3 x Cookies"

// ✅ Missing Arguments — Parameters become `undefined`
function sayHi(name) {
  console.log(`Hi, ${name}`);
}
sayHi();
// Output: "Hi, undefined"

// ✅ Using Default Values to Avoid `undefined`
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
welcome();
// Output: "Welcome, Guest"
welcome("Rohit");
// Output: "Welcome, Rohit"

// ✅ Function with Rest Parameters
function logMessages(...messages) {
  messages.forEach(msg => console.log(msg));
}
logMessages("Hello", "World", "JavaScript");
// Output:  
// "Hello"
// "World"
// "JavaScript"

// ✅ Function with Destructuring Parameters
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Alice", age: 30 });
// Output: "Name: Alice, Age: 30"

// ✅ Function with Object as Parameter
function createProfile({ username, email }) {
  return `Profile: ${username}, Email: ${email}`;
}
console.log(createProfile({ username: "rohit123", email: "password" }));
// Output: "Profile: rohit123, Email: password"

// ✅ Emoji/Unicode Example
function showEmoji(emoji) {
  console.log(`Your emoji: ${emoji}`);
}
showEmoji("🚀");
// Output: "Your emoji: 🚀"

// ======================================================= //

// ✅ Real-world Example: Function in Object
const calculator = {
  add: function (x, y) {
    return x + y;
  }
};
console.log(calculator.add(5, 10));
// Output: 15

// ✅ Real-world Example: Function as Callback
function processData(data, callback) {
  const processed = data.map(item => item * 2);
  callback(processed);
}
processData([1, 2, 3], function (result) {
  console.log("Processed Data:", result);
});
// Output: "Processed Data: [2, 4, 6]"

