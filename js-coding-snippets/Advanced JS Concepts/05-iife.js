/*
🔄 IIFE — Immediately Invoked Function Expression

An IIFE is a function that runs **immediately** after it’s defined.

🧠 Syntax:
(
  function() {
    // logic here
  }
)();

Or using arrow function:
(() => {
  // logic here
})();
*/

// ✅ Classic Example
(function () {
  console.log("IIFE executed immediately!"); // IIFE executed immediately!
})();

// ✅ With arrow function
(() => {
  console.log("Arrow IIFE works too!"); // Arrow IIFE works too!
})();

/*
🧽 Why use IIFE?

1. Avoid polluting global scope
2. Create private variables (closure)
3. Initialize code immediately
*/

// 🎯 Use Case: Creating a private scope
const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment(); // Count: 1
counter.increment(); // Count: 2
console.log(counter.getCount()); // 2

// 👇 `count` is private. It’s not accessible directly.
// console.log(counter.count); // undefined ❌

// 🎯 Use Case: Run setup code once
(function setup() {
  const token = "abc123";
  console.log("Setup complete with token:", token);
})();
// console.log(token); // ❌ ReferenceError: token is not defined

/*
🧠 Interview Insights:

Q: Why use IIFE over regular functions?
A: It immediately executes and avoids polluting the global namespace.

Q: Is IIFE still relevant in modern JS?
A: Yes, although modules have replaced many IIFE use cases, it's still handy for quick privacy and setup tasks.

Q: Can IIFE be async?
A: Yes!
*/

// ⚡ Async IIFE (commonly used with await in top-level)
(async () => {
  const data = await Promise.resolve("Async IIFE Result");
  console.log(data); // Async IIFE Result
})();
