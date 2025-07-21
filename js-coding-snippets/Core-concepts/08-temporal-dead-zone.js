// ======================================================
// 📌 Topic: Temporal Dead Zone (TDZ) in JavaScript
// core-concepts/08-temporal-dead-zone.js
// ======================================================

/**
 * ✅ What is it?
 * The Temporal Dead Zone (TDZ) is the period between the start of a block
 * and the point where a `let` or `const` variable is declared and initialized.
 * Accessing the variable before initialization throws a ReferenceError.
 *
 * ✅ Why is it useful?
 * - Catches errors early by preventing use of uninitialized variables
 * - Encourages safer, predictable code patterns
 *
 * ✅ How to observe it?
 * - Any `let` or `const` inside a block is in TDZ until its declaration line executes
 */

// 🔹 Example: TDZ in a block
{
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  console.log(a); // 10
}

// 🔹 Function-level TDZ
function tdzExample() {
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 'hello';
  console.log(b); // 'hello'
}
tdzExample();

// 🔹 TDZ with Parameters
function paramExample(x = y, y = 5) {
  // default for x tries to read y before initialization
  console.log(x, y);
}
// paramExample(); // ReferenceError: y is not defined

// 🔹 Real-life Example: Preventing accidental access
function calculate() {
  if (false) {
    let result = expensiveOperation();
    console.log(result);
  }
  // result is not accessible here and not in TDZ (block skipped)
}
calculate();

// 🔹 Edge Case: var vs let/const
{
  console.log(cVar); // undefined (hoisted)
  // console.log(cLet); // ReferenceError
  var cVar = 1;
  let cLet = 2;
}

// 🗣️ Interview Tip:
// "TDZ is where `let` and `const` variables exist but cannot be used until declared—
// it prevents accessing temporal, uninitialized bindings and makes code safer." 