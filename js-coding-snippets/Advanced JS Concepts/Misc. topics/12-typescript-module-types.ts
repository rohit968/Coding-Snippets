/* 
============================================
🧩 TypeScript Module Types & Syntax Explained
============================================

1️⃣ What is a Module in TypeScript?
-------------------------------------
✅ Any file that uses `import` or `export` is considered a **module**.
✅ Modules encapsulate code and types — helping with type safety and code reusability.

---

2️⃣ TypeScript Module Syntax (ESM style):
-------------------------------------------

🔹 Exporting:
```ts
// mathUtils.ts
export const PI = 3.14;
export function square(x: number): number {
  return x * x;
}
export type Shape = "circle" | "square";

🔹 Importing:
// app.ts
import { PI, square, Shape } from './mathUtils';

3️⃣ Module Types in tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext", // or "CommonJS", "ES6", "NodeNext", etc.
    "target": "ES2020",
    "moduleResolution": "node"
  }
}

📌 Common module values:
  CommonJS – for Node.js (older)
  ESNext / ES6 – for modern ESM
  NodeNext – hybrid support (Node ESM with .ts / .cts / .mts)

4️⃣ Type-Only Imports & Exports
✅ Helps reduce JS output size and clarify intent
// Exporting only types
export type User = { id: number; name: string };

// Importing only types
import type { User } from './types';

🔎 This import will NOT appear in compiled JS.

5️⃣ Importing JSON, CSS Modules, Images
To enable non-code imports in TypeScript, use declarations:
// declarations.d.ts
declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const src: string;
  export default src;
}

6️⃣ Mixing CJS and ESM in Node.js
  .ts → ESM 
  .cts → CommonJS
  .mts → ESM with better type-aware resolution

📦 Example:
// somefile.mts
import express from 'express';

// legacyfile.cts
const express = require('express');

7️⃣ Real-World Usage — Re-export types
// types.ts
export type User = { id: number; name: string };

// index.ts
export * from './types'; // ✔ Re-exporting types cleanly


8️⃣ Interview Tips
❓ Q: What's the difference between import vs import type?
✅ A: import type is erased at runtime — only used for type-checking.

❓ Q: Can you mix ESM and CommonJS in TypeScript?
✅ A: Yes, but it's cleaner to stick with one (use NodeNext if you must mix).

❓ Q: What's the benefit of .cts, .mts files?
✅ A: Helps the TS compiler know how to treat module systems explicitly.

🎯 Summary
✅ TypeScript modules follow ESM/CJS rules
✅ Use import type for cleaner builds
✅ Configure tsconfig.json properly for desired module behavior
✅ Use .cts, .mts extensions when mixing systems in Node

*/