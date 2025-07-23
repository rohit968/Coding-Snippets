/* 
==============================================
🧭 Module Resolution & Path Aliasing in JS/Node
==============================================

1️⃣ What is Module Resolution?
-------------------------------
📦 Module Resolution is **how JS/Node locates files** you import.

🔍 Node follows this order:
1. **Built-in modules** (`fs`, `http`, etc.)
2. **Relative paths** (`./utils.js`, `../config.js`)
3. **Absolute paths** (e.g., `/usr/...`)
4. **Node modules** from `node_modules/`

➡️ It resolves extensions automatically: `.js`, `.json`, `.node`
➡️ It climbs directories to find the nearest `node_modules`

🔁 In ESM, explicit extensions are usually required (e.g., `import './utils.js'`)

---

2️⃣ Why is this important?
---------------------------
✅ Helps debug import errors  
✅ Affects project portability  
✅ Critical when structuring large codebases  
✅ Useful for customizing resolution in bundlers or frameworks

---

3️⃣ What is Path Aliasing?
---------------------------
🔖 Instead of ugly relative paths like:

*/

import helper from '../../../utils/helper.js';

//✨ Use aliases:
import helper from '@utils/helper.js';

/*
This is supported in:
✅ TypeScript
✅ Webpack
✅ Vite
✅ Babel
✅ ts-node + Node (with config)

4️⃣ Real World Example — Vite/TypeScript:
*/

//👉 vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
});

/*
//👉 tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
      "paths": {
      "@utils/*": ["src/utils/*"],
        "@components/*": ["src/components/*"]
    }
  }
}
*/

//Then: 
import formatDate from '@utils/formatDate.js';

/*
5️⃣ Real World Example — Node.js with ES Modules:
Node doesn’t support aliasing directly.
Use --import with ts-node, tsconfig-paths, or bundlers.

⚙️ Install:
npm i -D tsconfig-paths
Run with:
ts-node --project tsconfig.json --require tsconfig-paths/register src/index.ts

6️⃣ Interview Tips:
❓ Q: How does Node resolve an import without a relative path?
✅ A: It checks node_modules, built-ins, and climbs up the directory tree.

❓ Q: Why use path aliasing?
✅ A: Cleaner imports, easier refactoring, avoids deep ../ paths.

❓ Q: Is path aliasing available in vanilla Node.js?
✅ A: ❌ Not directly — use TypeScript or bundlers.

🔥 Bonus Tip:
🧪 You can inspect module resolution with:
node --trace-resolve app.js
Or use:
console.log(require.resolve('your-module'));
*/