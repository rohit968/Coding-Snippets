// ======================================================
// 📌 Topic: Shorthand Property Names in JavaScript (ES6)
// ======================================================

/**
 * ✅ What is it?
 * Shorthand property names allow you to create objects more cleanly
 * when the property name and variable name are the same.
 * 
 * ✅ Why is it useful?
 * - Cleaner syntax  
 * - Less code, more readable  
 * - Popular in React props, config objects, etc.  
 * 
 * ✅ How to use it?
 * Instead of writing:
 * ```js
 * const user = { name: name, age: age };
 * ```
 * You can write:
 * ```js
 * const user = { name, age };
 * ```
 */

// ✅ Basic Example
const name = "Rohit";
const age = 25;

const user = { name, age };
console.log(user); // { name: "Rohit", age: 25 }

// ✅ Works with Functions Too
function createUser(name, age) {
  return { name, age };
}
console.log(createUser("Alice", 30)); // { name: "Alice", age: 30 }

// ✅ Combining Shorthand with Custom Properties
const price = 299;
const product = {
  name: "Cookie",
  price,
  inStock: true,
  "baked-by": "PureCravve"
};
console.log(product);

// ====================================================== //

// ✅ Used in Real-World: React Props Example
function BakeryCard({ name, price, available }) {
  return { name, price, available }; // Shorthand in return
}

console.log(BakeryCard({ name: "Cake", price: 599, available: true }));

// ✅ Real-world: API Payload
const item = "Brownie";
const quantity = 2;
const payload = {
  item,
  quantity,
  status: "Pending"
};
console.log(payload); // { item: "Brownie", quantity: 2, status: "Pending" }



// 🗣️ Layman Interview Explanation — Shorthand Property Names
// "Imagine filling out a bakery order form where the field name is 'item' and you're holding a variable also called 'item'. Instead of writing both 'item: item', you just say 'item' once and JavaScript understands what you mean. That’s shorthand property naming — short, sweet, and smart."

