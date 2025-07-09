// ======================================================
// 📌 Topic: Getting All Keys — `.keys()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.keys()` method helps you retrieve all the **keys or indices**  
 * from an object or array.
 * 
 * ✅ Two main versions:
 * 1. Object.keys() — for objects
 * 2. Array.prototype.keys() — for arrays (returns iterator)
 * 
 * ✅ Why is it useful?
 * - Loop through properties or indices
 * - Analyze object structures
 * - Use in validation, UI rendering, debugging
 */

// ======================================================
// ✅ Object.keys() — For Plain Objects
// ======================================================

const user = {
  name: "Rohit",
  email: "rohit@purecravve.com",
  role: "admin"
};

const objectKeys = Object.keys(user);
console.log(objectKeys);
// Output: ["name", "email", "role"]

// ✅ Real-life Example: Validate All Fields Are Filled
const form = {
  username: "rohit",
  password: "123456",
  email: ""
};
const areAllFieldsFilled = Object.keys(form).every(
  key => form[key].trim() !== ""
);
console.log(areAllFieldsFilled); // false

// ✅ Use Case: Create Table Headers from Object Keys
const product = {
  name: "Cake",
  price: 350,
  inStock: true
};

const headers = Object.keys(product);
// ["name", "price", "inStock"] — use in table generation

// ======================================================
// ✅ Array.prototype.keys() — For Array Indices
// ======================================================

const colors = ["Red", "Green", "Blue"];

const colorKeysIterator = colors.keys();
console.log([...colorKeysIterator]); // [0, 1, 2]

// ✅ Real-life Example: Index-based Animation
for (const index of colors.keys()) {
  console.log(`Animate item at index ${index}`);
}

// ✅ Interview Tip:
// “.keys() on objects gives you property names.  
// .keys() on arrays gives you index values.”

// ====================================================== //


// ✅ Real-life Example: Dynamic Form Rendering
Object.keys(form).forEach(field => {
  console.log(`Render input for: ${field}`);
});

// 🗣️ Layman Interview Explanation — .keys()
// "Think of .keys() as a way to get labels on everything — like name tags on jars. Whether it's form fields, product attributes, or array indices, .keys() gives you the list."

// 💬 In interviews, say: “I use Object.keys() when I need to work with the property names of an object — for validation, rendering, or debugging. For arrays, .keys() helps when I need the index numbers — like animating list items or tracking positions.”