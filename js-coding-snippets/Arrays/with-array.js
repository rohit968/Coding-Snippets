// ======================================================
// 📌 Topic: Immutable Array Replacement — `.with()` in JavaScript (ES2023)
// ======================================================

/**
 * ✅ What is it?
 * `.with()` returns a **new array** with a specific element replaced, without modifying the original array.
 * 
 * ✅ Why is it useful?
 * - Allows safe, immutable updates
 * - Prevents accidental changes to original arrays
 * - Ideal for React, state management, and functional programming
 * 
 * ✅ How to use it?
 * Syntax: `array.with(index, newValue)`
 * - `index`: Position to replace
 * - `newValue`: Value to insert at that position
 * Returns a new array with the updated element
 * Throws `RangeError` if index is out of bounds
 * 
 * ✅ Real-life example:
 * - Update a specific product in a list
 * - Replace a form field value
 * - Safe updates in Redux or other state logic
 */

// 🧠 Basic Example — Replace an Element
const fruits = ["Apple", "Banana", "Mango"];
const updatedFruits = fruits.with(1, "Orange");
console.log(updatedFruits);
// Output: ["Apple", "Orange", "Mango"]
console.log(fruits);
// Original array unchanged: ["Apple", "Banana", "Mango"]


// ✅ Using Negative Index
const numbers = [10, 20, 30];
const replaced = numbers.with(-1, 99);
console.log(replaced);
// Output: [10, 20, 99]

// ✅ Out of Bounds — Throws Error
try {
  console.log(numbers.with(5, 50));
} catch (e) {
  console.error(e);
  // RangeError: Invalid index
}

// ✅ Using with Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const updatedUsers = users.with(1, { name: "David", age: 28 });
console.log(updatedUsers);
// Output: [
//   { name: "Alice", age: 25 },
//   { name: "David", age: 28 },
//   { name: "Charlie", age: 35 }
// ]

// ✅ Using with Strings
const letters = ["a", "b", "c"];
const updatedLetters = letters.with(0, "z");
console.log(updatedLetters);
// Output: ["z", "b", "c"]

// ✅ Using with Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const updatedNested = nestedArray.with(1, [7, 8]);
console.log(updatedNested);
// Output: [[1, 2], [7, 8], [5, 6]]

// ✅ Using with Functions in Arrays
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function"),
  () => console.log("Third Function")
];
const updatedFunctions = functionsArray.with(1, () => console.log("Updated Function"));
console.log(updatedFunctions);
// Output: [
//  ƒ, 
//  ƒ, 
//  ƒ ]
// Note: Functions are not executed, just replaced]

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
const updatedEmojis = emojis.with(1, "✨");
console.log(updatedEmojis);
// Output: ["😀", "✨", "❤️"]

// ====================================================== //

// ✅ Real-world Example: Update Product Name
const products = ["Cake", "Cookie", "Brownie"];
const newProducts = products.with(2, "Muffin");
console.log(newProducts);
// Output: ["Cake", "Cookie", "Muffin"]
console.log(products);
// Original array unchanged: ["Cake", "Cookie", "Brownie"]
