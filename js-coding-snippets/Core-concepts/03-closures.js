// ======================================================
// 📌 Topic: Closures in JavaScript — Functions with Persistent Lexical Scope
// core-concepts/03-closures.js
// ======================================================

/**
 * ✅ What is it?
 * A closure is a function that retains access to its **lexical scope**
 * even when executed outside of its original context.
 *
 * ✅ Why is it useful?
 * - Creates private state and encapsulation
 * - Enables data hiding and module patterns
 * - Powerful in callback, event handling, and factory functions
 *
 * ✅ How to use it?
 * Define a function inside another, and return or pass the inner function.
 */

// 🔹 Basic Closure Example
titleGenerator:
function createTitleGenerator(prefix) {
  return function (title) {
    console.log(`${prefix} ${title}`);
  };
}

const blogTitle = createTitleGenerator("Blog:");
bogTitle = blogTitle; // retains prefix "Blog:"
blogTitle("Understanding Closures"); // "Blog: Understanding Closures"

// 🔹 Private Counter Example
function makeCounter() {
  let count = 0; // private
  return function () {
    count++;
    console.log(`Current count: ${count}`);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
// count is not accessible directly
// console.log(count); // ReferenceError

// 🔹 Real-life Example: Module Pattern
const userModule = (function () {
  let user = null;
  return {
    login(name) {
      user = name;
      console.log(`${user} logged in`);
    },
    logout() {
      console.log(`${user} logged out`);
      user = null;
    }
  };
})();

userModule.login("Rohit"); // "Rohit logged in"
userModule.logout();        // "Rohit logged out"

// 🔹 Real-life Example: Event Handler with State
function attachClickCounter(buttonId) {
  let clicks = 0;
  const btn = document.getElementById(buttonId);
  btn.addEventListener('click', function () {
    clicks++;
    console.log(`Button clicked ${clicks} times`);
  });
}
// attachClickCounter('submitBtn');

// ✅ Interview Tip:
// "A closure combines a function with the lexical environment in which it was defined,
// allowing the function to access those variables even if the outer function has returned."