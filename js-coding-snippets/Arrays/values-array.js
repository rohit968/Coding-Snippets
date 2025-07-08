// ======================================================
// 📌 Topic: Getting Array Values with an Iterator — `.values()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.values()` method returns a new **Array Iterator** object that contains the values of the array.
 * 
 * ✅ Why is it useful?
 * - Provides a consistent iterator for array values
 * - Works even with sparse arrays (empty slots)
 * - Often used with `for...of` loops for clean value access
 * 
 * ✅ How to use it?
 * Syntax: `array.values()`
 * Returns an iterator — use `.next()` manually or a `for...of` loop
 * 
 * ✅ Real-life example:
 * - Iterating array values with advanced control
 * - Skipping values in complex loops
 * - Useful for custom data processing
 */

// 🧠 Basic Example — Get Values
const fruits = ["Apple", "Banana", "Mango"];
const values = fruits.values();
console.log(values);
// Output: Array Iterator Object

// ✅ Using `.values()` with `for...of`
for (let fruit of fruits.values()) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango

// ✅ Using `.values()` with `forEach` (not directly supported, but can be used with spread operator)
const numbers = [1, 2, 3];
const valuesArray = [...numbers.values()];
console.log(valuesArray);
// Output: [1, 2, 3]

// ✅ Sparse Array Example
const arr = [10, , 30];
for (let value of arr.values()) {
  console.log(value);
}
// Output:
// 10
// undefined (for empty slot)
// 30


// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
for (let emoji of emojis.values()) {
  console.log(`Emoji: ${emoji}`);
}
// Output:
// Emoji: 😀
// Emoji: 🚀
// Emoji: ❤️

// ===================================================== //

// ✅ Real-world Example: Product List Display
const products = ["Cake", "Cookies", "Brownie"];
for (let item of products.values()) {
  console.log(`Product: ${item}`);
}
// Output:
// Product: Cake
// Product: Cookies
// Product: Brownie

// ✅ Real-world Example: Usernames in a Chat Application
const usernames = ["Alice", "Bob", "Charlie"];
for (let user of usernames.values()) {
  console.log(`Username: ${user}`);
}
// Output:
// Username: Alice
// Username: Bob
// Username: Charlie

// ✅ Real-world Example: Displaying Task List
const tasks = ["Buy Groceries", "Clean Room", "Finish Homework"];
for (let task of tasks.values()) {
  console.log(`Task: ${task}`);
}
// Output:
// Task: Buy Groceries
// Task: Clean Room
// Task: Finish Homework
