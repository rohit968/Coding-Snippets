// ======================================================
// 📌 Topic: Accumulating Values — `.reduce()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.reduce()` method reduces an array to a **single value**  
 * by applying a function to each item and accumulating the result.
 * 
 * ✅ Why is it useful?
 * - Great for **totals, grouping, counting, and transformations**
 * - Handles complex logic in a clean, functional way
 * - Highly powerful and versatile
 * 
 * ✅ Syntax:
 * array.reduce((accumulator, currentValue, index, array) => {
 *   return updatedAccumulator;
 * }, initialValue)
 */

// ✅ Basic Example — Sum of Numbers
const numbers = [10, 20, 30];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 60

// ====================================================== //

// ✅ Real-life Example: Calculate Cart Total
const cart = [
  { item: "Cake", price: 300 },
  { item: "Cookie", price: 100 },
  { item: "Brownie", price: 150 }
];

const cartTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(cartTotal); // 550

// ✅ Real-life Example: Count Frequency of Items
const fruits = ["apple", "banana", "apple", "mango", "banana"];

const countMap = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(countMap);
/*
{
  apple: 2,
  banana: 2,
  mango: 1
}
*/


// ✅ Real-life Example: Group Users by Role
const users = [
  { name: "Rohit", role: "admin" },
  { name: "Alice", role: "user" },
  { name: "Bob", role: "admin" }
];
const grouped = users.reduce((acc, user) => {
  const role = user.role;
  if (!acc[role]) acc[role] = [];
  acc[role].push(user.name);
  return acc;
}, {});
console.log(grouped);
/*
{
  admin: ["Rohit", "Bob"],
  user: ["Alice"]
}
*/

// ✅ Real-life Example: Flatten Nested Arrays
const nested = [[1, 2], [3, 4], [5]];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5]

// ✅ Real-life Example: Convert Array to Object
const settings = [
  ["theme", "dark"],
  ["layout", "grid"],
  ["sidebar", true]
];
const settingsObject = settings.reduce((obj, [key, value]) => {
  obj[key] = value;
  return obj;
}, {});
console.log(settingsObject);
/*
{
  theme: "dark",
  layout: "grid",
  sidebar: true
}
*/



// 🗣️ Layman Interview Explanation — .reduce()
// "Imagine adding up your daily earnings at the bakery. You start with ₹0 and keep adding each order to the total. That’s .reduce() — it accumulates."

// 💬 In interviews, say: “I use .reduce() to process arrays into final results — like totals, grouped objects, or merged data — all without mutating the original array.”
