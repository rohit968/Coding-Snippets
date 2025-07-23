/*
🧠 Pure Functions vs Side Effects in JavaScript

🎯 A **pure function**:
- Has no side effects
- Returns same output for same input
- Doesn’t depend on or modify external state

🎯 A **side effect** is:
- Anything that affects the outside world (console, DOM, file, API, etc.)

✅ Pure functions are easier to test, debug, and optimize.
*/

// ✅ Pure Function Example
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5 (Always same output for same input)

// ❌ Impure Function Example (side effect: logging)
function logAndAdd(a, b) {
  console.log("Adding:", a, b); // ❌ Side effect: modifies console
  return a + b;
}

// ❌ Impure Function Example (side effect: external variable)
let count = 0;
function increment() {
  count++; // ❌ Modifies outer state
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2

/*
🧪 Why Pure Functions are Preferred:

- Reusable: Can use in different places confidently
- Predictable: No surprises due to hidden state
- Testable: Easy to write unit tests
- Composable: Can chain them together
*/

// ✅ Converting impure to pure (best practice)
function pureIncrement(count) {
  return count + 1;
}

console.log(pureIncrement(5)); // 6

/*
-----------------------
🧠 Side Effect Examples:
-----------------------
- console.log()
- alert()
- DOM manipulation
- Network requests
- Reading/Writing files
- Modifying external/global variables
- Using Date.now(), Math.random() (non-deterministic)
*/

function showCurrentTime() {
  console.log(new Date()); // ❌ Non-deterministic
}

/*
--------------------------
📦 Real-world applications:
--------------------------
- React favors pure components
- Redux encourages pure reducers
- Functional programming relies heavily on purity
*/

