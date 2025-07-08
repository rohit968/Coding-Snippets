// ======================================================
// 📌 Topic: Computed Property Names in JavaScript (ES6)
// ======================================================

/**
 * ✅ What is it?
 * Computed property names let you create or access object keys **dynamically**
 * using square brackets `[]` during object creation.
 * 
 * ✅ Why is it useful?
 * - Create dynamic keys based on variables  
 * - Generate properties in loops or from user input  
 * - Essential for scalable forms, filters, and configs  
 * 
 * ✅ How to use it?
 * Syntax: 
 * ```js
 * const obj = { [dynamicKey]: value };
 * ```
 */

// ✅ Basic Example
const key = "username";
const user = {
  [key]: "RohitTiwari"
};
console.log(user); // { username: "RohitTiwari" }

// ✅ Dynamic Key from Function
function getKey(index) {
  return `item_${index}`;
}
const cart = {
  [getKey(1)]: "Cake",
  [getKey(2)]: "Brownie"
};
console.log(cart); // { item_1: "Cake", item_2: "Brownie" }

// ✅ Use in Loop to Generate Multiple Keys
const scores = {};
for (let i = 1; i <= 3; i++) {
  scores[`score_level_${i}`] = i * 10;
}
console.log(scores);
// Output: { score_level_1: 10, score_level_2: 20, score_level_3: 30 }

// ✅ With Expressions as Keys
const prefix = "user_";
const obj = {
  [`${prefix}id`]: 101,
  [`${prefix}name`]: "Alice"
};
console.log(obj); // { user_id: 101, user_name: "Alice" }

// ====================================================== //

// ✅ Real-life Example: Dynamic Form Fields
function createFormData(fieldName, value) {
  return {
    [fieldName]: value
  };
}
console.log(createFormData("email", "test@example.com"));
// { email: "test@example.com" }

// ✅ Real-life Example: API Filters or Sorting Keys
const sortBy = "price";
const order = "desc";

const filter = {
  [sortBy]: order
};
console.log(filter); // { price: "desc" }



// 🗣️ Layman Interview Explanation — Computed Property Names
// "Think of computed properties like writing on a label maker. Whatever label you type in the machine becomes the actual tag on the box. In JavaScript, the key you put in square brackets [ ] gets printed as the actual property in the object."

