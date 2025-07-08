// ======================================================
// 📌 Topic: Finding the First Matching Element — `.find()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.find()` method returns the **first element** in an array that satisfies a given condition.
 * If no element matches, it returns `undefined`.
 * 
 * ✅ Why is it useful?
 * - Quickly retrieves the first matching item
 * - Ideal for searching arrays of objects or values
 * - Stops as soon as a match is found (efficient)
 * 
 * ✅ How to use it?
 * Syntax: `array.find(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * Returns the first matching element or `undefined`.
 * 
 * ✅ Real-life example:
 * - Finding a user by name or ID
 * - Getting the first available product
 * - Searching lists based on dynamic conditions
 */

// 🧠 Basic Example — Find Number Greater Than 10
const numbers = [4, 9, 16, 25, 36];
const firstLarge = numbers.find(num => num > 15);
console.log(firstLarge);
// Output: 16

// ✅ Finding a String with Specific Criteria
const fruits = ["Apple", "Banana", "Mango", "Orange"];
const foundFruit = fruits.find(fruit => fruit.startsWith("M"));
console.log(foundFruit);
// Output: "Mango"

// ✅ Finding an Object by Property
const new_users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const n_user = new_users.find(u => u.id === 2);
console.log(n_user);
// Output: { id: 2, name: "Bob" }

// ✅ Finding an Object with Nested Properties
const new_products = [
  { id: 1, name: "Laptop", specs: { ram: "16GB" } },
  { id: 2, name: "Phone", specs: { ram: "8GB" } },
  { id: 3, name: "Tablet", specs: { ram: "4GB" } }
];
const tablet = new_products.find(p => p.specs.ram === "4GB");
console.log(tablet);
// Output: { id: 3, name: "Tablet", specs: { ram: "4GB" } }

// ✅ Finding with Index
const numbersWithIndex = [10, 20, 30, 40];
const firstGreaterThanTwenty = numbersWithIndex.find((num, index) => num > 20 && index < 3);
console.log(firstGreaterThanTwenty);
// Output: 30

// ✅ Finding with Multiple Conditions
const new_mixedNumbers = [5, 12, 18, 7, 22];
const firstEvenGreaterThanTen = new_mixedNumbers.find(num => num > 10 && num % 2 === 0);
console.log(firstEvenGreaterThanTen);
// Output: 12 

// ✅ Finding with Arrow Function
const names = ["Alice", "Bob", "Charlie"];
const firstWithB = names.find(name => name.startsWith("B"));
console.log(firstWithB);
// Output: "Bob"

// ✅ Finding with `thisArg` (optional)
const context = { prefix: "Hello, " };
const greetNames = ["Alice", "Bob", "Charlie"];
const greet = greetNames.find(function (name) {
  return name.startsWith("A");
}
  , context);
console.log(greet);
// Output: "Alice"

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
const rocket = emojis.find(e => e === "🚀");
console.log(rocket);
// Output: "🚀"

// ✅ Finding with No Matches
const result = numbers.find(num => num > 100);
console.log(result);
// Output: undefined

// ===================================== //

// ✅ Real-world Example: Find Product by Name
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];
const phone = products.find(p => p.name === "Phone");
console.log(phone);
// Output: { name: "Phone", price: 500 }

// ✅ Real-world Example: Find User by ID
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const user = users.find(u => u.id === 2);
console.log(user);
// Output: { id: 2, name: "Bob" }

// ✅ Real-world Example: Find First Available Item
const inventory = [
  { item: "Laptop", available: false },
  { item: "Phone", available: true },
  { item: "Tablet", available: false }
];
const availableItem = inventory.find(i => i.available);
console.log(availableItem);
// Output: { item: "Phone", available: true }

// ✅ Real-world Example: Find First Even Number
const mixedNumbers = [1, 3, 5, 8, 10];
const firstEven = mixedNumbers.find(num => num % 2 === 0);
console.log(firstEven);
// Output: 8
