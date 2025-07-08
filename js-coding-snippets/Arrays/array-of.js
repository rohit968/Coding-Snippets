// ======================================================
// 📌 Topic: Creating Arrays with Arguments — `Array.of()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `Array.of()` creates a new array from given arguments, regardless of number or type.
 * 
 * ✅ Why is it useful?
 * - Creates arrays from values, avoiding `Array()` constructor confusion
 * - Works consistently even with a single number
 * 
 * ✅ How to use it?
 * Syntax: `Array.of(element1, element2, ...)`
 * Returns a new array with provided elements
 * 
 * ✅ Real-life example:
 * - Quick array creation for testing
 * - Ensures numbers aren't treated as array lengths
 */

// 🧠 Basic Example — Array from Values
const arr = Array.of(1, 2, 3);
console.log(arr);
// Output: [1, 2, 3]

// ✅ Array.of() vs Array() Confusion Example
const tricky1 = Array(3);
console.log(tricky1);
// Output: [ <3 empty items> ]
const safe1 = Array.of(3);
console.log(safe1);
// Output: [3]

// ✅ Multiple Data Types
const mixed = Array.of(42, "Hello", true, null);
console.log(mixed);
// Output: [42, "Hello", true, null]

// ✅ Nested Arrays
const nested = Array.of([1, 2], [3, 4]);
console.log(nested);
// Output: [[1, 2], [3, 4]]

// ✅ Objects in Arrays
const users = Array.of({ name: "Alice" }, { name: "Bob" });
console.log(users);
// Output: [{ name: "Alice" }, { name: "Bob" }]

// ✅ Emoji/Unicode Example
const emojis = Array.of("😀", "🚀", "❤️");
console.log(emojis);
// Output: ["😀", "🚀", "❤️"]

// ====================================================== //

// ✅ Real-world Example: Test Data Setup
const testUsers = Array.of("Alice", "Bob", "Charlie");
console.log(testUsers);
// Output: ["Alice", "Bob", "Charlie"]

// ✅ Real-world Example: Creating a Simple List
const shoppingList = Array.of("Apples", "Bananas", "Oranges");
console.log(shoppingList);
// Output: ["Apples", "Bananas", "Oranges"]