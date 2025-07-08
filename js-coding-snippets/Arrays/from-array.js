// ======================================================
// 📌 Topic: Creating Arrays from Iterables — `Array.from()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `Array.from()` creates a new array from an iterable (like a string, Set, Map, NodeList, etc.) or array-like object.
 * 
 * ✅ Why is it useful?
 * - Converts iterable objects to arrays
 * - Easily manipulate strings, NodeLists, Sets, Maps, arguments
 * - Allows optional mapping during conversion
 * 
 * ✅ How to use it?
 * Syntax: `Array.from(iterable, mapFn?, thisArg?)`
 * - `iterable`: The object to convert
 * - `mapFn` (optional): Function to apply to each element
 * - `thisArg` (optional): `this` context for `mapFn`
 * 
 * ✅ Real-life example:
 * - Convert strings to character arrays
 * - Create arrays from DOM NodeLists
 * - Clone Sets or Maps into arrays
 */

// 🧠 Basic Example — String to Array
const str = "Hello";
const chars = Array.from(str);
console.log(chars);
// Output: ["H", "e", "l", "l", "o"]

// ✅ Using with Sets
const uniqueSet = new Set(["A", "B", "C"]);
const setArray = Array.from(uniqueSet);
console.log(setArray);
// Output: ["A", "B", "C"]

// ✅ Using with Maps
const map = new Map([["x", 1], ["y", 2]]);
const mapArray = Array.from(map);
console.log(mapArray);
// Output: [["x", 1], ["y", 2]]

// ✅ Using with Array-like Objects
function demo() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}
demo(1, 2, 3);
// Output: [1, 2, 3]


// ✅ Optional Mapping Function
const squares = Array.from([1, 2, 3], x => x * x);
console.log(squares);
// Output: [1, 4, 9]

// ✅ Emoji/Unicode Example
const emojiStr = "😀🚀❤️";
const emojiArray = Array.from(emojiStr);
console.log(emojiArray);
// Output: ["😀", "🚀", "❤️"]

// ====================================================== //

// ✅ Real-world Example: DOM NodeList to Array
const nodeList = document.querySelectorAll("div");
const divArray = Array.from(nodeList);
console.log(divArray);
// Output: Array of div elements

// ✅ Real-world Example: Cloning a Set
const originalSet = new Set([1, 2, 3]);
const clonedArray = Array.from(originalSet);
console.log(clonedArray);
// Output: [1, 2, 3]

// ✅ Real-world Example: Converting Arguments to Array
function sum() {
  const argsArray = Array.from(arguments);
  return argsArray.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));
// Output: 10

// ✅ Real-world Example: Creating a Range Array
function createRange(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
console.log(createRange(1, 5));
// Output: [1, 2, 3, 4, 5]
