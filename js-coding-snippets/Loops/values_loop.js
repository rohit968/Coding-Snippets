// ======================================================
// 📌 Topic: Getting All Values — `Object.values()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `Object.values()` returns an array of all the values in a given object.
 * 
 * ✅ Why is it useful?
 * - Lets you quickly access just the values (no keys)
 * - Useful in calculations, validations, summaries
 * - Perfect for reducing or mapping over an object’s values
 * 
 * ✅ Syntax:
 * Object.values(object)
 */

// ✅ Basic Example — Extracting Values
const user = {
  name: "Rohit",
  age: 26,
  role: "admin"
};
const values = Object.values(user);
console.log(values);
// Output: ["Rohit", 26, "admin"]

// ✅ Use Case: Filtering Only Truthy Values
const config = {
  isEnabled: true,
  isVerified: false,
  isPremium: true
};
const truthyValues = Object.values(config).filter(Boolean);
console.log(truthyValues); // [true, true]

// ✅ Edge Case: Empty Object
const empty = {};
console.log(Object.values(empty)); // []

// ====================================================== //

// ✅ Real-life Example: Total Cart Price
const cart = {
  cake: 350,
  cookies: 200,
  brownies: 300
};
const prices = Object.values(cart);
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total:", total); // 850

// ✅ Real-life Example: All Empty Fields?
const form = {
  name: "",
  email: "",
  phone: ""
};
const allEmpty = Object.values(form).every(value => value === "");
console.log(allEmpty); // true



// 🗣️ Layman Interview Explanation — Object.values()
// "It’s like opening a cupboard and ignoring the labels — you just grab what’s inside each container. Object.values() gives you only the contents, not the tags."

// 💬 In interviews, say: “I use Object.values() when I care about the data, not the keys — like totaling prices, checking empty fields, or analyzing values in bulk.”