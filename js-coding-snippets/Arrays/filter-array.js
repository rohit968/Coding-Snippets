// ======================================================
// 📌 Topic: Filtering Arrays — `.filter()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.filter()` method creates a new array with elements that pass a specific test (condition).
 * 
 * ✅ Why is it useful?
 * - Extracts only relevant data
 * - Great for searching, filtering lists, or applying rules
 * - Non-destructive — original array remains unchanged
 * 
 * ✅ How to use it?
 * Syntax: `array.filter(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * Returns a new filtered array.
 * 
 * ✅ Real-life example:
 * - Filtering products by price
 * - Showing users based on status
 * - Hiding or showing content dynamically
 */

// 🧠 Basic Example — Filter Numbers
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(num => num % 2 === 0);
console.log(even);
// Output: [2, 4, 6]

console.log(numbers);
// Original array unchanged: [1, 2, 3, 4, 5, 6]

// ✅ Filtering Strings by Length
const fruits = ["Apple", "Banana", "Kiwi", "Mango"];

const longFruits = fruits.filter(fruit => fruit.length > 4);
console.log(longFruits);
// Output: ["Apple", "Banana", "Mango"]

// ✅ Real-world Example: Filter Out-of-Stock Products
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true }
];
const available = products.filter(p => p.inStock);
console.log(available);
// Output: [{ name: "Laptop" }, { name: "Tablet" }]

// ✅ Filtering Objects by Property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const adults = users.filter(user => user.age >= 30);
console.log(adults);
// Output: [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// ✅ Filtering Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const filteredNested = nestedArray.filter(subArray => subArray[0] > 2);
console.log(filteredNested);
// Output: [[3, 4], [5, 6]]

// ✅ Filtering Functions in Arrays
const functionsArray = [
  () => console.log("Hello"),
  () => console.log("World"),
  () => console.log("JavaScript")
];
const filteredFunctions = functionsArray.filter(func => func.toString().includes("World"));
console.log(filteredFunctions);
// Output: [ƒ () { console.log("World"); }]

// ✅ Emoji/Unicode Filtering
const emojis = ["😀", "🚀", "❤️", "🔥"];
const heartEmojis = emojis.filter(e => e === "❤️");
console.log(heartEmojis);
// Output: ["❤️"]

// ======================================================= //

// ✅ Real-world Example: Filter Active Users
const activeUsers = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];
const filteredActive = activeUsers.filter(user => user.active);
console.log(filteredActive);
// Output: [{ name: "Alice", active: true }, { name: "Charlie", active: true }]

// ✅ Real-life Example: Filter Messages by Keyword
const messages = [
  { text: "Hello World", important: true },
  { text: "Just a message", important: false },
  { text: "Important update", important: true }
];
const importantMessages = messages.filter(msg => msg.important);
console.log(importantMessages);
// Output: [{ text: "Hello World", important: true }, { text: "Important update", important: true }]

// ✅ Real-life Example: Filter Tasks by Status
const tasks = [
  { title: "Task 1", completed: true },
  { title: "Task 2", completed: false },
  { title: "Task 3", completed: true }
];
const completedTasks = tasks.filter(task => task.completed);
console.log(completedTasks);
// Output: [{ title: "Task 1", completed: true }, { title: "Task 3", completed: true }]
