// ======================================================
// 📌 Topic: Iterating Arrays — `forEach()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `forEach()` is a built-in array method that runs a function once  
 * for each item in the array (in order).
 *
 * ✅ Why is it useful?
 * - Cleaner than `for` loops
 * - Great for applying actions on each element
 * - Doesn’t return a new array (unlike `map`)
 * 
 * ✅ Syntax:
 * array.forEach((element, index, array) => {
 *     // do something with element
 * });
 */

// ✅ Basic Example — Print Each Item
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit}`);
});

// ✅ Accessing Index Too
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// ✅ Important: forEach doesn't support `break` or `continue`
fruits.forEach((fruit) => {
  if (fruit === "Banana") return; // Just skips this iteration
  console.log(fruit);
});
// ⚠️ To break early, use `for` or `for...of`

// ====================================================== //

// ✅ Real-life Example: Logging Cart Items
const cart = [
  { name: "Cake", qty: 1 },
  { name: "Cookie", qty: 3 },
  { name: "Brownie", qty: 2 }
];
cart.forEach((item) => {
  console.log(`🧁 ${item.name} - Quantity: ${item.qty}`);
});

// ✅ Real-life Example: Counting Total Quantity
let totalQty = 0;
cart.forEach((item) => {
  totalQty += item.qty;
});
console.log(`Total Items: ${totalQty}`);

// ✅ Real-life Example: Sending Emails
const emails = ["user1@example.com", "user2@example.com"];
emails.forEach((email) => {
  console.log(`📩 Sending email to ${email}...`);
});


// 🗣️ Layman Interview Explanation — forEach()
// "Imagine a waiter visiting every table in your bakery to ask customers how they liked their food. He goes to every table — one by one — but he doesn’t skip or stop early. That’s forEach()."

