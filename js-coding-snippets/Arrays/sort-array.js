// ======================================================
// 📌 Topic: Sorting Arrays — `.sort()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.sort()` method sorts the elements of an array **in place** and returns the sorted array.
 * By default, elements are sorted as **strings**, in ascending Unicode order.
 * 
 * ✅ Why is it useful?
 * - Sorting numbers, strings, or mixed content
 * - Organizing lists alphabetically or numerically
 * - Essential in real-world apps for sorting data
 * 
 * ✅ How to use it?
 * Syntax: `array.sort([compareFunction])`
 * - Default behavior converts elements to strings
 * - Use `compareFunction` for custom numeric or advanced sorting
 * 
 * ✅ Real-life example:
 * - Sorting names, scores, prices
 * - Organizing search results
 * - Building leaderboards or ranking systems
 */

// 🧠 Basic Example — String Sorting
const fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]

// ✅ Sorting Numbers — BE CAREFUL!
const numbers = [10, 5, 20, 2];
numbers.sort();
console.log(numbers);
// Output: [10, 2, 20, 5] — Incorrect (sorted as strings)

// ✅ Correct Numeric Sorting
numbers.sort((a, b) => a - b);
console.log(numbers);
// Output: [2, 5, 10, 20]

// ✅ Descending Order
numbers.sort((a, b) => b - a);
console.log(numbers);
// Output: [20, 10, 5, 2]

// ✅ Sorting Mixed Content
const mixedArray = [10, "Banana", 5, "Apple"];
mixedArray.sort();
console.log(mixedArray);
// Output: [10, 5, "Apple", "Banana"] — Mixed types sorted as strings

// ✅ Sorting Objects by Property
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// ✅ Sorting Nested Arrays
const nestedArray = [[3, 4], [1, 2], [5, 6]];
nestedArray.sort((a, b) => a[0] - b[0]);
console.log(nestedArray);
// Output: [[1, 2], [3, 4], [5, 6]]

// ✅ Sorting Functions in Arrays
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function")
];
functionsArray.sort((a, b) => a.toString().localeCompare(b.toString()));
console.log(functionsArray);
// Output: [ƒ, ƒ] (functions sorted by string representation)

// ✅ Emoji/Unicode Consideration
const emojis = ["🚀", "😀", "❤️"];
emojis.sort();
console.log(emojis);
// Output order depends on Unicode values

// ======================================================= //

// ✅ Real-world Example: Sorting Prices
const prices = [199.99, 49.99, 9.99, 499.99];
prices.sort((a, b) => a - b);
console.log(prices);
// Output: [9.99, 49.99, 199.99, 499.99]

// ✅ Real-life Example: Sorting Names
const names = ["John", "Alice", "Bob"];
names.sort();
console.log(names);
// Output: ["Alice", "Bob", "John"]

// ✅ Real-world Example: Sorting Dates
const dates = [
  new Date("2023-10-01"),
  new Date("2022-05-15"),
  new Date("2024-01-20")
];
dates.sort((a, b) => a - b);
console.log(dates);
// Output: [2022-05-15T00:00:00.000Z, 2023-10-01T00:00:00.000Z, 2024-01-20T00:00:00.000Z]

// ✅ Real-life Example: Sorting User Scores
const scores = [1500, 3000, 2000];
scores.sort((a, b) => a - b);
console.log(scores);
// Output: [1500, 2000, 3000]