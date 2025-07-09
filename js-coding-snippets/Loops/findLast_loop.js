// ======================================================
// 📌 Topic: Find Last Match — `.findLast()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.findLast()` method returns the **last** element in an array  
 * that satisfies the given condition.  
 * If no match is found, it returns `undefined`.
 * 
 * ✅ Why is it useful?
 * - Cleaner way to find the *last match* (no need to reverse the array)
 * - Useful for logs, history, last-action checks
 * - Introduced in ES2023 (modern JavaScript feature)
 * 
 * ✅ Syntax:
 * const result = array.findLast((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Last Even Number
const numbers = [1, 3, 4, 6, 5, 2];
const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven); // 2

// ✅ Use Case: Last Occurrence of Keyword
const messages = [
  "hi",
  "can I order a cake?",
  "do you take bulk orders?",
  "thank you"
];

const lastQuestion = messages.findLast(msg => msg.includes("?"));
console.log(lastQuestion); // "do you take bulk orders?"

// ✅ Edge Case: No Match
const result = numbers.findLast(num => num > 100);
console.log(result); // undefined

// ✅ Works with Objects, Strings, Booleans, etc.
const values = [false, 0, "", null, "hello", undefined];
const lastTruthy = values.findLast(val => Boolean(val));
console.log(lastTruthy); // "hello"

// ====================================================== //


// ✅ Real-life Example: Last Product Out of Stock
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 0 },
  { name: "Muffin", stock: 0 }
];
const lastOutOfStock = products.findLast(p => p.stock === 0);
console.log(lastOutOfStock); // { name: "Muffin", stock: 0 }

// ✅ Real-life Example: Last User Login from India
const logins = [
  { user: "Rohit", country: "India" },
  { user: "Alice", country: "USA" },
  { user: "Bob", country: "India" }
];
const lastIndianLogin = logins.findLast(u => u.country === "India");
console.log(lastIndianLogin); // { user: "Bob", country: "India" }


// 🗣️ Layman Interview Explanation — .findLast()
// "It’s like .find(), but looking from the back of the line instead of the front. Imagine reviewing orders from the most recent and stopping when you find the one you want."

// 💬 In interviews, say: “I use .findLast() when I want the most recent matching item — like the last user from India, the last out-of-stock product, or the last submitted form with an error.”