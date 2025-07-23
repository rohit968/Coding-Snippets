/* 
==========================================================
📦 Module Patterns & Legacy Formats (Pre-ES6 + Modern JS)
==========================================================

1️⃣ Why learn this?
---------------------
🔄 Legacy projects and libraries still use older module patterns.  
🎓 Understanding these helps you debug, migrate, or integrate older codebases.  
💡 Also builds a deep foundation on how modular JS evolved.

---

2️⃣ Common Module Patterns Before ES6:
---------------------------------------

*/

//🔸 1. IIFE (Immediately Invoked Function Expression)
//📦 Used to encapsulate code & avoid polluting the global scope.
const MyModule = (function () {
  const privateVar = 'hidden';

  function publicMethod() {
    console.log('Public method, privateVar:', privateVar);
  }

  return {
    publicMethod,
  };
})();

MyModule.publicMethod(); // ✅ Allowed
console.log(MyModule.privateVar); // ❌ undefined
//✅ Pros: Encapsulation
//❌ Cons: No native import/export, not scalable

//🔸 2. Revealing Module Pattern
//📦 A variation of IIFE that exposes only desired members.
const MathModule = (function () {
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  return {
    add,
    subtract,
  };
})();

//🔸 3. CommonJS (CJS)
//📦 Used in Node.js by default (until ESM became standard)
// add.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// main.js
const add = require('./add');
console.log(add(2, 3));
//✅ Synchronous, easy to understand
//❌ Not tree-shakable, not suitable for browsers without bundlers

//🔸 4. AMD (Asynchronous Module Definition)
//📦 Designed for browser, used in RequireJS
// Using AMD
define(['math'], function (math) {
  console.log(math.add(2, 3));
});
//✅ Async loading
//❌ Verbose, outdated, rarely used now

//🔸 5. UMD (Universal Module Definition)
//📦 Works in browser + Node + AMD loaders
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory); // AMD
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(); // CommonJS
  } else {
    root.MyLib = factory(); // Global
  }
}(this, function () {
  return {
    sayHello: () => console.log('Hello!')
  };
}));
//✅ Works everywhere
//❌ Complex boilerplate

/*
3️⃣ How ES Modules improved everything:
✅ Clean import/export syntax
✅ Tree-shaking support
✅ Native browser support
✅ Scoped by default

// utils.js
export const greet = () => console.log("Hello!");

// main.js
import { greet } from './utils.js';
greet();

4️⃣ Interview Tips:
❓ Q: What is the difference between CommonJS and ESM?
✅ CJS uses require/module.exports and is sync; ESM uses import/export and is async + tree-shakable.

❓ Q: What is UMD and where is it useful?
✅ UMD supports multiple environments — used in library distributions.

❓ Q: Why was IIFE used in older JS?
✅ To simulate module scoping before native support existed.

5️⃣ Bonus — Migration Plan (Legacy to ESM):
🔁 IIFE → Convert to ES Module with exports
🔁 CommonJS → Use .mjs or type: "module" in package.json
🔁 Use bundlers like Vite/Webpack to handle UMD/AMD gracefully

*/