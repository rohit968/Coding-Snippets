// ======================================================
// 📌 Topic: Accessing Object Properties in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * You can access values inside an object using:
 * - Dot notation (`object.key`)  
 * - Bracket notation (`object["key"]`)  
 * 
 * ✅ Why is it useful?
 * - Lets you retrieve or modify data inside an object  
 * - Required in nearly every real-world JS application  
 * - Bracket notation supports dynamic and special keys  
 * 
 * ✅ When to use what?
 * - Dot notation: when key is a valid identifier (no spaces, starts with letter)  
 * - Bracket notation: when key is dynamic, has spaces, or stored in a variable  
 */

// ✅ Dot Notation (Most common)
const user = {
  name: "Rohit",
  age: 25
};
console.log(user.name); // Output: Rohit
console.log(user.age);  // Output: 25

// ✅ Bracket Notation
const product = {
  "product-name": "Cake",
  price: 499
};
console.log(product["product-name"]); // Output: Cake
console.log(product["price"]);        // Output: 499

// ✅ Dynamic Key Access with Brackets
const key = "name";
console.log(user[key]); // Output: Rohit

// ✅ Nested Object Access
const order = {
  item: {
    name: "Cookie",
    price: 99
  },
  customer: {
    name: "Alice"
  }
};
console.log(order.item.name); // Output: Cookie
console.log(order["customer"]["name"]); // Output: Alice

// ✅ Accessing properties with spaces or special characters
const bakery = {
  "shop name": "PureCravve Bakery",
  location: "Gwalior"
};
console.log(bakery["shop name"]); // Output: PureCravve Bakery

