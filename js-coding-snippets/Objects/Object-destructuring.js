// ======================================================
// 📌 Topic: Extract Properties Easily — Object Destructuring
// ======================================================

/**
 * ✅ What is it?
 * Object destructuring is a syntax that allows you to extract specific properties
 * from an object and assign them to variables in a single line.
 * 
 * ✅ Why is it useful?
 * - Cleaner and shorter code  
 * - Avoid repetitive `obj.prop` access  
 * - Perfect for working with APIs, props, configs, etc.
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * const { key1, key2 } = object;
 * ```
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  age: 25,
  city: "Gwalior"
};
const { name, age } = user;
console.log(name); // Rohit
console.log(age);  // 25

// ✅ Rename Variables
const { city: userCity } = user;
console.log(userCity); // Gwalior

// ✅ Provide Default Values
const { email = "Not Provided" } = user;
console.log(email); // Not Provided

// ✅ Nested Destructuring
const bakery = {
  name: "PureCravve",
  owner: {
    firstName: "Rohit",
    lastName: "Tiwari"
  }
};
const {
  owner: { firstName, lastName }
} = bakery;
console.log(firstName); // Rohit
console.log(lastName);  // Tiwari

// ✅ Destructuring in Function Parameters
function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}!`);
}
greet(user); // Hello Rohit from Gwalior!

// ✅ Use in Loops
const products = [
  { id: 1, name: "Cake", price: 499 },
  { id: 2, name: "Cookie", price: 199 }
];
for (const { name, price } of products) {
  console.log(`${name}: ₹${price}`);
}


// 🗣️ Layman Interview Explanation — Object Destructuring
// "Imagine getting a bakery delivery box. Instead of opening the whole box every time to find the cake or cookie, you just label them at the start and grab them instantly when needed. That’s what destructuring does — extracts and names the pieces you care about."
