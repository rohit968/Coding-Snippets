/* 
====================================
🔍 `import.meta` in JavaScript Modules
====================================

1️⃣ What is this?
------------------
`import.meta` is a **meta-property** available **only in ES modules**.  
It provides context-specific metadata about the current module.

🧱 It's like a "this" keyword for the module itself.

2️⃣ Why does it matter?
------------------------
✅ Gives info like the module's URL (`import.meta.url`)  
✅ Useful for file path resolution, especially in Node or Deno  
✅ Can be extended by bundlers (like Vite or Rollup) for custom metadata

3️⃣ Why and when to use?
-------------------------
✅ When you need the absolute path of a module file (e.g., to read from the filesystem in Node)  
✅ When working with modern bundlers — they add helpful data to `import.meta`  
✅ In advanced builds (code splitting, lazy loading)

4️⃣ Snippets:
--------------
*/

// ✅ Basic usage (browser)
console.log(import.meta.url);
// Output: full URL of the current module (e.g., 'http://localhost:3000/js/app.js')

// ✅ In a dynamic import
const moduleURL = import.meta.url;
console.log("Current module's URL:", moduleURL);

// ✅ Node.js example (ESM only)
// run with: node --experimental-modules file.mjs or with "type": "module"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Current file:', __filename);
console.log('Current directory:', __dirname);


//5️⃣ Real-World Examples:
//-------------------------
//✅ **Resolve file paths for file system operations in Node**  

//✅ **Hot Module Replacement** (HMR) in frameworks like Vite or Snowpack:
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Module updated!');
  });
}

//✅ Loading JSON or assets relative to the module location:
fetch(new URL('./data.json', import.meta.url))
  .then(res => res.json())
  .then(data => console.log(data));

/*

6️⃣ Interview Tips:
❓ Q: What is import.meta.url used for?
✅ A: To get the absolute URL of the current module — helpful for path resolution or loading assets.

❓ Q: Can you access import.meta in CommonJS?
✅ A: ❌ No — import.meta only exists in ES Modules.

❓ Q: What kind of info can bundlers inject into import.meta?
✅ A: Vite, Rollup, and others can add HMR, environment data, custom flags, etc.

🔥 Bonus:

You can use new URL(relativePath, import.meta.url) to construct absolute paths dynamically in a safe way.
*/
