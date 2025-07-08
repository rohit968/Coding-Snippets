// ======================================================
// 📌 Topic: Function Composition in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * **Function Composition** is the process of combining two or more functions to produce a new function where the output of one function becomes the input of the next.
 * 
 * ✅ Why is it useful?
 * - Breaks down complex logic into smaller, reusable functions  
 * - Makes code readable, modular, and maintainable  
 * - Popular in functional programming (React, Redux, utility libraries)  
 * 
 * ✅ How to use it?
 * 1. Write small, focused functions  
 * 2. Compose them together to form complex logic  
 * 3. Execution flows from right to left (classic composition style)  
 * 
 * ✅ Real-life examples:
 * - Chaining string transformations  
 * - Formatting or sanitizing user input  
 * - Data processing pipelines  
 * - Utility functions in large applications  
 */

// 🧠 Basic Function Composition Example
const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const shout = str => exclaim(toUpperCase(str));
console.log(shout("hello"));
// Output: HELLO!

// ✅ Composing with a Helper Function
const compose = (f, g) => x => f(g(x));
const greet = name => `Hi, ${name}`;
const excitedGreet = compose(exclaim, greet);
console.log(excitedGreet("Rohit"));
// Output: Hi, Rohit!

// ============================================================ //

// ✅ Real-world Example: Sanitizing User Input
const trim = str => str.trim();
const removeSpecialChars = str => str.replace(/[^\w\s]/gi, '');
const toLowerCase = str => str.toLowerCase();
const cleanInput = str => toLowerCase(removeSpecialChars(trim(str)));
console.log(cleanInput("   Hello@# World!!  "));
// Output: hello world

// ✅ Real-world Example: Currency Formatter Pipeline
const addCurrencySymbol = amount => `₹${amount}`;
const formatAmount = amount => amount.toFixed(2);
const formatPrice = amount => addCurrencySymbol(formatAmount(amount));
console.log(formatPrice(199.99));
// Output: ₹199.99

// ✅ Real-world Example: Emoji Pipeline for Branding
const addRocket = str => `🚀 ${str}`;
const addPureCravve = str => `${str} | PureCravve`;
const brandMessage = str => addPureCravve(addRocket(str));
console.log(brandMessage("Launching New Product"));
// Output: 🚀 Launching New Product | PureCravve

// ✅ Real-world Example: Array Data Pipeline
const double = n => n * 2;
const square = n => n * n;
const processArray = arr => arr.map(double).map(square);
console.log(processArray([1, 2, 3]));
// Output: [4, 16, 36]


// 🗣️ How to Explain Function Composition in a Layman, Interview-Friendly Style
// "Imagine you're building a burger — first you toast the bun, then you add the patty, then cheese, then sauce. Each step builds on the last. Function Composition works exactly like that — each small function does one job, and they stack together to create a complete solution."

