// ======================================================
// 📌 Topic: Working with Key–Value Pairs — `Object.entries()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `Object.entries()` returns an array of `[key, value]` pairs from an object.
 * Each entry is an array of two elements.
 * 
 * ✅ Why is it useful?
 * - Easy looping over both key & value
 * - Great for rendering tables, lists, or forms
 * - Makes object transformation super clean
 * 
 * ✅ Syntax:
 * Object.entries(object)
 */

// ✅ Basic Example — Loop Through Key–Value Pairs
const user = {
  name: "Rohit",
  role: "admin",
  age: 26
};
const entries = Object.entries(user);
console.log(entries);
// Output: [["name", "Rohit"], ["role", "admin"], ["age", 26]]

// ✅ Looping with Destructuring
for (const [key, value] of Object.entries(user)) {
  console.log(`${key.toUpperCase()} → ${value}`);
}

// ✅ Use Case: Convert Object to Query Params
const filters = { sort: "price", category: "baking", stock: "in" };
const queryString = Object.entries(filters)
  .map(([key, value]) => `${key}=${value}`)
  .join("&");
console.log(queryString);
// Output: "sort=price&category=baking&stock=in"

// ✅ Edge Case: Empty Object
console.log(Object.entries({})); // []

// ====================================================== //

// ✅ Real-life Example: Render Form Fields
const form = {
  username: "rohit",
  email: "rohit@purecravve.com",
  phone: ""
};
Object.entries(form).forEach(([field, value]) => {
  console.log(`Render input: ${field} (default: ${value})`);
});



// 🗣️ Layman Interview Explanation — Object.entries()
// "Imagine opening a spreadsheet of data — one column for the label (key) and one for the value. Object.entries() gives you the entire table to work with."

// 💬 In interviews, say: “I use Object.entries() when I want to loop through or transform both the key and value of an object.It’s great for dynamic rendering, data formatting, and converting objects into different formats like query strings.”