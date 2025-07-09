// ======================================================
// 📌 Topic: Filtering Arrays — `.filter()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.filter()` method returns a **new array** containing  
 * only elements that pass a certain condition (callback returns true).
 * 
 * ✅ Why is it useful?
 * - Extract specific items from an array
 * - Build dynamic lists (e.g., available stock, verified users)
 * - Non-destructive (original array remains unchanged)
 * 
 * ✅ Syntax:
 * const result = array.filter((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Filter Even Numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// ✅ Filter Using Index
const everyOther = numbers.filter((_, index) => index % 2 === 0);
console.log(everyOther); // [1, 3, 5]

// ====================================================== //

// ✅ Real-life Example: Filter In-Stock Products
const products = [
  { name: "Cake", inStock: true },
  { name: "Cookie", inStock: false },
  { name: "Brownie", inStock: true }
];
const availableProducts = products.filter(p => p.inStock);
console.log(availableProducts);
/*
[
  { name: "Cake", inStock: true },
  { name: "Brownie", inStock: true }
]
*/

// ✅ Real-life Example: Filter Verified Users
const users = [
  { name: "Rohit", verified: true },
  { name: "Guest", verified: false }
];
const verified = users.filter(u => u.verified);
console.log(verified); // Only verified users

// ✅ Real-life Example: Search Products by Keyword
const searchKeyword = "ca";
const searchResults = products.filter(p =>
  p.name.toLowerCase().includes(searchKeyword.toLowerCase())
);
console.log(searchResults); // [{ name: "Cake", inStock: true }]

// ✅ Real-life Example: Remove Empty Strings
const inputs = ["Cake", "", "Muffin", "", "Pie"];
const cleaned = inputs.filter(input => input.trim() !== "");
console.log(cleaned); // ["Cake", "Muffin", "Pie"]



// 🗣️ Layman Interview Explanation — .filter()
// "Imagine you’re sorting cookies — you only want chocolate ones. So you check each one and keep only what matches. That’s what .filter() does — it picks the items that meet your condition."

// 💬 In interviews, say:

// “I use .filter() when I want to select items that match a rule — like filtering in-stock products, active users, or form fields with input.”








