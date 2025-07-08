// ======================================================
// 📌 Topic: Extracting Key–Value Pairs — `Object.entries()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.entries(obj)` returns an array of key–value pairs:  
 * Each pair is itself an array: `[key, value]`
 * 
 * ✅ Why is it useful?
 * - Lets you loop through both key & value together  
 * - Powerful for rendering tables, inputs, config lists  
 * - Used often in destructuring, transforms, etc.
 * 
 * ✅ How to use it?
 * Syntax: 
 * ```js
 * Object.entries(object)
 * ```
 * Returns: Array of arrays → `[ [key1, value1], [key2, value2] ]`
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  age: 25,
  isMember: true
};
const entries = Object.entries(user);
console.log(entries);
// Output: [ ["name", "Rohit"], ["age", 25], ["isMember", true] ]

// ✅ Looping Over Entries
entries.forEach(([key, value]) => {
  console.log(`${key} ➤ ${value}`);
});

// ✅ Empty Object Edge Case
console.log(Object.entries({})); // []

// ====================================================== //

// ✅ Real-life Example: Rendering Settings Table
const settings = {
  darkMode: true,
  notifications: false,
  autoPlay: true
};

Object.entries(settings).forEach(([setting, enabled]) => {
  console.log(`Setting: ${setting} — ${enabled ? "On" : "Off"}`);
});

// ✅ Real-life Example: Converting Object to Query Params
const params = {
  category: "cakes",
  sort: "price",
  page: 2
};
const queryString = Object.entries(params)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");
console.log(queryString);
// Output: "category=cakes&sort=price&page=2"


// 🗣️ Layman Interview Explanation — Object.entries()
// "If Object.keys() gives you just the names, and Object.values() gives you the stuff inside — then Object.entries() hands you a list of labeled boxes. It gives you both the label (key) and the content (value) — perfect when you need both at once."

