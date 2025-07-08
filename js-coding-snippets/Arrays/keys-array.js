// ======================================================
// 📌 Topic: Getting Array Indexes — `.keys()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.keys()` method returns a new **Array Iterator** object that contains the keys (indexes) of the array.
 * 
 * ✅ Why is it useful?
 * - Iterate over indexes easily
 * - Useful for loops where you need indexes explicitly
 * - Works even on sparse arrays (arrays with empty slots)
 * 
 * ✅ How to use it?
 * Syntax: `array.keys()`
 * Returns an iterator — use `.next()` manually or a `for...of` loop
 * 
 * ✅ Real-life example:
 * - Looping over indexes for advanced control
 * - Skipping values based on index
 * - Working with sparse arrays reliably
 */

// 🧠 Basic Example — Get Indexes
const fruits = ["Apple", "Banana", "Mango"];
const keys = fruits.keys();
console.log(keys);
// Output: Array Iterator Object

// ✅ Using `.keys()` with `for...of`
for (let index of fruits.keys()) {
  console.log(index);
}
// Output:
// 0
// 1
// 2

// ✅ Sparse Array Example
const arr = [10, , 30];
for (let index of arr.keys()) {
  console.log(index);
}
// Output: 0, 1, 2 — Includes empty slot index

// ✅ Using `.keys()` with `forEach` (not directly supported, but can be used with spread operator)
const numbers = [1, 2, 3];
const indexes = [...numbers.keys()];
console.log(indexes);
// Output: [0, 1, 2]

// ✅ Using `.keys()` with `for...of` to access values
for (let i of numbers.keys()) {
  console.log(`Index ${i} has value: ${numbers[i]}`);
}
// Output:
// Index 0 has value: 1
// Index 1 has value: 2
// Index 2 has value: 3
// ✅ Using `.keys()` with Objects in Arrays
const users = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" }
];
for (let i of users.keys()) {
  console.log(`User at index ${i}: ${users[i].name}`);
}
// Output:
// User at index 0: Alice
// User at index 1: Bob
// User at index 2: Charlie

// ✅ Using `.keys()` with Functions in Arrays
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function")
];
for (let i of functionsArray.keys()) {
  console.log(`Function at index ${i}:`);
  functionsArray[i](); // Call the function
}
// Output:
// Function at index 0:
// First Function
// Function at index 1:
// Second Function

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];

for (let i of emojis.keys()) {
  console.log(`Emoji at index ${i}: ${emojis[i]}`);
}
// Output:
// Emoji at index 0: 😀
// Emoji at index 1: 🚀
// Emoji at index 2: ❤️

// ======================================================= //

// ✅ Real-world Example: Index-based Logging
const items = ["Cake", "Cookies", "Brownie"];
for (let i of items.keys()) {
  console.log(`Item ${i + 1}: ${items[i]}`);
}
// Output:
// Item 1: Cake
// Item 2: Cookies
// Item 3: Brownie

// ✅ Real-world Example: Skipping Even Indexes
const numbersArray = [10, 20, 30, 40, 50];
for (let i of numbersArray.keys()) {
  if (i % 2 === 0) continue; // Skip even indexes
  console.log(`Value at odd index ${i}: ${numbersArray[i]}`);
}
// Output:
// Value at odd index 1: 20
// Value at odd index 3: 40

// ✅ Real-world Example: Sparse Array Handling
const sparseArray = [1, , 3, , 5];
for (let i of sparseArray.keys()) {
  console.log(`Index ${i} has value: ${sparseArray[i] !== undefined ? sparseArray[i] : "empty"}`);
}
// Output:
// Index 0 has value: 1
// Index 1 has value: empty
// Index 2 has value: 3
// Index 3 has value: empty
// Index 4 has value: 5
