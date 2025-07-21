// ======================================================
// 📌 Topic: Rest Operator in JavaScript (ES6+)
// es6-modern/04-rest-operator.js
// ======================================================

/**
 * ✅ What is it?
 * The rest operator (`...`) collects multiple remaining elements
 * into an array (for function parameters or destructuring).
 *
 * ✅ Why is it useful?
 * - Handle variable number of arguments
 * - Extract remaining array items or object properties
 * - Simplify function signatures and patterns
 *
 * ✅ Syntax:
 * function fn(a, b, ...rest) { }
 * const [first, ...rest] = array;
 * const { a, b, ...rest } = obj;
 */

// 🔹 Function Parameters
function logAll(first, second, ...others) {
  console.log(first, second);
  console.log(others);
}
logAll('Cake', 'Cookie', 'Brownie', 'Muffin');
// Output: "Cake", "Cookie" and ["Brownie", "Muffin"]

// 🔹 Array Destructuring
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const [apple, banana, ...restFruits] = fruits;
console.log(apple, banana); // Apple Banana
console.log(restFruits);    // ["Cherry", "Date"]

// 🔹 Object Destructuring
const config = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...restConfig } = config;
console.log(a, b);         // 1 2
console.log(restConfig);   // { c: 3, d: 4 }

// 🔹 Real-life Example: Sum Remaining Numbers
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 🔹 Real-life Example: Separating Config and Override
function applySettings(defaults, overrides) {
  const result = { ...defaults, ...overrides };
  const { temp, ...finalSettings } = result;
  console.log(finalSettings);
}
applySettings({ theme: 'dark', temp: 'remove' }, { temp: 'keep', mode: 'live' });
// Output: { theme: 'dark', mode: 'live' }

// 🗣️ Interview Tip:
// "Rest operator helps manage unlimited arguments and tidy destructuring, similar to gathering
// leftover ingredients into one bowl while cooking." 