// ======================================================
// 📌 Topic: Condition Check — `.some()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.some()` method checks whether **at least one** element  
 * in the array passes the given test. It returns a boolean (`true` or `false`).
 * 
 * ✅ Why is it useful?
 * - Quick validation across an array
 * - Stops early when match is found
 * - Great for access control, cart logic, form checks
 * 
 * ✅ Syntax:
 * const result = array.some((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Check for Even Numbers
const numbers = [1, 3, 7, 4, 9];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 4 is even)

// ✅ Use Case: Check if User is Admin
const users = [
  { name: "Rohit", role: "user" },
  { name: "Alice", role: "admin" }
];

const hasAdmin = users.some(u => u.role === "admin");
console.log(hasAdmin); // true

// ✅ Edge Case: Empty Array
console.log([].some(x => true)); // false

// ====================================================== //

// ======================================================
// 📌 Topic: Condition Check — `.some()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.some()` method checks whether **at least one** element  
 * in the array passes the given test. It returns a boolean (`true` or `false`).
 * 
 * ✅ Why is it useful?
 * - Quick validation across an array
 * - Stops early when match is found
 * - Great for access control, cart logic, form checks
 * 
 * ✅ Syntax:
 * const result = array.some((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Check for Even Numbers
const new_numbers = [1, 3, 7, 4, 9];

const new_hasEven = new_numbers.some(num => num % 2 === 0);
console.log(new_hasEven); // true (because 4 is even)

// ✅ Real-life Example: Check if Any Item is Out of Stock
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 0 },
  { name: "Brownie", stock: 10 }
];

const isAnyOutOfStock = products.some(p => p.stock === 0);
console.log(isAnyOutOfStock); // true

// ✅ Real-life Example: Has Empty Fields in Form?
const formFields = [
  { field: "email", value: "rohit@purecravve.com" },
  { field: "password", value: "" }
];

const hasEmpty = formFields.some(f => f.value.trim() === "");
console.log(hasEmpty); // true

// ✅ Real-life Example: Cart Has Items > ₹500
const cart = [
  { name: "Pastry", price: 120 },
  { name: "Cake", price: 600 }
];

const hasPremiumItem = cart.some(item => item.price > 500);
console.log(hasPremiumItem); // true

// ✅ Use Case: Check if User is Admin
const new_users = [
  { name: "Rohit", role: "user" },
  { name: "Alice", role: "admin" }
];

const new_hasAdmin = new_users.some(u => u.role === "admin");
console.log(new_hasAdmin); // true

// ✅ Edge Case: Empty Array
console.log([].some(x => true)); // false


// 🗣️ Layman Interview Explanation — .some()
// "Imagine checking if any cookie is burnt on a tray — you don’t care which one, just need to know if at least one is burnt. .some() stops as soon as it finds that one."

// 💬 In interviews, say: “I use .some() for quick validations — like checking if a user has admin role, if the form has any empty field, or if a cart contains premium items.”