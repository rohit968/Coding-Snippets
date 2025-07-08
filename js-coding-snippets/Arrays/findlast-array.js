// ======================================================
// 📌 Topic: Find Last Matching Element — `.findLast()` in JavaScript (ES2023)
// ======================================================

/**
 * ✅ What is it?
 * `.findLast()` returns the **last element** in the array that satisfies the provided testing function.
 * 
 * ✅ Why is it useful?
 * - Searches arrays from the end to the start
 * - Cleaner than reversing arrays manually
 * - Ideal for last-match scenarios in data filtering
 * 
 * ✅ How to use it?
 * Syntax: `array.findLast(callbackFn)`
 * - `callbackFn`: Function to test each element
 * Returns the last matching element or `undefined` if none found
 * 
 * ✅ Real-life example:
 * - Get latest matching record from a list
 * - Find the last product meeting criteria
 * - Cleaner reverse-search logic
 */

// 🧠 Basic Example — Find Last Even Number
const numbers = [1, 3, 5, 8, 10, 7];

const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven);
// Output: 10

// ✅ No Match Found
const odds = [1, 3, 5];
const result = odds.findLast(num => num % 2 === 0);
console.log(result);
// Output: undefined

// ✅ Using with Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const lastUser = users.findLast(user => user.age === 25);
console.log(lastUser);
// Output: { name: "Charlie", age: 25 }

// ✅ Using with Strings
const words = ["apple", "banana", "cherry", "date"];
const lastWordWithA = words.findLast(word => word.includes("a"));
console.log(lastWordWithA);
// Output: "banana"

// ✅ Using with Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const lastNested = nestedArray.findLast(arr => arr.includes(4));
console.log(lastNested);
// Output: [3, 4]


// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️", "🚀"];
const lastRocket = emojis.findLast(e => e === "🚀");
console.log(lastRocket);
// Output: "🚀"

// ====================================================== //

// ✅ Real-world Example: Last High Price Product
const products = [
  { name: "Cake", price: 200 },
  { name: "Cookie", price: 50 },
  { name: "Brownie", price: 300 },
  { name: "Muffin", price: 80 },
];
const lastExpensive = products.findLast(p => p.price > 100);
console.log(lastExpensive);
// Output: { name: "Brownie", price: 300 }

// ✅ Real-world Example: Last User with Specific Age
const usersList = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const lastUserWithAge25 = usersList.findLast(user => user.age === 25);
console.log(lastUserWithAge25);
// Output: { name: "Charlie", age: 25 }

