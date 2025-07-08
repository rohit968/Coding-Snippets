// ======================================================
// 📌 Topic: Check If Object Has Property — `Object.hasOwn()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.hasOwn(obj, prop)` checks if the property exists **directly on the object**
 * (not inherited from the prototype chain).
 * 
 * 🧪 Object.hasOwn() — the safer alternative to .hasOwnProperty()
 * 
 * ✅ Why is it useful?
 * - Safer than using `.hasOwnProperty()`  
 * - Cleaner syntax  
 * - Prevents prototype issues  
 * - Supported in modern JavaScript (ES2022+)
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.hasOwn(object, property)
 * ```
 * Returns: true or false
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  age: 25
};
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "email")); // false


// ✅ Comparing with `in` and `.hasOwnProperty()`
const obj = Object.create({ inheritedProp: true });
obj.ownProp = "hello";

console.log("ownProp" in obj); // true (works)
console.log("inheritedProp" in obj); // true (also works — from prototype!)
console.log(Object.hasOwn(obj, "inheritedProp")); // ❌ false

// ====================================================== //

// ✅ Real-life Example: Check Form Input
const formData = {
  email: "rohit@example.com",
  phone: "1234567890"
};
if (Object.hasOwn(formData, "email")) {
  console.log("User has provided email");
}

// ✅ Real-life Example: Clean Up Object Fields Before Submission
const data = {
  name: "Cake",
  price: 399,
  category: "Dessert"
};
["name", "price", "discount"].forEach((key) => {
  if (Object.hasOwn(data, key)) {
    console.log(`Found field: ${key} ➤ ${data[key]}`);
  } else {
    console.log(`${key} not found`);
  }
});


// 🗣️ Layman Interview Explanation — Object.hasOwn()
// "Think of an object like your personal drawer. Object.hasOwn() checks if a specific item is actually inside your drawer, not something that just came from your roommate’s drawer. It’s accurate and doesn’t get confused by inherited stuff."

