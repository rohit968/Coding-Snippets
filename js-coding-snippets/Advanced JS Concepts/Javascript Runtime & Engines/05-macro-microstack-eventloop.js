/* 
🧠 JavaScript Concurrency: Call Stack, Event Loop, Microtasks & Macrotasks
----------------------------------------------------------------------------

JavaScript is single-threaded BUT asynchronous — thanks to the event loop.

Core Concepts:
• Call Stack → where function calls are executed
• Web APIs / Node APIs → async tasks run outside JS engine
• Callback Queue (macrotasks)
• Microtask Queue (promises, mutation observers, etc.)
• Event Loop → keeps JS responsive
*/

// -------------------------------------------------------------------
// 🧱 1. CALL STACK → Follows LIFO (Last In, First Out)
// -------------------------------------------------------------------
function greet() {
  console.log("Hello");
}

function sayHi() {
  greet();
}

sayHi();  // Execution order: sayHi() → greet() → log()

/*
Call Stack:
[Top] console.log("Hello")
       greet()
       sayHi()
[Bottom]
*/

// -------------------------------------------------------------------
// ⚙️ 2. MACROTASK QUEUE (aka Callback Queue)
// -------------------------------------------------------------------
// Includes: setTimeout, setInterval, I/O callbacks, DOM events

console.log("A");

setTimeout(() => {
  console.log("B - Timeout");  // Goes to macrotask queue
}, 0);

console.log("C");

// Output: A → C → B (setTimeout doesn't execute immediately)

// -------------------------------------------------------------------
// 🔬 3. MICROTASK QUEUE (aka Job Queue)
// -------------------------------------------------------------------
// Includes: Promises, MutationObserver, queueMicrotask

console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

queueMicrotask(() => {
  console.log("Microtask 2");
});

setTimeout(() => {
  console.log("Macrotask (Timeout)");
}, 0);

console.log("End");

// Output:
// Start
// End
// Microtask 1
// Microtask 2
// Macrotask (Timeout)

// -------------------------------------------------------------------
// 🔄 4. EVENT LOOP — the real magic 🪄
// -------------------------------------------------------------------

/*
🌀 Steps of the Event Loop:
1. Execute all code in call stack (sync)
2. After call stack is empty:
    → Flush all microtasks (in order)
3. Then take 1 macrotask from the queue and execute
4. Repeat from step 1
*/

// 🔍 Example: Macrotask vs Microtask Priority

console.log("Script start");

setTimeout(() => {
  console.log("Macrotask - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask - promise 1");
}).then(() => {
  console.log("Microtask - promise 2");
});

console.log("Script end");

/*
Output:
Script start
Script end
Microtask - promise 1
Microtask - promise 2
Macrotask - setTimeout
*/

// -------------------------------------------------------------------
// 🎯 5. Visual Summary
// -------------------------------------------------------------------

/*
            ┌───────────────────────┐
            │      Call Stack       │ ← Executes sync JS
            └─────────▲─────────────┘
                      │
            ┌─────────┴─────────────┐
            │     Web/Node APIs     │ ← setTimeout, fetch, etc.
            └─────────▼─────────────┘
            ┌───────────────────────┐
            │    Callback Queue     │ ← Macrotasks
            └───────────────────────┘
            ┌───────────────────────┐
            │   Microtask Queue     │ ← Promises, queueMicrotask
            └───────────────────────┘

                      ⬆
               Event Loop runs here

✅ Microtasks are always flushed before macrotasks.
*/

// -------------------------------------------------------------------
// 🧪 BONUS: Star Interview Trick Question
// -------------------------------------------------------------------

console.log("1");

setTimeout(() => {
  console.log("2 (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 (Promise)");
});

console.log("4");

/*
Expected Output:
1
4
3 (Promise)      ← microtask
2 (setTimeout)   ← macrotask
*/

// -------------------------------------------------------------------
// 🔥 INTERVIEW INSIGHTS
// -------------------------------------------------------------------

/*
Q: What is the event loop?
→ A mechanism that ensures JS continues to run non-blocking by picking tasks from queues.

Q: Microtasks vs Macrotasks?
→ Microtasks (Promise, queueMicrotask) always run before any macrotask like setTimeout.

Q: Is setTimeout(fn, 0) really "immediate"?
→ No — it waits until the call stack is clear and all microtasks are processed.

Q: What’s the priority of promise.then?
→ Highest. It goes to the microtask queue, flushed right after sync code.

Q: What causes UI freezing?
→ Long-running synchronous code blocks the call stack (e.g., while loops).


┌──────────────────────────────┐
│        JS Engine             │
│  (Call Stack + Heap Memory)  │
└─────────────▲────────────────┘
              │
              │ executes sync code (functions, variables, etc.)
              │
┌─────────────┴──────────────┐
│        Web APIs            │
│  (Browser or Node APIs)    │
│ setTimeout, DOM events etc.│
└─────────────▼──────────────┘
              │
              │ sends callbacks to queues after delay/event
              ▼
┌──────────────────────────────┐       ┌─────────────────────────────┐
│     🟦 Macrotask Queue        │       │    🟨 Microtask Queue         │
│  setTimeout, setInterval,    │       │  Promises, queueMicrotask,  │
│  fetch callbacks, events     │       │  MutationObserver           │
└─────────────▲────────────────┘       └────────────▲────────────────┘
              │                                       │
              │              Event Loop               │
              └───────────────────────────────────────┘
                             |
                             ▼
                 ┌────────────────────┐
                 │   Call Stack Empty?│
                 └────────────────────┘
                             ↓ Yes
         ┌────────────────────────────────────────────┐
         │ Flush ALL Microtasks (one by one in order) │
         └────────────────────────────────────────────┘
                             ↓
       ┌──────────────────────────────────────────────┐
       │ Take 1 Macrotask → Move it to Call Stack     │
       └──────────────────────────────────────────────┘
                             ↓
       (repeat cycle again, keeping JS non-blocking)


🧠 Key Rules to Remember:
  ✅ Microtasks always run before the next macrotask.
  🕒 Even setTimeout(..., 0) is delayed until the stack is empty and microtasks are flushed.
  🔁 The event loop runs infinitely, checking queues and stack to keep the browser responsive.

*/