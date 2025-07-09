// ======================================================
// 📌 Topic: Clean Iteration — `for...of` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `for...of` is a modern loop that lets you iterate over the **values**  
 * of an iterable like an array, string, Set, Map, etc.
 *
 * ✅ Why is it useful?
 * - Cleaner and more readable than traditional `for` or `forEach`
 * - Works with all iterable objects
 * - Supports `break`, `continue`, and `return`
 * 
 * ✅ Syntax:
 * for (const item of iterable) {
 *    // use item
 * }
 */

// ✅ Basic Example — Array of Fruits
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(`🍎 Fruit: ${fruit}`);
}

// ✅ Using `break` and `continue`
for (const fruit of fruits) {
  if (fruit === "Banana") continue;
  if (fruit === "Mango") break;
  console.log(fruit); // Only "Apple"
}

// ✅ Iterating Over a Set
const uniqueFlavors = new Set(["Vanilla", "Chocolate", "Vanilla"]);
for (const flavor of uniqueFlavors) {
  console.log(`🍨 Flavor: ${flavor}`);
}

// ✅ Iterating Over a Map
const userMap = new Map([
  ["Rohit", "Admin"],
  ["Alice", "User"],
]);
for (const [name, role] of userMap) {
  console.log(`${name} ➡️ ${role}`);
}

// ====================================================== //


// ✅ Real-life Example: Send Emails
const emails = ["a@x.com", "b@y.com", "c@z.com"];
for (const email of emails) {
  console.log(`📨 Sending to: ${email}`);
}

// ✅ Real-life Example: Print Characters of a Name
const name = "Rohit";
for (const char of name) {
  console.log(char);
}

// 🗣️ Layman Interview Explanation — for...of
// "Imagine going through a gift box that has cards, one after another. You don’t care about their position — just what’s written on each. That’s how for...of works — one value at a time, nice and clean."

