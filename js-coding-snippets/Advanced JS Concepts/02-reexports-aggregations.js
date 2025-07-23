/* 
============================================
🔁 Re-Exports & Module Aggregation in ES6
============================================

1️⃣ What is this?
------------------
Re-exports let one module re-export bindings from another module.  
Aggregation means combining multiple exports from different modules into a single module for cleaner imports.

2️⃣ Why does it matter?
------------------------
✅ Promotes clean architecture and separation of concerns.  
✅ Allows centralizing module access from a single file.  
✅ Useful for large codebases with many modules/components.

3️⃣ Why and when to use?
-------------------------
✅ Ideal in component libraries or APIs to simplify imports.  
✅ Create index.js files that export everything from submodules.  
✅ Acts as a facade for better maintainability.

4️⃣ Snippets:
--------------

*/

// 📁 file: math.js
export const PI = 3.14;
export function square(x) {
  return x * x;
}

// 📁 file: geometry.js
export function areaCircle(r) {
  return PI * r * r;  // Assumes PI was imported
}

// 📁 file: index.js (aggregator)
export * from './math.js';       // Re-export everything from math
export * from './geometry.js';   // Re-export everything from geometry

// OR selectively re-export with alias
export { square as sq } from './math.js';
export { areaCircle as circleArea } from './geometry.js';

// 📁 main.js (consumer)
import { PI, square, areaCircle } from './index.js';

// OR if using aliases
import { sq, circleArea } from './index.js';

/*
5️⃣ Real-World Examples:
-------------------------
✅ **UI Component Library**:  
   Re-export all components in `index.js`:
   ```js
   export * from './Button.js';
   export * from './Card.js';
   export * from './Modal.js';

✅ Redux Store Modules:
  Aggregate reducers or actions:
    export * from './userSlice.js';
    export * from './cartSlice.js';

    ✅ API Client Utilities:
  Bundle auth.js, fetch.js, and config.js into a utils/index.js.

6️⃣ Interview Tips:
❓ Q: What’s the difference between export and export * from?
✅ A: export declares a binding in the current module; export * from re-exports bindings from another module.

❓ Q: Can you rename while re-exporting?
✅ A: Yes. export { original as alias } from './file.js';

❓ Q: Does export * from also re-export the default export?
✅ A: ❌ No. You must re-export the default explicitly:
export { default as something } from './file.js';

🔥 Bonus: Use index.js or index.ts as the aggregator to avoid verbose import paths like:
import { X } from '../components/index.js'; → import { X } from '../components';
*/