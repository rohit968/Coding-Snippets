// ======================================================
// 📌 Topic: Function Currying in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * **Currying** is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
 * 
 * ✅ Why is it useful?
 * - Breaks down complex functions into simpler, reusable parts  
 * - Allows presetting (partial application) of arguments  
 * - Improves code readability and flexibility  
 * - Popular in functional programming, React, and libraries like Lodash  
 * 
 * ✅ How to use it?
 * 1. Create a function that returns another function  
 * 2. Each function captures its argument  
 * 3. Final function produces the result  
 * 
 * ✅ Real-life examples:
 * - Configurable greeting generators  
 * - Reusable tax or discount calculators  
 * - Presetting API endpoints or query params  
 * - Partial application of repetitive logic  
 */

// 🧠 Basic Currying Example
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10

const triple = multiply(3);
console.log(triple(4)); // Output: 12

// ✅ Real-world Example 1: Custom Greeting Generator
function greeting(greetText) {
  return function (name) {
    console.log(`${greetText}, ${name}!`);
  };
}

const sayHello = greeting("Hello");
sayHello("Rohit");
// Output: Hello, Rohit!

const sayWelcome = greeting("Welcome");
sayWelcome("PureCravve");
// Output: Welcome, PureCravve!

// ✅ Real-world Example 2: Preset Tax Calculator
function taxCalculator(taxRate) {
  return function (amount) {
    return amount + (amount * taxRate);
  };
}

const gst18 = taxCalculator(0.18);
console.log(gst18(1000));
// Output: 1180

const gst5 = taxCalculator(0.05);
console.log(gst5(200));
// Output: 210

// ✅ Real-world Example 3: API URL Generator
function apiURL(baseURL) {
  return function (endpoint) {
    return `${baseURL}/${endpoint}`;
  };
}

const myAPI = apiURL("https://purecravve.com/api");
console.log(myAPI("orders"));
// Output: https://purecravve.com/api/orders

// ✅ Real-world Example 4: Emoji Logger with Currying
function emojiLogger(emoji) {
  return function (message) {
    console.log(`${emoji} ${message}`);
  };
}

const rocketLog = emojiLogger("🚀");
rocketLog("Launching new feature!");
// Output: 🚀 Launching new feature!
