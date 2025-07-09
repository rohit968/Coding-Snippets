// ======================================================
// 📌 Topic: Advanced `.map()` Use Cases in JavaScript
// ======================================================

/**
 * ✅ Recap: What is `.map()`?
 * It transforms each element of an array and returns a **new array**  
 * — without changing the original.
 *
 * ✅ Why it's powerful:
 * - Non-destructive (pure function)
 * - Useful for formatting, transformation, UI rendering, and logic building
 */

// ✅ Real-world Example 1: Render Product Cards in a UI
const products = [
  { name: "Cake", price: 300 },
  { name: "Cookie", price: 100 }
];

const uiCards = products.map(p => `<div>${p.name} - ₹${p.price}</div>`);
console.log(uiCards);
// Output: ["<div>Cake - ₹300</div>", "<div>Cookie - ₹100</div>"]

// ✅ Real-world Example 2: Convert API Data
const apiData = [
  { first_name: "Rohit", last_name: "Tiwari" },
  { first_name: "Alice", last_name: "Smith" }
];

const users = apiData.map(u => ({
  fullName: `${u.first_name} ${u.last_name}`,
  initials: `${u.first_name[0]}${u.last_name[0]}`
}));
console.log(users);
/*
[
  { fullName: "Rohit Tiwari", initials: "RT" },
  { fullName: "Alice Smith", initials: "AS" }
]
*/

// ✅ Chaining `.map()` — Clean Pipelines
const desserts = ["cake", "pie", "pudding"];
const served = desserts
  .map(d => d.toUpperCase())
  .map(d => `🍰 ${d}`);
console.log(served);
// Output: ["🍰 CAKE", "🍰 PIE", "🍰 PUDDING"]

// ✅ Mapping over Numbers
const prices = [100, 200, 300];
const gstPrices = prices.map(p => p + p * 0.18);
console.log(gstPrices); // With 18% GST

// ✅ Index Usage in `.map()`
const tags = ["JS", "React", "Node"];
const numbered = tags.map((tag, index) => `${index + 1}. ${tag}`);
console.log(numbered);
// Output: ["1. JS", "2. React", "3. Node"]

// ✅ Edge Case: `.map()` on non-array or empty array
console.log([].map(x => x * 2)); // []
console.log(Array.prototype.map.call("Cake", c => c.toUpperCase()));
// Output: ["C", "A", "K", "E"]

// ====================================================== //

// ✅ Real-world Example 3: Prepare Order Summary
const orderItems = [
  { name: "Pastry", qty: 2, price: 50 },
  { name: "Brownie", qty: 3, price: 40 }
];
const orderSummary = orderItems.map(item => ({
  item: item.name,
  total: item.qty * item.price
}));
console.log(orderSummary);
/*
[
  { item: "Pastry", total: 100 },
  { item: "Brownie", total: 120 }
]
*/



// 🗣️ Layman Interview Explanation — Advanced .map()
// "Imagine you have a bakery menu and want to print a label for each item. You don't change the actual menu — you create a new label for each. That’s .map() — it walks through each item and makes a new version."

// 💬 In interviews, you can say:

// “I use .map() to transform data structures — like converting API responses, formatting UI, or calculating totals — all in a clean, non-mutating way.”