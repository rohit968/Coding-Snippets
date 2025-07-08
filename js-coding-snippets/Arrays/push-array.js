// ======================================================
// 📌 Topic: Adding Elements to an Array — `.push()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.push()` method adds one or more elements to the **end** of an array and returns the new length.
 * 
 * ✅ Why is it useful?
 * - Dynamically expanding arrays
 * - Building lists, queues, or collections
 * - Frequently used in real-world apps for managing data
 * 
 * ✅ How to use it?
 * Syntax: `array.push(element1, element2, ..., elementN)`
 * Modifies the original array and returns the updated length.
 * 
 * ✅ Real-life example:
 * - Adding items to a cart
 * - Managing a to-do list
 * - Storing data dynamically from user input or API calls
 */

// 🧠 Basic Example
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Mango");
console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]
console.log(newLength);
// Output: 3 (new array length)

// ✅ Adding Multiple Items
fruits.push("Orange", "Grapes");
console.log(fruits);
// Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// ✅ Adding Different Data Types
const mixedArray = [1, "Hello", true];
mixedArray.push(42, null, { key: "value" });
console.log(mixedArray);
// Output: [1, "Hello", true, 42, null, { key: "value" }]

// ✅ Adding Nested Arrays
const nestedArray = [[1, 2], [3, 4]];
nestedArray.push([5, 6]);
console.log(nestedArray);
// Output: [[1, 2], [3, 4], [5, 6]]

// ✅ Adding Objects
const users = [{ name: "Alice" }, { name: "Bob" }];
users.push({ name: "Charlie" });
console.log(users);
// Output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

// ✅ Adding Functions
const functionsArray = [];
functionsArray.push(function () { console.log("Hello!"); });
functionsArray.push(() => console.log("World!"));
console.log(functionsArray);
// Output: [ƒ, ƒ] (two functions)

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀"];
emojis.push("❤️");
console.log(emojis);
// Output: ["😀", "🚀", "❤️"]

// ====================================================== //


// ✅ Real-world Example: Adding Items to Cart
const cart = [];
cart.push("Cake");
cart.push("Cookies");
console.log(cart);
// Output: ["Cake", "Cookies"]

// Real-life Example: Adding User Input
const userInput = [];
userInput.push("John Doe");
userInput.push(25);
userInput.push(true);
console.log(userInput);
// Output: ["John Doe", 25, true]

// Real-world Example: Building a To-Do List
const todoList = [];
todoList.push("Buy groceries");
todoList.push("Clean the house");
todoList.push("Finish project");
console.log(todoList);
// Output: ["Buy groceries", "Clean the house", "Finish project"]

// Real-life Example: Storing API Response Data
const apiData = [];
apiData.push({ id: 1, name: "Item 1" });
apiData.push({ id: 2, name: "Item 2" });
console.log(apiData);
// Output: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]
