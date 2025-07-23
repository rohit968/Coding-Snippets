/* 
⚙️ V8 Engine & Memory Management in JavaScript

🔧 What is V8?
• V8 is Google’s open-source JavaScript engine (used in Chrome and Node.js).
• It compiles JavaScript to native machine code using Just-In-Time (JIT) compilation.

🧠 Core Concepts of V8:
1. Parser: Converts JS code to an Abstract Syntax Tree (AST)
2. Interpreter: Quickly runs the code (Ignition)
3. Compiler: Optimizes frequently used code (TurboFan JIT compiler)
4. Garbage Collector: Reclaims unused memory
*/

/* 
🧼 Memory Management in JS

JavaScript uses automatic garbage collection to manage memory.
Memory lifecycle:
1️⃣ Allocate
2️⃣ Use
3️⃣ Release (GC step)
*/

let obj = { name: "Rohit" }; // Allocation
obj = null; // Ready for GC (no references)

/*
📦 Memory Types:
- Stack: For primitive values (number, boolean, etc.)
- Heap: For reference types (objects, arrays, functions)
*/

/*
♻️ Garbage Collection (GC)

V8 uses multiple strategies, mainly:
• Mark-and-Sweep: Marks reachable objects, removes others
• Generational GC: Separates objects into new and old generations
  - New: Short-lived, collected frequently
  - Old: Long-lived, collected less frequently

🚨 Common Memory Leaks:
1. Global variables (`var a = 10`)
2. Forgotten timers or callbacks
3. Detached DOM nodes
4. Closures that outlive usage
*/

function createLeak() {
  let bigArray = new Array(1000000).fill("data");
  return () => console.log(bigArray.length); // closure holds the reference
}
const leak = createLeak(); // `bigArray` can't be garbage-collected

/*
🧪 Detect Memory Issues:
- Chrome DevTools → Memory tab → Snapshots, Allocation instrumentation

🧰 Pro Tips:
- Avoid global vars
- Use `let/const`, not `var`
- Clear timers/events on unmount
- Use weak references if needed (WeakMap, WeakSet)
*/

