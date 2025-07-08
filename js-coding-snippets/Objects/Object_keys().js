// ======================================================
// 📌 Topic: Extracting Object Keys — `Object.keys()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.keys(obj)` returns an array of the object's **own enumerable property names** (keys).
 * 
 * ✅ Why is it useful?
 * - Allows you to loop through object properties  
 * - Essential for dynamic UIs, form generation, data analysis  
 * - Converts object structure into something iterable  
 * 
 * ✅ How to use it?
 * Syntax: 
 * ```js
 * Object.keys(object)
 * ```
 * Returns: An array of keys
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  age: 25,
  isMember: true
};
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "isMember"]

// ✅ Looping Over Object Keys
keys.forEach((key) => {
  console.log(`${key} ➤ ${user[key]}`);
});
// Output:
// name ➤ Rohit
// age ➤ 25
// isMember ➤ true


// ✅ Use with `length` to Count Properties
console.log(Object.keys(product).length); // 3

// ✅ Use in Dynamic Forms or Filters
const formFields = {
  fullName: "",
  email: "",
  phone: ""
};
Object.keys(formFields).forEach((field) => {
  // You could render these in a UI
  console.log(`Render input for: ${field}`);
});

// ✅ Edge Case: Empty Object
console.log(Object.keys({})); // []

// ✅ Nested Object Keys (Only first level)
const nested = {
  name: "Brownie",
  details: {
    price: 199,
    weight: "200g"
  }
};
console.log(Object.keys(nested)); // ["name", "details"]


// ====================================================== //

// ✅ Real-life Example: Display Product Fields
const product = {
  name: "Cake",
  price: 399,
  inStock: true
};

Object.keys(product).forEach((field) => {
  console.log(`Field: ${field}, Value: ${product[field]}`);
});



// 🗣️ Layman Interview Explanation — Object.keys()
// "Think of Object.keys() like asking: 'What are the column names in this spreadsheet?' It gives you a list of all the fields you have, so you can loop over them, display them, or build something from them. It's like unlocking the structure of your object."

