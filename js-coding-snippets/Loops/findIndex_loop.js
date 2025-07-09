// ======================================================
// 📌 Topic: Finding Indexes — `.findIndex()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.findIndex()` method returns the **index** of the first element  
 * in the array that satisfies a condition.  
 * If no match is found, it returns `-1`.
 * 
 * ✅ Why is it useful?
 * - Know *where* a matching element is
 * - Update or remove elements by index
 * - Perform logic based on position
 * 
 * ✅ Syntax:
 * const index = array.findIndex((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Find Index of First Even Number
const numbers = [1, 3, 5, 8, 10];
const evenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenIndex); // 3 (because 8 is at index 3)

// ✅ Use Case: Update Element by Index
const todos = [
  { task: "Bake cookies", done: false },
  { task: "Make coffee", done: false }
];
const coffeeIndex = todos.findIndex(t => t.task === "Make coffee");
if (coffeeIndex !== -1) {
  todos[coffeeIndex].done = true;
}
console.log(todos);
/*
[
  { task: "Bake cookies", done: false },
  { task: "Make coffee", done: true }
]
*/

// ✅ Edge Case: No Match Found
const result = numbers.findIndex(num => num > 100);
console.log(result); // -1

// ====================================================== //


// ✅ Real-life Example: Find Index of Out-of-Stock Product
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 0 },
  { name: "Brownie", stock: 10 }
];
const outOfStockIndex = products.findIndex(p => p.stock === 0);
console.log(outOfStockIndex); // 1

// ✅ Real-life Example: Find Index of First Empty Form Field
const formFields = [
  { name: "email", value: "" },
  { name: "password", value: "secret" },
  { name: "confirmPassword", value: "" }
];
const emptyFieldIndex = formFields.findIndex(f => f.value === "");
console.log(emptyFieldIndex); // 0 (first empty)

// ✅ Real-life Example: Find User Index by ID
const users = [
  { id: 101, name: "Rohit" },
  { id: 102, name: "Alice" },
  { id: 103, name: "Bob" }
];
const index = users.findIndex(u => u.id === 102);
console.log(index); // 1

// 🗣️ Layman Interview Explanation — .findIndex()
// "Imagine you're looking for the first broken cookie in a tray. You don’t need the cookie itself — just want to know where it is. .findIndex() gives you the position of the match."

// 💬 In interviews, say: “I use .findIndex() when I need the location of a match — like to update, delete, or highlight an item based on its index.”