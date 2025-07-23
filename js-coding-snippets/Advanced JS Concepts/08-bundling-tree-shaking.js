/* 
====================================================
📦 Bundling & 🌲 Tree Shaking — Modern JS Essentials
====================================================

1️⃣ What is Bundling?
----------------------
🧩 Bundling is the process of **combining multiple files/modules** into a single file (or few files) to:
✅ Reduce HTTP requests  
✅ Optimize for production  
✅ Improve page load speed

🛠️ Popular Bundlers:
- Webpack
- Vite (uses esbuild/rollup)
- Rollup
- Parcel

💡 Example:
// Input: multiple files
  app.js
  utils/math.js
  components/header.js
// Output: bundled file
  bundle.js


---

2️⃣ What is Tree Shaking?
--------------------------
🌲 Tree Shaking is the process of **removing unused code** from your final bundle.  
➡️ It relies on **static analysis** of `import/export` statements.

🔍 Works best with **ES Modules**, NOT CommonJS.

💡 Example:

```js
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { add } from './utils.js';
console.log(add(2, 3));

// ✅ multiply() will be "shaken off" in production if unused

3️⃣ Why are these important?
✅ Essential for modern frontend performance
✅ Reduce file size and load time
✅ Tree-shaking helps remove dead code
✅ Bundling reduces round trips to server

4️⃣ Real-World Example using Vite (ESM-based):
*/
// vite.config.js
export default {
  build: {
    minify: true,
    rollupOptions: {
      treeshake: true,
    },
  },
};

/*
✅ Vite auto tree-shakes unused exports
✅ Generates highly optimized dist folder

5️⃣ Tree Shaking Gotchas:
🚫 Tree-shaking doesn’t work with:
  CommonJS (require) — dynamic nature prevents static analysis
  Side-effectful imports unless declared in package.json:
{
  "sideEffects": false
}

6️⃣ Interview Tips:
❓ Q: What is the difference between bundling and tree shaking?
✅ A: Bundling combines files; tree shaking removes unused code.

❓ Q: Why do we prefer ESM over CommonJS for tree shaking?
✅ A: ESM enables static analysis — critical for tree shaking to work.

❓ Q: Can tree shaking remove side-effect code?
✅ A: ⚠️ No — only unused pure functions/constants are removed.

7️⃣ Bonus — Webpack Config Snippet:
*/
// webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,      // Enables tree shaking
    sideEffects: false,     // Required to eliminate all dead code
  },
};
