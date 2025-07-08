// ======================================================
// 📌 Topic: Find Last Matching Index — `.findLastIndex()` in JavaScript (ES2023)
// ======================================================

/**
 * ✅ What is it?
 * `.findLastIndex()` returns the **index** of the last element in the array that satisfies the provided testing function.
 * 
 * ✅ Why is it useful?
 * - Searches arrays from end to start
 * - Provides the position, not the value
 * - Ideal for reverse index lookups
 * 
 * ✅ How to use it?
 * Syntax: `array.findLastIndex(callbackFn)`
 * - `callbackFn`: Function to test each element
 * Returns the last matching index or `-1` if none found
 * 
 * ✅ Real-life example:
 * - Find position of last matching record
 * - Locate index for safe updates or replacements
 * - Clean reverse-search logic without reversing the array
 */

// 🧠 Basic Example — Last Even Number Index
const numbers = [1, 3, 5, 8, 10, 7];

const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(lastEvenIndex);
// Output: 4

// ✅ No Match Found
const odds = [1, 3, 5];
const result = odds.findLastIndex(num => num % 2 === 0);
console.log(result);
// Output: -1

// ✅ Using Index for Safe Replacement
if (lastExpensiveIndex !== -1) {
  products[lastExpensiveIndex].price = 999;
}
console.log(products);
/* Updated products with last expensive item's price changed */

// ✅ Using with Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const lastUserIndex = users.findLastIndex(user => user.age === 25);
console.log(lastUserIndex);
// Output: 2

// ✅ Using with Strings
const words = ["apple", "banana", "cherry", "date"];
const lastWordWithAIndex = words.findLastIndex(word => word.includes("a"));
console.log(lastWordWithAIndex);
// Output: 1

// ✅ Using with Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const lastNestedIndex = nestedArray.findLastIndex(arr => arr.includes(4));
console.log(lastNestedIndex);
// Output: 1

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️", "🚀"];
const lastRocketIndex = emojis.findLastIndex(e => e === "🚀");
console.log(lastRocketIndex);
// Output: 3
// ====================================================== //

// ✅ Real-world Example: Last High Price Product Index
const products = [
  { name: "Cake", price: 200 },
  { name: "Cookie", price: 50 },
  { name: "Brownie", price: 300 },
  { name: "Muffin", price: 80 },
];
const lastExpensiveIndex = products.findLastIndex(p => p.price > 100);
console.log(lastExpensiveIndex);
// Output: 2

// ✅ Real-world Example: Last User with Specific Age Index
const usersList = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const lastUserWithAge25Index = usersList.findLastIndex(user => user.age === 25);
console.log(lastUserWithAge25Index);
// Output: 2