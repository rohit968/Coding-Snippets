// ======================================================
// 📌 Topic: All Must Pass — `.every()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.every()` method checks whether **all elements**  
 * in an array pass the given condition. Returns `true` or `false`.
 * 
 * ✅ Why is it useful?
 * - Used for **validations**, **access control**, **data quality**
 * - Stops immediately on the first failure
 * - Cleaner than writing loops with `break`
 * 
 * ✅ Syntax:
 * const result = array.every((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Are All Numbers Even?
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// ✅ Use Case: Validate Permissions
const permissions = ["read", "write", "delete"];
const allowed = permissions.every(p => ["read", "write", "delete", "update"].includes(p));
console.log(allowed); // true

// ✅ Edge Case: Empty Array
console.log([].every(x => false)); // true (no elements to fail)

// ====================================================== //

// ✅ Real-life Example: Are All Products In Stock?
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 10 },
  { name: "Muffin", stock: 7 }
];
const allInStock = products.every(p => p.stock > 0);
console.log(allInStock); // true

// ✅ Real-life Example: All Form Fields Filled?
const formFields = [
  { field: "email", value: "hello@purecravve.com" },
  { field: "password", value: "123456" },
  { field: "confirm", value: "123456" }
];
const allFilled = formFields.every(f => f.value.trim() !== "");
console.log(allFilled); // true

// ✅ Real-life Example: All Prices Below ₹500?
const cart = [
  { item: "Pastry", price: 120 },
  { item: "Brownie", price: 200 }
];
const affordableCart = cart.every(item => item.price < 500);
console.log(affordableCart); // true


// 🗣️ Layman Interview Explanation — .every()
// "Imagine baking 12 cookies and asking — are all of them perfectly baked? If even one is burnt, the answer is no. .every() checks that all items meet a rule."

// 💬 In interviews, say: “I use .every() when I need all items to match a condition — like when validating forms, stock levels, or access permissions. It stops early if one fails.”