// ======================================================
// 📌 Topic: Object Destructuring (ES6+)
// es6-modern/01-object-destructuring.js
// ======================================================

/**
 * ✅ What is it?
 * Object destructuring allows you to unpack values from objects
 * into separate variables in a concise syntax.
 *
 * ✅ Why is it useful?
 * - Cleaner code, less repetition
 * - Ideal for extracting multiple properties
 * - Great in function parameters, configs, and APIs
 *
 * ✅ Syntax:
 * const { prop1, prop2 } = object;
 */

// 🔹 Basic Destructuring
const user = { name: 'Rohit', age: 26, role: 'admin' };
const { name, age } = user;
console.log(name, age); // Rohit 26

// 🔹 Renaming Variables
const { role: userRole } = user;
console.log(userRole);   // admin

// 🔹 Default Values
const { city = 'Gwalior', name: userName } = user;
console.log(city, userName); // Gwalior Rohit

// 🔹 Nested Destructuring
const settings = {
  theme: 'dark',
  layout: { header: 'fixed', footer: 'static' }
};
const {
  layout: { header, footer }
} = settings;
console.log(header, footer); // fixed static

// 🔹 Parameter Destructuring
function greet({ name, role }) {
  console.log(`Hello ${name}, your role is ${role}`);
}
greet(user); // Hello Rohit, your role is admin

// ✅ Real-life Example: API Response Handling
const apiData = {
  id: 101,
  user: { name: 'Alice', email: 'alice@example.com' },
  meta: { lastLogin: '2025-07-21' }
};
const {
  user: { email },
  meta: { lastLogin }
} = apiData;
console.log(email, lastLogin); // alice@example.com 2025-07-21

// 🗣️ Interview Tip:
// "Destructuring lets you pick only the data you need—think of unpacking a parcel by grabbing only the items you want." 
