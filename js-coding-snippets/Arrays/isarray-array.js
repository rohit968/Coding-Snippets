// ======================================================
// 📌 Topic: Checking for Arrays — `Array.isArray()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `Array.isArray()` checks if a given value is an array.
 * 
 * ✅ Why is it useful?
 * - Accurately detects arrays
 * - More reliable than `typeof` (which returns "object" for arrays)
 * - Common in data validation, API responses, type checking
 * 
 * ✅ How to use it?
 * Syntax: `Array.isArray(value)`
 * Returns `true` if value is an array, otherwise `false`
 * 
 * ✅ Real-life example:
 * - Validating function arguments
 * - Ensuring safe array operations
 * - Type checks in utility functions
 */

// 🧠 Basic Example — Check Arrays
console.log(Array.isArray([1, 2, 3]));
// Output: true
console.log(Array.isArray("Hello"));
// Output: false

// ✅ More Type Checks
console.log(Array.isArray({ key: "value" }));
// Output: false
console.log(Array.isArray(null));
// Output: false
console.log(Array.isArray(undefined));
// Output: false


// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
console.log(Array.isArray(emojis));
// Output: true

// =========================================== //

// ✅ Real-world Example: API Data Validation
function processData(data) {
  if (Array.isArray(data)) {
    console.log("Processing array:", data);
  } else {
    console.log("Error: Expected an array.");
  }
}
processData(["Apple", "Banana"]);
// Processing array: ["Apple", "Banana"]
processData("Not an array");
// Error: Expected an array.

