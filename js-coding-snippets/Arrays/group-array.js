// ======================================================
// 📌 Topic: Group Array Elements by Key — `.group()` in JavaScript (Proposal: Stage 3)
// ======================================================

/**
 * ✅ What is it?
 * `.group()` groups array elements based on a key returned by the provided callback function.
 * 
 * ✅ Why is it useful?
 * - Simplifies grouping tasks in data processing
 * - Avoids manual `for` loops and object building
 * - Ideal for categorizing lists, grouping by properties
 * 
 * ✅ How to use it?
 * Syntax: `array.group(callbackFn)`
 * - `callbackFn`: Function returning the key to group by
 * Returns an object where keys are group names, values are arrays of matching items
 * 
 * ✅ Real-life example:
 * - Grouping users by role
 * - Organizing products by category
 * - Grouping numbers by even/odd
 * 
 * ⚠️ `.group()` is part of a newer proposal (Stage 3) — check browser compatibility or use polyfills for production
 */

// 🧠 Basic Example — Group Numbers by Even/Odd
const numbers = [1, 2, 3, 4, 5, 6];
const groupedByParity = numbers.group(num => (num % 2 === 0 ? "even" : "odd"));
console.log(groupedByParity);
/*
{
  odd: [1, 3, 5],
  even: [2, 4, 6]
}
*/


// ✅ Group by String Length
const words = ["hi", "hello", "bye", "yes"];
const groupedByLength = words.group(w => w.length);
console.log(groupedByLength);
/*
{
  2: ["hi", "by"],
  3: ["yes"],
  5: ["hello"]
}
*/

// ✅ Group by First Letter
const names = ["Alice", "Bob", "Charlie", "David"];
const groupedByFirstLetter = names.group(name => name[0]);
console.log(groupedByFirstLetter);
/*
{
  A: ["Alice"],
  B: ["Bob"],
  C: ["Charlie"],
  D: ["David"]
}
*/

// ✅ Group by Length of String
const phrases = ["short", "medium length", "a bit longer", "tiny"];
const groupedByPhraseLength = phrases.group(phrase => phrase.length);
console.log(groupedByPhraseLength);
/*
{
  4: ["short", "tiny"],
  13: ["medium length"],
  12: ["a bit longer"]
}
*/

// ✅ Emoji/Unicode Example — Group by Type
const emojis = ["😀", "🚀", "❤️", "😂"];
const groupedEmojis = emojis.group(e => e === "❤️" ? "love" : "other");
console.log(groupedEmojis);
/*
{
  other: ["😀", "🚀", "😂"],
  love: ["❤️"]
}
*/

// ======================================================= //

// ✅ Real-world Example: Group Products by Type
const products = [
  { name: "Cake", type: "Dessert" },
  { name: "Cookie", type: "Dessert" },
  { name: "Sandwich", type: "Snack" },
];
const groupedProducts = products.group(p => p.type);
console.log(groupedProducts);
/*
{
  Dessert: [
    { name: "Cake", type: "Dessert" },
    { name: "Cookie", type: "Dessert" }
  ],
  Snack: [
    { name: "Sandwich", type: "Snack" }
  ]
}
*/

// ✅ Real-world Example: Group Users by Role
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];
const groupedUsers = users.group(u => u.role);
console.log(groupedUsers);
/*
{
  admin: [
    { name: "Alice", role: "admin" },
    { name: "Charlie", role: "admin" }
  ],
  user: [
    { name: "Bob", role: "user" }
  ]
}
*/
