/*
🪄 What is Hoisting?

Hoisting is JavaScript's default behavior of moving **declarations** (not initializations) to the **top of their scope** (global/function/block) during the compilation phase.

Only declarations are hoisted — initializations stay in place.

🚩 All `var`, `function`, `let`, and `const` declarations are hoisted.
BUT — they behave differently!

*/

console.log(a); // ✅ undefined — `var` is hoisted
// console.log(b); // ❌ ReferenceError — `let` is hoisted but in TDZ
// console.log(c); // ❌ ReferenceError — `const` is hoisted but in TDZ

var a = 10;
let b = 20;
const c = 30;

/*
⚠️ TDZ = Temporal Dead Zone
The time between hoisting and actual declaration where the variable exists but cannot be accessed.
Applies to `let` and `const`.
*/

// 🧪 Example: Function Scope Hoisting
function hoistExample() {
  console.log(x); // ✅ undefined
  var x = 5;

  // let y = 10;
  // console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
}
hoistExample();

/*
📦 Variable Hoisting Summary:
| Keyword | Hoisted? | Value Before Init | Scope         | Re-declarable? |
|---------|----------|-------------------|---------------|----------------|
| var     | Yes      | undefined          | Function      | Yes            |
| let     | Yes      | ReferenceError (TDZ)| Block        | No             |
| const   | Yes      | ReferenceError (TDZ)| Block        | No             |
*/

// 🎯 Function Declaration Hoisting

sayHello(); // ✅ Works fine
function sayHello() {
  console.log("Hello from hoisted function!");
}

// ❌ Function Expression (with var)
try {
  greet(); // ❌ TypeError: greet is not a function
} catch (err) {
  console.error(err.message);
}
var greet = function () {
  console.log("Hello from function expression");
};

// ❌ Function Expression (with let)
try {
  welcome(); // ❌ ReferenceError
} catch (err) {
  console.error(err.message);
}
let welcome = () => {
  console.log("Welcome!");
};

/*
💡 Best Practice:
- Always declare variables at the top of their scope.
- Prefer `let`/`const` for predictable scoping and avoiding hoisting issues.
- Avoid using `var` in modern code.

🧠 Interview Tip:
Q: What gets hoisted in JS?
A: All declarations (`var`, `function`, `let`, `const`) get hoisted. Only `var` and function **declarations** are usable before their line of code. `let`/`const` go into the TDZ.

Q: Can you explain TDZ?
A: TDZ is the period between hoisting and actual initialization where accessing `let`/`const` variables throws a ReferenceError.
*/

