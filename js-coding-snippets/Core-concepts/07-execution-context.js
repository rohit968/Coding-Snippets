// ======================================================
// 📌 Topic: Execution Context & Call Stack in JavaScript
// core-concepts/07-execution-context.js
// ======================================================

/**
 * ✅ What is Execution Context?
 * It's the environment in which JavaScript code is evaluated and executed.
 * Each context has:
 *  - Variable Object (VO) / Lexical Environment
 *  - Scope Chain
 *  - this binding
 *
 * ✅ Why is it useful?
 * - Explains how variables/functions are resolved
 * - Shows how the call stack tracks function invocations
 * - Helps debug runtime errors (stack overflows, undefineds)
 *
 * ✅ Types of Execution Context:
 * 1. Global Execution Context (GEC)
 * 2. Function Execution Context (FEC)
 * 3. Eval Execution Context (less common)
 *
 * ✅ Call Stack:
 * JavaScript uses a stack to manage execution contexts.
 * - Global context pushed first
 * - Function calls push new contexts
 * - `return` or completion pops context
 */

// 🔹 Global Execution Context
var globalVar = 'Global';
function first() {
  // new Function Context for `first`
  console.log('Inside first, globalVar =', globalVar);
  second();              // push second context
}
function second() {
  // new Function Context for `second`
  var localVar = 'Local';
  console.log('Inside second, localVar =', localVar);
  // call stack: GEC → first → second
}

console.log('Start');      // global context
first();                    // pushes first → second
console.log('End');        // resumes global after pops

// 🔹 Real-world Example: Recursion Stack
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log('5! =', factorial(5));
// call stack depth = 6 contexts

// 🔹 Edge Case: Stack Overflow
function infinite() {
  return infinite();
}
// infinite(); // ❌ RangeError: Maximum call stack size exceeded

// 🗣️ Interview Tip:
// "Think of the execution context as a workspace—each function call creates a new desk,
// and the call stack is the pile of desks. When a desk finishes work, it’s removed."