// ======================================================
// 📌 Topic: Type Coercion in JavaScript — Implicit & Explicit
// core-concepts/06-type-coercion.js
// ======================================================

/**
 * ✅ What is it?
 * Type coercion is JavaScript's process of converting values
 * from one type to another, either implicitly (automatic) or
 * explicitly (manual with functions/operators).
 *
 * ✅ Why is it useful?
 * - Understand loose comparisons (`==`) and pitfalls
 * - Control data formats in calculations and concatenations
 * - Prevent unexpected bugs
 *
 * ✅ How to use it?
 * - Implicit: JavaScript engine converts types automatically
 * - Explicit: Use functions like String(), Number(), Boolean()
 */

// 🔹 Implicit Coercion Examples
console.log('5' + 3);       // "53" (number 3 -> string "3")
console.log('5' * 3);       // 15   (string '5' -> number 5)
console.log(5 == '5');      // true (string '5' -> number 5)
console.log(0 == false);    // true (false -> number 0)
console.log(0 === false);   // false (no coercion with strict equality)

// 🔹 Weird Implicit Cases
console.log('' + false);    // "false"
console.log([] + []);       // "" (two empty arrays -> empty strings)
console.log([] + {});       // "[object Object]"
console.log({} + []);       // 0 (object coerced to NaN then + => 0)

// 🔹 Explicit Coercion Examples
console.log(Number('123')); // 123
console.log(String(123));   // "123"
console.log(Boolean(0));    // false
console.log(Boolean(''));   // false

// ✅ Real-life Example: Sanitizing User Input
function sanitizeAge(input) {
  const age = Number(input);
  return isNaN(age) ? null : age;
}
console.log(sanitizeAge('30')); // 30
console.log(sanitizeAge('abc')); // null

// ✅ Real-life Example: Formatting Price
function formatPrice(value) {
  const num = Number(value);
  return isNaN(num) ? 'Invalid' : `₹${num.toFixed(2)}`;
}
console.log(formatPrice('499.5')); // "₹499.50"

// 🗣️ Interview Tip:
// "Use `===` and `!==` to avoid unexpected coercion. When you need conversion,
// prefer explicit functions (Number(), String(), Boolean()) for clarity."