// ======================================================
// 📌 Topic: Convert Key-Value Pairs to Object — `Object.fromEntries()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.fromEntries()` takes an iterable (like an array of key–value pairs)  
 * and converts it into a plain object.
 * 
 * ✅ Why is it useful?
 * - Reverse of `Object.entries()`  
 * - Cleanly build objects from arrays or `Map`  
 * - Useful in transformations and conversions
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.fromEntries(iterable)
 * ```
 * Input: Array of arrays → `[ [key, value], [key, value] ]`  
 * Output: Plain object
 */

// ✅ Basic Example
const entries = [
  ["name", "Rohit"],
  ["age", 25],
  ["isMember", true]
];

const obj = Object.fromEntries(entries);
console.log(obj);
// Output: { name: "Rohit", age: 25, isMember: true }

// ====================================================== //

// ✅ Real-life Example: Convert FormData to Object
const formData = new FormData();
formData.append("email", "rohit@example.com");
formData.append("phone", "1234567890");

const dataObj = Object.fromEntries(formData);
console.log(dataObj);
// Output: { email: "rohit@example.com", phone: "1234567890" }

// ✅ Real-life Example: Convert Map to Object
const userMap = new Map();
userMap.set("name", "Alice");
userMap.set("city", "Delhi");

const userObj = Object.fromEntries(userMap);
console.log(userObj);
// Output: { name: "Alice", city: "Delhi" }

// ✅ Real-life Example: Clean Up Data with Filter + Map
const rawData = {
  cake: 499,
  cookies: 249,
  nullField: null
};
const cleaned = Object.fromEntries(
  Object.entries(rawData).filter(([_, value]) => value !== null)
);
console.log(cleaned);
// Output: { cake: 499, cookies: 249 }


// 🗣️ Layman Interview Explanation — Object.fromEntries()
// "Think of Object.entries() like opening a bakery order sheet into individual post-its — and Object.fromEntries() is you putting them back together into one organized sheet. It’s how you rebuild objects after working on their parts."

