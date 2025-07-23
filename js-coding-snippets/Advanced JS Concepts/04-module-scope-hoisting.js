/* 
=================================================
📦 Module Scope & Hoisting in JavaScript Modules
=================================================

1️⃣ What is this?
------------------
🔒 JavaScript modules have **their own top-level scope**.  
They're **not global**, and nothing declared inside leaks out by default.

Hoisting still occurs in modules — but with stricter rules compared to regular scripts.

2️⃣ Why does it matter?
------------------------
✅ Avoids polluting global scope.  
✅ Promotes modular, maintainable code.  
✅ Explains temporal dead zone (TDZ) behavior in imports/exports.

3️⃣ Why and when to use?
-------------------------
✅ Always — JS modules are now standard practice in all modern development.  
✅ Understanding scope & hoisting is critical to avoid ReferenceErrors.

4️⃣ Snippets:
--------------

*/

// ======= Module Scope =========

// file: utils.js
const secret = "Hidden!";
export const show = () => console.log("This is visible.");

// file: main.js
// console.log(secret); ❌ ReferenceError: secret is not defined (not global)
import { show } from './utils.js';
show();

// ======= Hoisting Behavior =========

// ✅ Function declarations are hoisted
export function greet() {
  console.log("Hello!");
}

// ❌ Variables declared with let/const are hoisted BUT not initialized
// So accessing before declaration throws ReferenceError (TDZ)
console.log(msg); // ❌ ReferenceError
const msg = "Hi";

// ❌ Cannot use imports before they are resolved
import { value } from './module.js';
console.log(value); // ✅ This works only AFTER module is fully parsed

/*
5️⃣ Real-World Examples:
-------------------------
✅ Modular Architecture:
   - Scope isolation helps prevent variable name conflicts across files.
   - Encourages reusable, testable units of code.

✅ Debugging:
   - Misunderstanding hoisting leads to bugs like:
     "Uncaught ReferenceError: Cannot access before initialization"

✅ TDZ in modules:
   ```js
   console.log(foo); // ReferenceError
   import { foo } from './data.js';

6️⃣ Interview Tips:
❓ Q: What’s the difference between hoisting in scripts vs. modules?
✅ A: In modules, let/const/exports are hoisted but not initialized — leading to temporal dead zone.

❓ Q: Are modules globally scoped?
✅ A: No — modules have their own top-level scope.

❓ Q: Why can’t you use top-level await in non-modules?
✅ A: Because scripts don’t support top-level await, but modules do (since ES2022).

🔥 Bonus: Use "type": "module" in package.json to enable ESM in Node.js and unlock true module scope.
*/