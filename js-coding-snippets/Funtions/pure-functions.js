// ======================================================
// 📌 Topic: Pure Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Pure Function** is a function that:
 * - Always produces the same output for the same input  
 * - Has no side effects (doesn't modify external state, DOM, variables outside itself)  
 * 
 * ✅ Why is it useful?
 * - Predictable, reliable code  
 * - Easy to test and debug  
 * - Foundation of functional programming  
 * - Encourages immutability and safe operations  
 * 
 * ✅ How to use it?
 * 1. Ensure function depends only on its parameters  
 * 2. Avoid modifying global state, inputs, or external resources inside the function  
 * 
 * ✅ Real-life examples:
 * - Mathematical calculations  
 * - Data transformations  
 * - String formatting  
 * - Clean array or object operations  
 */

// 🧠 Basic Pure Function Example
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
// Output: 5 (Always predictable)

// ✅ Impure Example for Comparison
let count = 0;
function incrementImpure() {
  count++;
  return count;
}
// This modifies external state — NOT pure

// ✅ Non-Pure Pitfall Example: Direct DOM Modification
function updateHeading() {
  document.querySelector("h1").textContent = "Changed!";
}
// Modifies external DOM — NOT pure

// ===================================================================== //

// ✅ Real-world Example: Price Calculator (Pure)
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log(calculateTotal(100, 0.18));
// Output: 118

// ✅ Real-world Example: Name Formatter (Pure)
function formatName(first, last) {
  return `${first.trim()} ${last.trim()}`;
}
console.log(formatName(" Rohit ", " Tiwari "));
// Output: "Rohit Tiwari"

// ✅ Real-world Example: Array Doubler (Pure)
function doubleArray(arr) {
  return arr.map(n => n * 2);
}
console.log(doubleArray([1, 2, 3]));
// Output: [2, 4, 6]

// ✅ Real-world Example: Emoji Appender (Pure)
function addEmoji(str, emoji) {
  return `${str} ${emoji}`;
}
console.log(addEmoji("PureCravve", "🚀"));
// Output: "PureCravve 🚀"



// 🗣️ Layman Interview Explanation — Pure Functions
//"A pure function is like a vending machine. You press button A, you always get the same chips — no matter how many times you press it. It doesn’t mess with the rest of the world, doesn’t change your wallet, your mood, or your friends — just gives you predictable output every time."