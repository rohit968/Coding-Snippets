// ======================================================
// 📌 Topic: Extracting Object Values — `Object.values()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.values(obj)` returns an array of the object’s **own enumerable property values**.
 * 
 * ✅ Why is it useful?
 * - Lets you access just the values of an object  
 * - Useful for total calculations, UI display, filtering  
 * - Helps avoid manual access to each key  
 * 
 * ✅ How to use it?
 * Syntax: 
 * ```js
 * Object.values(object)
 * ```
 * Returns: An array of values
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  age: 25,
  isMember: true
};

const values = Object.values(user);
console.log(values); // ["Rohit", 25, true]

// ✅ Looping Over Values
Object.values(user).forEach((value) => {
  console.log(value);
});

// ✅ Empty Object Edge Case
console.log(Object.values({})); // []

// ✅ Non-Object Input (Throws Error)
try {
  console.log(Object.values(null));
} catch (err) {
  console.log("Cannot get values of null!");
}

// ====================================================== //

// ✅ Real-life Example: Calculate Total Cart Value
const cart = {
  cake: 499,
  brownie: 199,
  cookie: 99
};

const total = Object.values(cart).reduce((sum, price) => sum + price, 0);
console.log(`Total: ₹${total}`); // Total: ₹797

// ✅ Real-life Example: Display UI Cards from Object Values
const bakery = {
  item1: { name: "Cake", price: 499 },
  item2: { name: "Brownie", price: 199 },
  item3: { name: "Cookie", price: 99 }
};

Object.values(bakery).forEach((product) => {
  console.log(`🧁 ${product.name} - ₹${product.price}`);
});



// 🗣️ Layman Interview Explanation — Object.values()
// "If Object.keys() gives you all the labels, Object.values() gives you the actual items inside. Like scanning the prices from a bakery bill — you only care about the values when calculating totals or showing details."

