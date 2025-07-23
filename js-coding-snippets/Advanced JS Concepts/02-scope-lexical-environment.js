/*
🔍 What is Scope in JavaScript?
Scope determines the **accessibility** (visibility) of variables.

Types of Scope:
1. Global Scope — declared outside any function/block
2. Function Scope — declared inside a function, accessible only within
3. Block Scope — variables declared with `let` or `const` inside `{}` are block-scoped

JavaScript used to have only function scope (with `var`) before ES6.
*/

/* 🌍 Global Scope Example */
const globalVar = "🌎 I am global";

function checkGlobalScope() {
  console.log(globalVar); // accessible
}
checkGlobalScope();

/* 🧠 Function Scope Example */
function testScope() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c); // All accessible here
}
// console.log(a); // ❌ ReferenceError: a is not defined

/* 🧱 Block Scope Example */
if (true) {
  var x = 100; // not block scoped
  let y = 200; // block scoped
  const z = 300; // block scoped
}
console.log(x); // ✅ 100
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError

/*
🔬 What is Lexical Environment?
Lexical Environment = Local memory + reference to outer environment
It’s created every time a function is invoked and helps form **closures**.

💡 Lexical means "where it’s written" — scope is decided at **code-writing time**, not runtime.
*/

/* 🧭 Lexical Scoping Example */
function outer() {
  let outerVar = "I'm from outer";
  function inner() {
    console.log(outerVar); // Lexical environment allows access
  }
  inner();
}
outer(); // ✅ I'm from outer

/*
🧠 The inner function looks up the variable `outerVar` in its lexical parent (outer function).
This lookup chain is called the **Scope Chain**.
*/

/*
🔁 Lexical Chain Example (Nested Functions)
*/
function grandparent() {
  const a = "👴 Grandpa";
  function parent() {
    const b = "👨 Dad";
    function child() {
      const c = "👦 Kid";
      console.log(a, b, c); // ✅ All accessible
    }
    child();
  }
  parent();
}
grandparent();

/*
📌 Summary:
- Scope is about visibility
- Lexical environment defines how scopes are nested
- JavaScript resolves variable access using **lexical scoping**
- This is the basis of closures and async behavior

🧪 Interview Question:
Q: What’s the difference between Scope and Lexical Environment?
A: Scope refers to the visibility of variables. Lexical environment is the structure that holds variable references and links to its outer environment. Lexical scope is defined where the function is written.
*/

