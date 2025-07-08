// ======================================================
// 📌 Topic: Function Binding — `.bind()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.bind()` method creates a **new function** with:
 * - A specific `this` value  
 * - Optionally preset initial arguments  
 * 
 * ✅ Why is it useful?
 * - Ensures `this` points to the intended object  
 * - Useful when passing methods as callbacks  
 * - Helps control context in event handlers, timers, etc.  
 * 
 * ✅ How to use it?
 * Syntax:  
 * `const boundFn = originalFn.bind(context, arg1, arg2, ...)`  
 * 
 * ✅ Real-life examples:
 * - Event handlers with correct `this`  
 * - Passing object methods as callbacks  
 * - Function reuse with pre-filled arguments  
 * - Solving common `this` confusion in JS  
 */

// 🧠 Example: Binding `this` to an Object
const bakery = {
  name: "Levain",
  announce: function () {
    console.log(`Welcome to ${this.name}!`);
  }
};
const greet = bakery.announce;
greet();  // Output: Welcome to undefined! (loses `this`)
const boundGreet = bakery.announce.bind(bakery);
boundGreet();  // Output: Welcome to Levain!

// ✅ Binding with setTimeout
const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  }
};
setTimeout(counter.increment, 1000);  // `this` lost, NaN or error  
setTimeout(counter.increment.bind(counter), 2000);  // Output: 1

// ============================================================= //

// ✅ Real-world Example: Partial Application (Pre-filling Args)
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5));
// Output: 10

// ✅ Real-world Example: Event Listener with `.bind()`
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);
const app = {
  message: "Hello from PureCravve!",
  show: function () {
    console.log(this.message);
  }
};
button.addEventListener("click", app.show.bind(app));

// ✅ Real-world Example: Pre-filling Arguments for Reusable Functions
function welcome(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}
const sayHelloToRohit = welcome.bind(null, "Hello", "Rohit");
sayHelloToRohit();
// Output: Hello, Rohit!


// 🗣️ Layman Interview Explanation — .bind()
//"Imagine you have a coffee shop menu, but the name 'PureCravve' keeps getting lost when you print receipts. .bind() sticks the name to your receipt machine, so no matter where you print, the shop name shows up correctly."