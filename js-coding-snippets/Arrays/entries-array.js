// ======================================================
// 📌 Topic: Getting [Index, Value] Pairs — `.entries()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.entries()` method returns a new **Array Iterator** object containing `[index, value]` pairs for each element.
 * 
 * ✅ Why is it useful?
 * - Easily access both index and value in loops
 * - Cleaner alternative to `.forEach()` when you need index
 * - Works well with `for...of` loops
 * 
 * ✅ How to use it?
 * Syntax: `array.entries()`
 * Returns an iterator — used with `.next()` or `for...of`
 * 
 * ✅ Real-life example:
 * - Index-value debugging
 * - Rendering lists with positions (menus, rankings)
 * - Data transformations based on position
 */

// 🧠 Basic Example — Get [Index, Value] Pairs
const fruits = ["Apple", "Banana", "Mango"];
const entries = fruits.entries();
console.log(entries);
// Output: Array Iterator Object

// ✅ Using `.entries()` with `for...of`
for (let [index, value] of fruits.entries()) {
  console.log(`Index ${index}: ${value}`);
}
// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Mango

// ✅ Using `.entries()` with `forEach` (not directly supported, but can be used with spread operator)
const numbers = [1, 2, 3];
const entriesArray = [...numbers.entries()];
console.log(entriesArray);
// Output: [[0, 1], [1, 2], [2, 3]]


// ✅ Sparse Array Example
const arr = [10, , 30];
for (let [i, v] of arr.entries()) {
  console.log(`Index ${i}: ${v}`);
}
// Output:
// Index 0: 10
// Index 1: undefined (empty slot)
// Index 2: 30

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
for (let [i, emoji] of emojis.entries()) {
  console.log(`Emoji ${i}: ${emoji}`);
}
// Output:
// Emoji 0: 😀
// Emoji 1: 🚀
// Emoji 2: ❤️

// ====================================================== //

// ✅ Real-world Example: Ranked Product List
const products = ["Cake", "Cookies", "Brownie"];
for (let [position, product] of products.entries()) {
  console.log(`#${position + 1}: ${product}`);
}
// Output:
// #1: Cake
// #2: Cookies
// #3: Brownie

// ✅ Real-world Example: Emoji Gallery
const new_emojis = ["😀", "🚀", "❤️"];
for (let [index, emoji] of new_emojis.entries()) {
  console.log(`Emoji ${index + 1}: ${emoji}`);
}
// Output:
// Emoji 1: 😀
// Emoji 2: 🚀
// Emoji 3: ❤️

// ✅ Real-world Example: User List with Index
const users = ["Alice", "Bob", "Charlie"];
for (let [index, user] of users.entries()) {
  console.log(`User ${index + 1}: ${user}`);
}
// Output:
// User 1: Alice
// User 2: Bob
// User 3: Charlie
