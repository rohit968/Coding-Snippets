// ======================================================
// 📌 Topic: Testing All Elements with Conditions — `.every()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.every()` method checks if **all elements** in the array pass a given condition.
 * Returns `true` only if every element meets the test, otherwise `false`.
 * 
 * ✅ Why is it useful?
 * - Validates entire datasets
 * - Ideal for quality checks, form validations, or access rules
 * - Efficient — exits early on first failure
 * 
 * ✅ How to use it?
 * Syntax: `array.every(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * 
 * ✅ Real-life example:
 * - Check if all products are in stock
 * - Validate all form fields
 * - Ensure all permissions granted
 */

// 🧠 Basic Example — Are All Numbers Positive?
const numbers = [1, 2, 3, 4];
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);
// Output: true

// ✅ Mixed Conditions — Not All Pass
const mixedNumbers = [1, -2, 3];
const result = mixedNumbers.every(num => num > 0);
console.log(result);
// Output: false

// ✅ Checking Strings — All Have Length > 3?
const fruits = ["Apple", "Banana", "Mango"];
const validLength = fruits.every(fruit => fruit.length > 3);
console.log(validLength);
// Output: true

// ✅ Objects in Arrays — All Users Have Age > 18?
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const new_allAdults = users.every(user => user.age >= 18);
console.log(new_allAdults);
// Output: true

// ✅ Objects with Nested Properties — All Products Have RAM > 4GB?
const new_products = [
  { id: 1, name: "Laptop", specs: { ram: "16GB" } },
  { id: 2, name: "Phone", specs: { ram: "8GB" } },
  { id: 3, name: "Tablet", specs: { ram: "4GB" } }
];
const allHaveRam = new_products.every(product => parseInt(product.specs.ram) >= 4);
console.log(allHaveRam);
// Output: true

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
const allAreEmojis = emojis.every(e => typeof e === "string");
console.log(allAreEmojis);
// Output: true

// =================================================== //

// ✅ Real-world Example: All Products In Stock?
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: true }
];
const allAvailable = products.every(p => p.inStock);
console.log(allAvailable);
// Output: true

// ✅ Real-world Example: Validate User Inputs
const userInputs = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const allValid = userInputs.every(user => user.age >= 18 && user.name.length > 2);
console.log(allValid);
// Output: true

// ✅ Real-world Example: Age Restriction Check
const ages = [19, 22, 25];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults);
// Output: true
