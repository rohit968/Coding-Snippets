/* 
============================================
⚔️ CommonJS (CJS) vs ES Modules (ESM) in Node.js
============================================

1️⃣ What is this?
------------------
🧱 Node.js supports two module systems:
- CJS: CommonJS — traditional Node module system using `require`
- ESM: ECMAScript Modules — modern JS module syntax using `import/export`

Node now supports **both**, but they differ in **syntax, scope, and behavior**.

2️⃣ Why does it matter?
------------------------
✅ Know which to use in your project  
✅ Understand compatibility issues  
✅ Required for using packages or tools that expect one or the other

3️⃣ When to use which?
-----------------------
✅ Use CJS for older Node projects or quick scripts  
✅ Use ESM for modern tooling, frontend-backend consistency, and tree-shaking  

💡 Tip: Use ESM for all new projects (future-proof)

4️⃣ Syntax Comparison:
------------------------

// ✅ CommonJS (CJS)
// file: logger.cjs
const log = (msg) => console.log(msg);
module.exports = log;

// file: app.cjs
const log = require('./logger.cjs');
log('Hello from CJS');


// ✅ ES Modules (ESM)
// file: logger.mjs OR .js with "type": "module" in package.json
export const log = (msg) => console.log(msg);

// file: app.mjs
import { log } from './logger.mjs';
log('Hello from ESM');

5️⃣ Key Differences:
---------------------

| Feature                 | CommonJS (CJS)        | ES Modules (ESM)       |
|------------------------|-----------------------|------------------------|
| Syntax                 | require/module.exports| import/export          |
| File Extensions        | `.js` (default)       | `.mjs` or `.js` w/ `"type": "module"` |
| Loading                | Synchronous           | Asynchronous (promise-based) |
| Top-level `await`      | ❌ Not allowed         | ✅ Allowed (from ES2022)  |
| `__filename`, `__dirname` | ✅ Built-in         | ❌ Must be derived using `import.meta.url` |
| Dynamic import         | ❌ `require` only      | ✅ `import()` supported |
| Tree-shaking           | ❌ Not possible        | ✅ Supported by bundlers |

6️⃣ Real-World Scenarios:
---------------------------
✅ Using native `import` in Node without Babel/Webpack  
✅ Migrating an old CJS codebase to ESM for modern tooling  
✅ Combining backend and frontend codebases (same module system)

7️⃣ Interview Tips:
--------------------
❓ Q: Can I use `require()` in an ES Module?  
✅ A: ❌ No — `require` is not defined in ESM.

❓ Q: Can I mix CJS and ESM in a Node.js project?  
✅ A: ⚠️ Only with care — it’s possible via dynamic `import()` or dual-package exports.

❓ Q: Why does ESM enable better tree-shaking?  
✅ A: Because static analysis is easier with `import/export` (CJS is dynamic).

🔥 Bonus:
--------
// Convert __dirname in ESM:
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
*/
