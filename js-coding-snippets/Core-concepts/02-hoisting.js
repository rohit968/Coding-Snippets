// ======================================================
// 📌 Topic: Hoisting in JavaScript — var, let, const
// core-concepts/02-hoisting.js
// ======================================================

/**
 * ✅ What is it?
 * Hoisting is JavaScript's default behavior of moving declarations
 * to the top of their containing scope before execution.
 *
 * ✅ Why is it useful?
 * - Explains why you can call functions before declaration
 * - Helps understand unpredictable behavior with `var`
 *
 * ✅ How to use it?
 * - Function and `var` declarations are hoisted and initialized with `undefined` (for var).
 * - `let` and `const` declarations are hoisted but in the "temporal dead zone" until initialized.
 */

// 🔹 Hoisting with `var`
console.log(aVar); // undefined (declaration hoisted, initialization not)
var aVar = 10;
console.log(aVar); // 10

function hoistFunction() {
  console.log(message); // undefined
  var message = "Hoisted var inside function";
  console.log(message); // "Hoisted var inside function"
}
hoistFunction();

// 🔹 Function Declaration Hoisting
sayHello(); // Works because function declarations are hoisted
function sayHello() {
  console.log("Hello from hoisted function!");
}

// 🔹 let and const Hoisting (TDZ)
try {
  console.log(letVar); // ReferenceError
} catch (e) {
  console.log("Error:", e.message);
}
let letVar = "I am let";

try {
  console.log(constVar); // ReferenceError
} catch (e) {
  console.log("Error:", e.message);
}
const constVar = "I am const";

// ✅ Real-life Example: Predicting Bugs
function buggy() {
  console.log(flag); // undefined, not error
  if (!flag) {
    var flag = true;
  }
  console.log(flag); // true
}
buggy();

// ✅ Interview Tip:
// "Hoisting is like packing all declarations at the start of a function or script,
// but `var` gets unpacked empty (undefined) and later assigned.
// `let`/`const` are packed but locked until their line runs."