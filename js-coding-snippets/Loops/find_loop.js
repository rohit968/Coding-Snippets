// ======================================================
// 📌 Topic: Finding Elements — `.find()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.find()` method returns the **first** element in an array  
 * that satisfies the provided condition. If none match, it returns `undefined`.
 * 
 * ✅ Why is it useful?
 * - Quick way to retrieve one item
 * - Clean, readable alternative to `for` or `filter()[0]`
 * - Common in searches, validation, or form processing
 * 
 * ✅ Syntax:
 * const result = array.find((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Find First Even Number
const numbers = [1, 3, 4, 6, 8];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 4

// ✅ Edge Case — No Match Found
const oddOnly = [1, 3, 5];
const result = oddOnly.find(num => num % 2 === 0);
console.log(result); // undefined

// ✅ With Index Usage
const letters = ["a", "b", "c", "d"];
const thirdLetter = letters.find((char, index) => index === 2);
console.log(thirdLetter); // "c"

// ====================================================== //

// ✅ Real-life Example: Find User by ID
const users = [
  { id: 1, name: "Rohit" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Alice" }

// ✅ Real-life Example: Find Out-of-Stock Product
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 0 },
  { name: "Muffin", stock: 12 }
];
const outOfStock = products.find(p => p.stock === 0);
console.log(outOfStock); // { name: "Cookie", stock: 0 }

// ✅ Real-life Example: Form Field Validation
const formFields = [
  { field: "email", value: "" },
  { field: "password", value: "123456" }
];
const firstEmptyField = formFields.find(f => f.value === "");
console.log(firstEmptyField); // { field: "email", value: "" }



// 🗣️ Layman Interview Explanation — .find()
// "Imagine looking for the first available seat in a bakery — you check row by row and sit at the first empty one. You stop once you find it. That’s .find() — it returns the first match and then stops."

// 💬 In interviews, say: “I use .find() to get the first element that meets a condition — like the first invalid form field, the first item out of stock, or the first user match.”