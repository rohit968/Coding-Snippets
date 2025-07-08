// ======================================================
// 📌 Topic: Transforming Arrays — `.map()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.map()` method creates a new array by applying a function to each element of the original array.
 * 
 * ✅ Why is it useful?
 * - Transforms data while keeping the original array unchanged
 * - Ideal for UI rendering, calculations, or data restructuring
 * 
 * ✅ How to use it?
 * Syntax: `array.map(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * Returns a new transformed array.
 * 
 * ✅ Real-life example:
 * - Generating HTML elements from data
 * - Converting prices, applying taxes
 * - Creating modified datasets
 */

// 🧠 Basic Example — Double Numbers
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8]
console.log(numbers);
// Original array remains unchanged: [1, 2, 3, 4]

// ✅ Mapping Strings to Uppercase
const fruits = ["apple", "banana", "mango"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
// Output: ["APPLE", "BANANA", "MANGO"]

// ✅ Generating HTML-like Strings
const users = ["Alice", "Bob", "Charlie"];
const userList = users.map(name => `<li>${name}</li>`);
console.log(userList);
// Output: ["<li>Alice</li>", "<li>Bob</li>", "<li>Charlie</li>"]

// ✅ Mapping Objects to Specific Properties
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];
const productNames = products.map(product => product.name);
console.log(productNames);
// Output: ["Laptop", "Phone", "Tablet"]

// ✅ Mapping to Create New Objects
const productDetails = products.map(product => ({
  name: product.name,
  priceWithTax: product.price * 1.2 // Adding 20% tax
}));
console.log(productDetails);
// Output:
// [
//   { name: "Laptop", priceWithTax: 1200 },
//   { name: "Phone", priceWithTax: 600 },
//   { name: "Tablet", priceWithTax: 360 }
// ]

// ✅ Mapping to Create a New Array of Functions
const functions = [1, 2, 3].map(num => () => console.log(num));
functions.forEach(fn => fn());
// Output:  
// 1
// 2
// 3

// ✅ Emoji/Unicode Transformation
const emojis = ["😀", "🚀", "❤️"];
const emojiCodes = emojis.map(emoji => emoji.codePointAt(0));
console.log(emojiCodes);
// Output: Unicode code points of emojis

// ========================================= //

// ✅ Real-world Example: Applying Discounts
const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9);
console.log(discounted);
// Output: [90, 180, 270]

// ✅ Real-world Example: Creating Objects from Array
const new_products = ["Laptop", "Phone"];
const productObjects = products.map((product, index) => ({
  id: index + 1,
  name: product
}));
console.log(productObjects);
// Output: [{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]

// ✅ Real-world Example: Formatting Dates
const dates = ["2023-01-01", "2023-02-01"];
const formattedDates = dates.map(date => new Date(date).toLocaleDateString());
console.log(formattedDates);
// Output: ["1/1/2023", "2/1/2023"]

// ✅ Real-world Example: Generating User Avatars
const new_users = ["Alice", "Bob"];
const avatars = users.map(user => ({
  name: user,
  avatarUrl: `https://example.com/avatars/${user.toLowerCase()}.png`
}));
console.log(avatars);
// Output:
// [
//   { name: "Alice", avatarUrl: "https://example.com/avatars/alice.png" },
//   { name: "Bob", avatarUrl: "https://example.com/avatars/bob.png" }
// ]