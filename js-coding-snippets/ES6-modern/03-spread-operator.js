// ======================================================
// 📌 Topic: Spread Operator in JavaScript (ES6+)
// es6-modern/03-spread-operator.js
// ======================================================

/**
 * ✅ What is it?
 * The spread operator (`...`) allows an iterable (like an array or string)
 * or object to be expanded into individual elements or properties.
 *
 * ✅ Why is it useful?
 * - Clone and merge arrays/objects immutably
 * - Pass array items as function arguments
 * - Simplify data transformations
 *
 * ✅ Syntax:
 * // Arrays: [...iterable]
 * // Objects: {...obj}
 */

// 🔹 Cloning Arrays
const originalArr = [1, 2, 3];
const clonedArr = [...originalArr];
console.log(clonedArr); // [1, 2, 3]

// 🔹 Merging Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

// 🔹 Function Arguments
function sum(a, b, c) {
  return a + b + c;
}
const nums = [10, 20, 30];
console.log(sum(...nums)); // 60

// 🔹 Cloning Objects
const originalObj = { name: 'Rohit', age: 26 };
const cloneObj = { ...originalObj };
console.log(cloneObj); // { name: 'Rohit', age: 26 }

// 🔹 Merging Objects (properties overwritten by later)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// 🔹 Real-life Example: Adding Defaults
const defaults = { theme: 'light', fontSize: 14 };
const userPrefs = { fontSize: 18 };
const settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: 'light', fontSize: 18 }

// 🔹 Real-life Example: Insert Item in Array
const items = ['Cake', 'Cookie'];
const newItems = ['Brownie', ...items, 'Muffin'];
console.log(newItems); // ['Brownie', 'Cake', 'Cookie', 'Muffin']

// 🗣️ Interview Tip:
// "The spread operator is great for immutable data updates—think of it like copying a photo,
// then editing the copy without touching the original." 