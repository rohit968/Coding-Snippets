// ======================================================
// 📌 Topic: JavaScript Scope — Global, Function, and Block Scope
// core-concepts/01-scope.js
// ======================================================

/**
 * ✅ What is it?
 * Scope determines where variables and functions are accessible in your code.
 * JavaScript has three main scope types:
 *  - Global Scope
 *  - Function Scope
 *  - Block Scope (introduced with ES6 `let`/`const`)
 *
 * ✅ Why is it useful?
 * - Prevents naming collisions
 * - Controls variable lifetime
 * - Improves readability and maintainability
 *
 * ✅ How to use it?
 * - Declare globals with caution (`var`/top-level)
 * - Use `let`/`const` for block scope
 * - Understand `var` hoisting in function scope
 */

// 🔹 Global Scope (accessible everywhere)
var globalVar = "I am global";
console.log(globalVar); // "I am global"

function showGlobal() {
  console.log(globalVar); // still accessible
}
showGlobal();

// 🔹 Function Scope (variables inside functions)
function functionScopeExample() {
  var funcVar = "I exist only here";
  console.log(funcVar);
}
functionScopeExample();
// console.log(funcVar); // ❌ ReferenceError: funcVar is not defined

// 🔹 Block Scope (ES6)
if (true) {
  let blockVar = "I exist only in this block";
  const blockConst = 123;
  console.log(blockVar, blockConst);
}
// console.log(blockVar);     // ❌ ReferenceError
// console.log(blockConst);   // ❌ ReferenceError

// ✅ Real-life Example: Loop block scope
for (let i = 0; i < 3; i++) {
  console.log(`Inside loop: ${i}`);
}
// console.log(i); // ❌ ReferenceError — `i` is block-scoped

// ✅ Interview Tip:
// "Think of scope like rooms in a house:
//  - Global scope is the yard (everyone can get in),
//  - Function scope is a room with a locked door,
//  - Block scope is like a closet inside that room only accessible when inside."