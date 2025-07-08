// ======================================================
// 📌 Topic: Functions as First-Class Citizens in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * In JavaScript, **functions are first-class citizens**, meaning:
 * - They can be assigned to variables
 * - Passed as arguments to other functions
 * - Returned from functions
 * - Stored in arrays/objects
 * 
 * ✅ Why is it useful?
 * - Enables higher-order functions (e.g., `.map()`, `.filter()`)
 * - Allows callbacks, event handlers, functional programming
 * - Makes code more flexible and reusable
 * 
 * ✅ Real-life example:
 * - Customizable utilities
 * - Event handling in web apps
 * - Dynamic logic in APIs
 */

// 🧠 Example 1 — Assigning Functions to Variables
const greet = function () {
  console.log("Hello from PureCravve!");
};
greet();
// Output: "Hello from PureCravve!"

// ✅ Example 2 — Passing Functions as Arguments (Callback)
function executeCallback(callback) {
  callback();
}
executeCallback(() => console.log("Callback executed!"));
// Output: "Callback executed!"

// ✅ Example 3 — Returning Functions
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));
// Output: 10

// ✅ Example 4 — Storing Functions in Arrays
const tasks = [
  () => console.log("Task 1 done"),
  () => console.log("Task 2 done")
];
tasks.forEach(fn => fn());
// Output: Task 1 done  
//         Task 2 done

// ✅ Example 5 — Storing Functions in Objects
const actions = {
  sayHi: () => console.log("Hi there!"),
  sayBye: () => console.log("Goodbye!")
};
actions.sayHi();
// Output: "Hi there!"

// ✅ Emoji/Unicode Example with Functions
const showEmoji = () => console.log("🚀");
const emojiArray = [showEmoji, () => console.log("❤️")];
emojiArray.forEach(fn => fn());



//🗣️ Layman Interview Explanation — First-Class Functions
//"Imagine functions are like pizza — you can deliver them, store them in a fridge, pass them to friends, or get one back after ordering. In JavaScript, functions aren't locked away — they're flexible, just like other values, making your code dynamic."