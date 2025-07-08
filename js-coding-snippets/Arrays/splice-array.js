// ======================================================
// 📌 Topic: Inserting, Removing, or Replacing Elements — `.splice()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.splice()` method adds, removes, or replaces elements in an array by modifying the **original array**.
 * 
 * ✅ Why is it useful?
 * - Dynamically updating arrays in place
 * - Useful for adding, deleting, or editing lists
 * - Works for insertions, deletions, and replacements
 * 
 * ✅ How to use it?
 * Syntax: `array.splice(start, deleteCount, item1, item2, ...)`
 * - `start`: Index to start changes (0-based)
 * - `deleteCount`: Number of elements to remove
 * - `item1, item2, ...`: Elements to insert (optional)
 * Returns an array of removed elements.
 * 
 * ✅ Real-life example:
 * - Managing shopping carts, task lists
 * - Editing arrays based on user input
 * - Replacing specific items dynamically
 */

// 🧠 Basic Example — Removing Elements
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const removed = fruits.splice(1, 2);
console.log(fruits);
// Output: ["Apple", "Orange"]
console.log(removed);
// Output: ["Banana", "Mango"]

// ✅ Inserting Elements Without Removal
const colors = ["Red", "Blue"];
colors.splice(1, 0, "Green");
console.log(colors);
// Output: ["Red", "Green", "Blue"]

// ✅ Replacing Elements
const numbers = [1, 2, 3, 4];
numbers.splice(2, 1, 99);
console.log(numbers);
// Output: [1, 2, 99, 4]

// ✅ Removing Last Element Using `.splice()`
const tasks = ["Code", "Test", "Deploy"];
tasks.splice(-1, 1);
console.log(tasks);
// Output: ["Code", "Test"]

// ✅ Inserting at the Beginning
const cart = ["Cake", "Cookies"];
cart.splice(0, 0, "Brownie");
console.log(cart);
// Output: ["Brownie", "Cake", "Cookies"]

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
emojis.splice(1, 1, "🔥");
console.log(emojis);
// Output: ["😀", "🔥", "❤️"]

// ==================================================== //

// ✅ Real-world Example: Updating Product List
const products = ["Laptop", "Phone", "Tablet"];
products.splice(1, 1, "Smartwatch");
console.log(products);
// Output: ["Laptop", "Smartwatch", "Tablet"]

// ✅ Real-world Example: Removing User by Index
const users = ["Alice", "Bob", "Charlie"];
users.splice(1, 1);
console.log(users);
// Output: ["Alice", "Charlie"]

// ✅ Real-world Example: Inserting New Item in Task List
const todoList = ["Buy Groceries", "Clean Room"];
todoList.splice(1, 0, "Finish Homework");
console.log(todoList);
// Output: ["Buy Groceries", "Finish Homework", "Clean Room"]

// ✅ Real-world Example: Replacing Item in Shopping Cart
const shoppingCart = ["Bread", "Milk", "Eggs"];
shoppingCart.splice(1, 1, "Cheese");
console.log(shoppingCart);
// Output: ["Bread", "Cheese", "Eggs"]

