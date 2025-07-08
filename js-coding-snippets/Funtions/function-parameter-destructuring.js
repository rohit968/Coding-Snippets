// ======================================================
// 📌 Topic: Function Parameter Destructuring in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Function Parameter Destructuring allows you to:
 * - Unpack values from objects or arrays directly in function parameters  
 * - Access specific properties without extra lines of code  
 * 
 * ✅ Why is it useful?
 * - Cleaner, more readable functions  
 * - Avoids repetitive `obj.property` code  
 * - Especially helpful for functions with multiple configurable options  
 * 
 * ✅ How to use it?
 * Destructure objects or arrays in the function definition:
 * ```js
 * function greet({ name, age }) { ... }
 * ```
 * 
 * ✅ Real-life examples:
 * - Handling config objects  
 * - Extracting user details  
 * - Processing API response data  
 */

// ✅ Basic Object Destructuring in Parameters
function introduce({ name, profession }) {
  console.log(`Hi, I'm ${name}, a ${profession}`);
}
const person = { name: "Rohit", profession: "Baker", location: "India" };
introduce(person); // Output: Hi, I'm Rohit, a Baker

// ✅ Destructuring with Default Values
function displayProduct({ name, price = 0 }) {
  console.log(`${name} costs ₹${price}`);
}
displayProduct({ name: "Cookie", price: 50 });  // Cookie costs ₹50
displayProduct({ name: "Brownie" });            // Brownie costs ₹0

// ✅ Array Destructuring in Parameters
function sum([a, b]) {
  return a + b;
}
console.log(sum([5, 10])); // Output: 15

// ========================================================== //

// ✅ Real-life Example: Config Object for API Call
function fetchData({ url, method = "GET" }) {
  console.log(`Fetching ${url} with ${method} method`);
}
fetchData({ url: "/products" });               // Defaults to GET
fetchData({ url: "/orders", method: "POST" }); // Uses POST

// ✅ Real-life Example: Bakery Order Processing
function processOrder({ item, quantity = 1, customer }) {
  console.log(`Preparing ${quantity} x ${item} for ${customer}`);
}
processOrder({ item: "Cake", quantity: 2, customer: "Alice" });
processOrder({ item: "Cookie", customer: "Bob" });


// 🗣️ Layman Interview Explanation — Parameter Destructuring
// "Imagine your bakery gets an online order as a package with item, quantity, and customer details. Instead of opening the package and looking inside each time, you unpack everything right at the start. That's what destructuring does—it simplifies how you access values."