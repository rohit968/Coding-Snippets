/* 
🌐 JavaScript in the Browser vs Node.js

Even though both use JavaScript, the runtime environments differ greatly.
*/

// ✅ Common things in both:
// • JS syntax (ES6+), functions, closures, promises
// • V8 engine as the underlying JavaScript engine (Chrome and Node)

// -----------------------------
// 🌐 In the Browser
// -----------------------------

// 1. Global object → `window`
console.log(window);

// 2. DOM access
document.querySelector("h1").textContent = "Hello from browser";

// 3. Browser APIs (non-JS)
navigator.geolocation.getCurrentPosition(pos => {
  console.log("Location:", pos.coords.latitude, pos.coords.longitude);
});

// 4. Security sandbox
// - No direct access to file system
// - Limited access to hardware

// 5. Modules via `<script type="module">`
// - import/export available directly

// 6. Async via fetch, events, timers, etc.
fetch("https://api.example.com").then(res => res.json()).then(console.log);

// -----------------------------
// 🖥️ In Node.js
// -----------------------------

// 1. Global object → `global`
console.log(global);

// 2. No DOM or browser APIs
// document, window, fetch are NOT available (unless polyfilled)

// 3. Access to file system, OS, network
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello Node.js");

// 4. CommonJS by default (require/module.exports)
// ES Modules supported via `"type": "module"` in package.json

// 5. Native Node APIs
const os = require("os");
console.log("CPU Cores:", os.cpus().length);

// 6. Use case → server-side apps, scripts, tooling, backends

// -----------------------------
// ⚠️ Differences Summary
// -----------------------------

/*
| Feature              | Browser                | Node.js              |
|---------------------|------------------------|----------------------|
| Global Object        | window                 | global               |
| DOM & BOM            | ✅ Yes                 | ❌ No                |
| Filesystem           | ❌ No                 | ✅ Yes               |
| APIs                 | Web APIs               | Node core modules    |
| Module System        | ES Modules             | CommonJS (default)   |
| Use Case             | UI & frontend apps     | Backend/server tools |
*/

// 🔥 Interview Tip:
// "What’s the difference between JS in browser vs Node.js?"
// → Answer with environment, APIs, use cases, module systems

