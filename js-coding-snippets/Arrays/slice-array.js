// ======================================================
// 📌 Topic: Extracting Portions of an Array — `.slice()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.slice()` method returns a **shallow copy** of a portion of an array into a new array, based on specified start and end indices.
 * The original array remains unchanged.
 * 
 * ✅ Why is it useful?
 * - Extracting parts of an array without modifying the original
 * - Common in pagination, data filtering, sublists
 * - Supports negative indexing (counts from the end)
 * 
 * ✅ How to use it?
 * Syntax: `array.slice(start, end)`
 * - `start`: index to begin extraction (inclusive)
 * - `end`: index to stop extraction (exclusive)
 * If omitted, extracts from `start` to the end of the array.
 * 
 * ✅ Real-life example:
 * - Extracting a page of results
 * - Cloning an entire array
 * - Creating sublists for UI components
 */

// 🧠 Basic Example
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const sliced = fruits.slice(1, 3);
console.log(sliced);
// Output: ["Banana", "Mango"]
console.log(fruits);
// Original array remains unchanged: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// ✅ Slice from Start to End
const fromStart = fruits.slice(0, 2);
console.log(fromStart);
// Output: ["Apple", "Banana"]

// ✅ Slice to End of Array
const tillEnd = fruits.slice(2);
console.log(tillEnd);
// Output: ["Mango", "Orange", "Grapes"]

// ✅ Using Negative Indices
const lastTwo = fruits.slice(-2);
console.log(lastTwo);
// Output: ["Orange", "Grapes"]

// ✅ Cloning Entire Array
const cloned = fruits.slice();
console.log(cloned);
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// ✅ Extracting Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const slicedNested = nestedArray.slice(1);
console.log(slicedNested);
// Output: [[3, 4], [5, 6]]

// ✅ Extracting Objects in Arrays
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const slicedUsers = users.slice(0, 2);
console.log(slicedUsers);
// Output: [{ name: "Alice" }, { name: "Bob" }]

// ✅ Extracting Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!"),
  () => console.log("JavaScript!")
];
const slicedFunctions = functionsArray.slice(1);
console.log(slicedFunctions);
// Output: [ƒ, ƒ] (functions starting from index 1)


// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️", "🔥"];
const selectedEmojis = emojis.slice(1, 3);
console.log(selectedEmojis);
// Output: ["🚀", "❤️"]

// =================================================== //

// ✅ Real-life Example: Extract Last N Elements
const scores = [95, 85, 75, 65, 55];
const top3 = scores.slice(0, 3);
const bottom2 = scores.slice(-2);
console.log(top3);
// Output: [95, 85, 75]
console.log(bottom2);
// Output: [65, 55]

// ✅ Real-world Example: Pagination Simulation
const products = ["Laptop", "Phone", "Tablet", "Smartwatch", "Camera"];
const firstPage = products.slice(0, 2);
const secondPage = products.slice(2, 4);
console.log(firstPage);
// Output: ["Laptop", "Phone"]
console.log(secondPage);
// Output: ["Tablet", "Smartwatch"]
