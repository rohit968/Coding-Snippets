// ======================================================
// 📌 Topic: Testing Array with Conditions — `.some()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.some()` method tests whether at least **one element** in the array passes a given condition.
 * Returns `true` if any match is found, otherwise `false`.
 * 
 * ✅ Why is it useful?
 * - Quickly checks partial matches
 * - Efficient — stops as soon as one match is found
 * - Ideal for validations, early exits, or feature checks
 * 
 * ✅ How to use it?
 * Syntax: `array.some(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * 
 * ✅ Real-life example:
 * - Checking if any item is out of stock
 * - Detecting invalid form fields
 * - Feature detection or permission checks
 */

// 🧠 Basic Example — Any Even Number?
const numbers = [1, 3, 5, 7, 8];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
// Output: true

// ✅ No Matching Elements
const allOdd = numbers.some(num => num > 100);
console.log(allOdd);
// Output: false

// ✅ Checking Strings in Array
const fruits = ["Apple", "Banana", "Mango"];
const hasMango = fruits.some(fruit => fruit === "Mango");
console.log(hasMango);
// Output: true

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
const hasRocket = emojis.some(e => e === "🚀");
console.log(hasRocket);
// Output: true

// =================================================== //

// ✅ Real-world Example: User Permissions
const new_users = [
  { name: "Alice", canEdit: false },
  { name: "Bob", canEdit: true },
  { name: "Charlie", canEdit: false }
];
const canEditAny = new_users.some(user => user.canEdit);
console.log(canEditAny);
// Output: true

// ✅ Real-world Example: Any Product Out of Stock
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true }
];
const outOfStock = products.some(p => !p.inStock);
console.log(outOfStock);
// Output: true

// ✅ Real-world Example: Age Validation
const ages = [16, 17, 19, 22];
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult);
// Output: true

// ✅ Real-world Example: User Exists
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const userExists = users.some(user => user.name === "Bob");
console.log(userExists);
// Output: true
