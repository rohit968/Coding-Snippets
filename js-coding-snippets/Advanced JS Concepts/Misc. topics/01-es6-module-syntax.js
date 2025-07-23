/* 
=====================================
📦 Advanced JS Modules – ES6 Module Syntax
=====================================

1️⃣ What is this?
------------------
ES6 Modules are a standardized way to organize JavaScript code into reusable files.  
- Use `export` to share variables/functions/classes.  
- Use `import` to include those exports in other files.

2️⃣ Why does it matter?
------------------------
✅ Enables clear separation of concerns and encapsulation.  
✅ Facilitates maintainable, testable, and reusable code.  
✅ Supported natively in modern browsers and Node.js (with `"type":"module"`).

3️⃣ Why and when to use?
-------------------------
✅ Use for any multi-file JS project—frontend apps, Node services, libraries.  
✅ Replace older patterns (IIFE, AMD, CommonJS) with standardized syntax.  
✅ Leverage tree-shaking in build tools to remove unused code.

4️⃣ Snippets:
--------------

*/

// ---- Named Exports ----
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return PI * this.radius ** 2;
  }
}

// ---- Default Export ----
export default function multiply(a, b) {
  return a * b;
}

// ---- Imports ----
// Named imports (must match exported names)
import { PI, add, Circle } from './math.js';

// Default import (any name)
import multiply from './math.js';

// Mixed import
import multiply, { PI, add } from './math.js';

// Namespace import (import everything under a namespace)
import * as MathUtils from './math.js';
console.log(MathUtils.PI, MathUtils.add(2, 3));

// ---- Renaming imports ----
import { add as sum, Circle as Round } from './math.js';

/*
5️⃣ Real-World Examples:
-------------------------
✅ **Utility Library**:  
   Split math helpers into `math.js`, string helpers into `string.js`, and import only what you need.

✅ **Component-based UI**:  
   In React, export multiple components from `components/` folder and import them selectively in pages.

✅ **Feature Modules**:  
   Organize routes: `userRoutes.js`, `adminRoutes.js`, then in `app.js`:
   import userRoutes from './userRoutes.js'; import adminRoutes from './adminRoutes.js';

6️⃣ Interview Tips:
--------------------
❓ Q: What’s the difference between named and default exports?  
✅ A: Named exports export multiple bindings by name; default exports export a single value without a name.

❓ Q: How do you import a default and named export from the same module?  
✅ A: `import defaultName, { named1, named2 } from './module.js';`

❓ Q: Why might tree-shaking remove unused code in ES6 modules?  
✅ A: Because exports are statically analyzable, bundlers can detect and drop unused exports.

🔥 Bonus: Always include file extensions (`.js`) when using ES6 modules in browsers to avoid resolution errors.
*/
