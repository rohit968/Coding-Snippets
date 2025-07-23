/* 
=====================================================
♻️ Module Caching & Singleton Behavior in JavaScript
=====================================================

1️⃣ What is Module Caching?
-----------------------------
In **ESM** and **CommonJS**, modules are **evaluated only once**.  
After the first import, all future imports **reuse the cached result** (not re-executed).

This behavior creates **singletons** by default.

🧠 Think of modules as "singletons with memory".

---

2️⃣ Why is this useful?
------------------------
✅ Avoids repeated expensive operations (e.g. DB connections)  
✅ Allows shared state across multiple files  
✅ Improves performance and consistency  
✅ Useful for global configurations or service instances

---

3️⃣ CommonJS Example:
-----------------------

```js
// logger.js
let count = 0;
function log(msg) {
  count++;
  console.log(`[${count}] ${msg}`);
}
module.exports = log;

// fileA.js
const log = require('./logger');
log("A1"); // [1] A1
log("A2"); // [2] A2

// fileB.js
const log = require('./logger');
log("B1"); // [3] B1 ✅ Continues from fileA

🧠 logger.js is only evaluated once. Both fileA and fileB use the same instance.

4️⃣ ES Modules Example:
*/

// counter.js
let counter = 0;
export function increment() {
  counter++;
  console.log("Counter:", counter);
}

// file1.js
import { increment } from './counter.js';
increment(); // Counter: 1

// file2.js
import { increment } from './counter.js';
increment(); // Counter: 2 ✅ Shared state

//5️⃣ Real-World Example: Database Singleton
// db.js
let connection;
export function connectToDB() {
  if (!connection) {
    connection = {}; // simulate DB connection
    console.log("New DB connection created");
  }
  return connection;
}

// service.js
import { connectToDB } from './db.js';
connectToDB(); // New DB connection created
connectToDB(); // No new log — uses cached

/*
6️⃣ Interview Tips:
❓ Q: What does "module caching" mean in Node.js?
✅ A: Once a module is loaded, it's cached. Re-importing it doesn't re-run its code.

❓ Q: How does JavaScript achieve Singleton pattern natively?
✅ A: Through module caching — modules are evaluated once and reused.

❓ Q: Can you force reload a cached module?
✅ A: In CommonJS: delete require.cache[require.resolve('./module')]
In ESM: Not directly, but tools like dynamic imports can help.

7️⃣ Caveats:
⚠️ Be careful when using mutable shared state in modules — can lead to bugs in larger apps
⚠️ ESM has a stricter loading model, so circular dependencies can behave unexpectedly

🎯 Summary:
✅ Modules are singletons by default due to caching
✅ Shared state across imports
✅ Ideal for configs, services, logging, and DBs

*/