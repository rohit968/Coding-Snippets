// ======================================================
// 📌 Topic: Filling Arrays with Static Values — `.fill()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.fill()` method changes all or part of an array to a static value.
 * Modifies the original array and returns it.
 * 
 * ✅ Why is it useful?
 * - Initialize arrays with default values
 * - Quickly reset or prepare arrays
 * - Common in test cases, placeholders, game development
 * 
 * ✅ How to use it?
 * Syntax: `array.fill(value, start, end)`
 * - `value`: The static value to insert
 * - `start` (optional): Start index (default `0`)
 * - `end` (optional): End index (default is array length, not inclusive)
 * 
 * ✅ Real-life example:
 * - Create placeholder arrays
 * - Reset form inputs or game boards
 * - Quickly test algorithms with dummy data
 */

// 🧠 Basic Example — Fill Entire Array
const numbers = [1, 2, 3, 4];
numbers.fill(0);
console.log(numbers);
// Output: [0, 0, 0, 0]

// ✅ Fill Partial Array with Specific Value
const arr = [1, 2, 3, 4, 5, 6];
arr.fill(99, 2, 4);
console.log(arr);
// Output: [1, 2, 99, 99, 5, 6]

// ✅ Initialize Array with Placeholders
const placeholders = new Array(5).fill("Pending");
console.log(placeholders);
// Output: ["Pending", "Pending", "Pending", "Pending", "Pending"]

// ✅ Reset Specific Section of Array
const scores = [10, 20, 30, 40, 50];
scores.fill(0, 1, 4);
console.log(scores);
// Output: [10, 0, 0, 0, 50]

// ✅ Fill with Different Data Types
const mixedArray = new Array(4).fill({ key: "value" });
console.log(mixedArray);
// Output: [{ key: "value" }, { key: "value" }, { key: "value" }, { key: "value" }]

// ✅ Fill with Functions
const functionsArray = new Array(3).fill(() => console.log("Hello!"));
console.log(functionsArray);
// Output: [ƒ, ƒ, ƒ] (three functions that log "Hello!")

// ✅ Emoji/Unicode Example — Fill with Emojis
const emojiArray = new Array(3).fill("🚀");
console.log(emojiArray);
// Output: ["🚀", "🚀", "🚀"]

// ================================================ //

// ✅ Real-world Example: Game Board Initialization
const board = new Array(9).fill(null);
console.log(board);
// Output: [null, null, null, null, null, null, null, null, null]

// ✅ Real-world Example: Form Reset
const formInputs = new Array(5).fill("");
console.log(formInputs);
// Output: ["", "", "", "", ""]

// ✅ Real-world Example: Placeholder Data for Testing
const testData = new Array(10).fill({ name: "Test User", age: 0 });
console.log(testData);
// Output: [{ name: "Test User", age: 0 }, { name: "Test User", age: 0 }, ... (10 times)]