// 📌 What is the Event Loop?
// The event loop is a mechanism that allows JavaScript to handle asynchronous operations 
// despite being single-threaded. It works with the call stack, Web APIs, task queues, and the microtask queue.

// ❓ Why is it needed?
// JavaScript runs in a single-threaded environment.
// The event loop ensures non-blocking behavior, enabling smooth UI and async tasks 
// like fetching data, timers, and user events.

// 🧠 How it works?
// 1. JS runs code line by line (synchronous) using the Call Stack.
// 2. Asynchronous operations (setTimeout, fetch, etc.) are delegated to Web APIs.
// 3. Once complete, callbacks are queued (task queue or microtask queue).
// 4. Event Loop checks if the Call Stack is empty and pushes queued tasks to it.

// 🧵 Flow: Call Stack ↔ Web APIs ↔ Callback Queue ↔ Microtask Queue ↔ Event Loop

// 🕳 Real-World Example:
console.log("1");

setTimeout(() => {
  console.log("2 (from setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 (from Promise)");
});

console.log("4");

// 🧾 Output Order:
// 1
// 4
// 3 (Promise microtask)
// 2 (setTimeout macrotask)

// ✅ Interview Tip:
// Microtasks (Promises, MutationObserver) are executed *before* macrotasks (setTimeout, setInterval).
// So even a setTimeout with 0ms gets delayed if microtasks are queued!

// 🔬 Deep Example to Visualize Prioritization:
console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve("Promise 2");
}).then(console.log);

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

// 🧾 Expected Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

// 🧠 Rule of Thumb:
// 1. Call Stack is king — it must be empty to handle anything async.
// 2. Microtasks are always prioritized after the current task before any macrotask.
// 3. Event loop = forever loop checking stack & queues.


// 📊 Visual: Event Loop Execution Model (ASCII Diagram)
/*
+----------------------+
|  Call Stack          |
|----------------------|     ← Executes main thread JS code
|  Web APIs (Timers)   |
|----------------------|     ← Handles async (setTimeout, fetch)
|  Microtask Queue     |
|----------------------|     ← Promises & mutation observers
|  Callback Queue      |
|----------------------|     ← setTimeout, setInterval
+----------------------+

            ↓
        [ Event Loop ]
            ↓
   While stack is empty:
     - Drain all microtasks
     - Then run one macrotask (from callback queue)
*/

// 🧠 Final Thought:
// Without the event loop, JS would freeze during any async task (e.g., network call), making it unusable for modern apps.
