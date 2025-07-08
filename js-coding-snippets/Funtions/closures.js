// ======================================================
// 📌 Topic: Closures in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **closure** occurs when a function "remembers" variables from its outer (enclosing) scope, even after that outer function has finished execution.
 * 
 * ✅ Why is it useful?
 * - Allows data privacy (encapsulation)
 * - Enables function factories
 * - Preserves state in asynchronous or delayed executions
 * - Foundation for many JavaScript patterns (like currying, memoization)
 * 
 * ✅ How to use it?
 * 1. Declare a function inside another function
 * 2. The inner function can access variables from the outer function
 * 3. Even if the outer function is done, the inner function "remembers" the outer variables
 * 
 * ✅ Real-life examples:
 * - Creating private variables
 * - Building counters or trackers
 * - Maintaining state in event handlers
 * - Functions that configure themselves with preset values
 */

// 🧠 Basic Closure Example
function outer() {
  const message = "Hello from Outer!";

  function inner() {
    console.log(message); // inner "remembers" message
  }

  return inner;
}
const greet = outer();
greet();
// Output: Hello from Outer!

// ✅ Closure for Private Variables (Encapsulation)
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Counter: ${count}`);
  };
}
const counter = createCounter();
counter(); // Counter: 1
counter(); // Counter: 2

// ✅ Closure for Function Factories
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// ✅ Closure for Event Handlers
function setupClickHandler() {
  let clickCount = 0;
  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}
setupClickHandler();


// ============================================================ //

// ✅ Real-world Example : Secure Cart Item Tracker
function cartManager() {
  let items = 0;
  return {
    addItem() {
      items++;
      console.log(`🛒 Items in cart: ${items}`);
    },
    getItemCount() {
      return items;
    }
  };
}
const myCart = cartManager();
myCart.addItem();
myCart.addItem();
console.log(`Total items: ${myCart.getItemCount()}`);
// Output: Total items: 2

// ✅ Real-world Example : Event Handler with Preserved State
function setupButtonClickTracker(buttonId) {
  let clickCount = 0;

  return function () {
    clickCount++;
    console.log(`Button ${buttonId} clicked ${clickCount} times`);
  };
}
const trackBtnClick = setupButtonClickTracker("loginBtn");
// Example for event listener:
// document.getElementById("loginBtn").addEventListener("click", trackBtnClick);

// ✅ Real-world Example : Custom Greeting Generator
function greetingFactory(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const sayHi = greetingFactory("Hi");
sayHi("Rohit");
// Output: Hi, Rohit!
const sayWelcome = greetingFactory("Welcome");
sayWelcome("PureCravve");
// Output: Welcome, PureCravve!

// ✅ Real-world Example : Emoji Tracker with Closures
function emojiTracker(emoji) {
  let count = 0;
  return function () {
    count++;
    console.log(`You've used ${emoji} ${count} times!`);
  };
}
const rocketEmoji = emojiTracker("🚀");
rocketEmoji();
rocketEmoji(); 
