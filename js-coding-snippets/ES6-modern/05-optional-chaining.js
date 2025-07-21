// ======================================================
// 📌 Topic: Optional Chaining (`?.`) in JavaScript (ES2020+)
// es6-modern/05-optional-chaining.js
// ======================================================

/**
 * ✅ What is it?
 * Optional chaining (`?.`) allows safe access to deeply nested properties,
 * methods, or array elements, returning `undefined` instead of throwing
 * an error if the reference is nullish (`null` or `undefined`).
 *
 * ✅ Why is it useful?
 * - Prevents runtime errors (TypeError) when accessing missing properties
 * - Cleaner code without multiple existence checks
 * - Ideal for working with uncertain API or configuration data
 *
 * ✅ Syntax:
 * // Property access: obj?.prop
 * // Method call: obj?.method()
 * // Computed prop: obj?.[expr]
 * // Array element: arr?.[index]
 */

// 🔹 Basic Property Access
const user = { profile: { name: 'Rohit' } };
console.log(user?.profile?.name); // 'Rohit'
console.log(user?.preferences?.theme); // undefined (no error)

// 🔹 Safe Method Invocation
const api = {
  fetchData() { return 'data'; }
};
console.log(api.fetchData?.()); // 'data'
console.log(api.saveData?.());  // undefined (no crash)

// 🔹 Computed Property Access
const key = 'age';
const person = { age: 26 };
console.log(person?.[key]); // 26
console.log(person?.['name']); // undefined

// 🔹 Array Element Access
const arr = [10, 20, 30];
console.log(arr?.[1]); // 20
console.log(arr?.[5]); // undefined

// 🔹 Real-life Example: API Response
const response = {
  data: {
    user: null
  }
};
const username = response.data.user?.name || 'Guest';
console.log(username); // 'Guest'

// 🔹 Real-life Example: Configuration Chains
const config = { ui: { theme: { color: 'blue' } } };
const color = config.ui?.theme?.color ?? 'defaultColor';
console.log(color); // 'blue'

// 🗣️ Interview Tip:
// "Use optional chaining to simplify code that deals with deep or optional data,
// avoiding long chains of && checks and preventing TypeErrors."