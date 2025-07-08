// ======================================================
// 📌 Topic: Named vs Anonymous Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * - **Named Function**: Function with a declared name.
 * - **Anonymous Function**: Function without a name, often assigned to a variable or passed as an argument.
 * 
 * ✅ Why is it useful?
 * - Named Functions:
 *   ✔️ Improve debugging (clear stack traces)
 *   ✔️ Useful for recursion
 * 
 * - Anonymous Functions:
 *   ✔️ Short, inline functionality
 *   ✔️ Common for callbacks, event handlers
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * Named:
 * function greet() { ... }
 * 
 * Anonymous:
 * const greet = function () { ... }
 * 
 * ✅ Real-life example:
 * - Event listeners
 * - Callbacks
 * - Reusable functions with clear names
 */

// 🧠 Basic Example — Named Function
function sayHello() {
  console.log("Hello, World!");
}
sayHello();
// Output: "Hello, World!"

// ✅ Anonymous Function Assigned to Variable
const greet = function () {
  console.log("Hi there!");
};
greet();
// Output: "Hi there!"

// ✅ Named Function Expression
const sum = function addNumbers(a, b) {
  return a + b;
};
console.log(sum(5, 7));
// Output: 12

// ✅ Anonymous Function as Callback
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);

// ✅ Named Function as Callback (Recommended for Clarity)
function showMessage() {
  console.log("Clear callback with a name");
}
setTimeout(showMessage, 1000);

// ✅ Real-world Example: Array `.map()` with Functions
const numbers = [1, 2, 3];
// Anonymous Function
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log(doubled);
// Output: [2, 4, 6]

// Named Function (Better for Debugging)
function double(n) {
  return n * 2;
}
console.log(numbers.map(double));
// Output: [2, 4, 6] 

// ✅ Emoji/Unicode Example
const showEmoji = function () {
  console.log("🚀");
};
showEmoji();
// Output: 🚀

// ======================================================= //

// ✅ Real-world Example: Function in Object
const new_calculator = {
  add: function (x, y) {
    return x + y;
  }
};
console.log(new_calculator.add(5, 10));
// Output: 15

// ✅ Real-world Example: Function as Callback
function processArray(arr, callback) {
  const result = arr.map(callback);
  console.log("Processed Array:", result);
}
processArray([1, 2, 3], function (item) {
  return item * 2;
});
// Output: "Processed Array: [2, 4, 6]"

// ✅ Real-world Example: Event Listener with Named Function
function handleClick() {
  console.log("Button clicked!");
}
const button = document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", handleClick);
document.body.appendChild(button);
// Output: "Button clicked!" (when the button is clicked)


//🗣️ Layman Interview Explanation — Anonymous Functions
//"Think of anonymous functions like mystery guests — they show up, do their job quickly, and leave without introducing themselves. You use them when you don’t need to reuse the function elsewhere."