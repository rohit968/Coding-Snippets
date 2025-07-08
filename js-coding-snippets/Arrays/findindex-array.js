// ======================================================
// 📌 Topic: Finding the Index of the First Match — `.findIndex()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.findIndex()` method returns the **index** of the first element in an array that satisfies a condition.
 * If no element matches, returns `-1`.
 * 
 * ✅ Why is it useful?
 * - Quickly finds the position of a specific item
 * - Useful for updating, deleting, or referencing elements
 * - Stops searching after the first match (efficient)
 * 
 * ✅ How to use it?
 * Syntax: `array.findIndex(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * Returns the index of the matching element or `-1`.
 * 
 * ✅ Real-life example:
 * - Getting position of a product to update/remove
 * - Finding user's index in a leaderboard
 * - Locating items dynamically in arrays
 */

// 🧠 Basic Example — Find Index of First Even Number
const numbers = [3, 7, 10, 15];
const evenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenIndex);
// Output: 2

// ✅ Find Index of Specific String
const fruits = ["Apple", "Banana", "Mango"];
const mangoIndex = fruits.findIndex(fruit => fruit === "Mango");
console.log(mangoIndex);
// Output: 2

// ✅ Finding Index of Object by Property
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const userIndex = users.findIndex(user => user.id === 2);
console.log(userIndex);
// Output: 1

// ✅ Finding Index of Object with Nested Properties
const products = [
  { id: 1, name: "Laptop", specs: { ram: "16GB" } },
  { id: 2, name: "Phone", specs: { ram: "8GB" } },
  { id: 3, name: "Tablet", specs: { ram: "4GB" } }
];
const tabletIndex = products.findIndex(product => product.specs.ram === "4GB");
console.log(tabletIndex);
// Output: 2

// ✅ Finding Index with Custom Condition
const todoList = ["Buy Groceries", "Clean Room", "Finish Homework"];
const homeworkIndex = todoList.findIndex(todo => todo.includes("Homework"));
console.log(homeworkIndex);
// Output: 2

// ✅ Finding Index with Case Sensitivity
const caseSensitiveFruits = ["apple", "Banana", "Mango"];
const bananaIndex = caseSensitiveFruits.findIndex(fruit => fruit === "Banana");
console.log(bananaIndex);
// Output: 1

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
const rocketIndex = emojis.findIndex(e => e === "🚀");
console.log(rocketIndex);
// Output: 1

// ✅ No Matches Found
const missingIndex = numbers.findIndex(num => num > 100);
console.log(missingIndex);
// Output: -1

// ✅ Finding Index with Arrow Function
const names = ["Alice", "Bob", "Charlie"];
const charlieIndex = names.findIndex(name => name.startsWith("C"));
console.log(charlieIndex);
// Output: 2

// =============================================== //

// ✅ Real-world Example: Find Product Index by Name
const new_products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];
const phoneIndex = new_products.findIndex(p => p.name === "Phone");
console.log(phoneIndex);
// Output: 1

// ✅ Real-world Example: Find User Index in a List
const new_users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const bobIndex = new_users.findIndex(user => user.name === "Bob");
console.log(bobIndex);
// Output: 1