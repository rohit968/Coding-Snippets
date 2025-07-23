/* 
🧠 What is it?
The JavaScript runtime is single-threaded and follows a concurrency model based on an event loop.
This file explains how JS handles execution using the Call Stack, Event Loop, Microtasks, and Macrotasks.

❓ Why is it important?
• Helps in debugging async behavior
• Explains unexpected order of execution
• Core concept in React, Node.js, and interviews!

🔁 Components:

1️⃣ Call Stack:
- A stack structure where function calls are placed and removed in LIFO order.
*/

function foo() {
  console.log("foo");
}
function bar() {
  foo();
  console.log("bar");
}
bar();

/*
🧪 Output:
foo
bar
*/

/*
2️⃣ Event Loop:
- Keeps checking if the call stack is empty and then pushes callbacks from task queues.
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

console.log("End");

/*
🧪 Output:
Start
End
Promise microtask
Timeout callback

🧩 Why? Because:
• Microtasks (Promise callbacks) are prioritized before macrotasks (setTimeout)
*/

/*
3️⃣ Microtasks Queue:
- Promise callbacks, MutationObserver, queueMicrotask()
- Executed immediately after the current stack clears, before any macrotask

4️⃣ Macrotasks Queue:
- setTimeout, setInterval, setImmediate (Node.js), I/O, UI rendering
*/

/*
📌 Real-World Example:
Imagine clicking a button to load data:
• setTimeout(() => showLoading(), 0) — will be deferred
• fetch().then(renderData) — runs in microtask and finishes before timeout

🔍 Interview Tip:
Q: Why does a Promise resolve before a setTimeout even with 0ms delay?
A: Microtasks have higher priority over macrotasks.
*/

/*
🎯 Summary:
Call Stack ➡️ Microtasks ➡️ Macrotasks ➡️ Repeat

🧪 Try this challenge:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

🧪 Output:
A
D
C
B
*/

