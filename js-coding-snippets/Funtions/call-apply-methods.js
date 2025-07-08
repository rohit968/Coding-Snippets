// ======================================================
// 📌 Topic: `.call()` and `.apply()` Methods in JavaScript
// ======================================================

/**
 * ✅ What are they?
 * `.call()` and `.apply()` allow you to:
 * - Immediately invoke a function  
 * - Explicitly set the `this` context  
 * - Pass arguments to the function  
 * 
 * ✅ Why are they useful?
 * - Borrow methods from other objects  
 * - Control `this` when invoking functions  
 * - Flexible function sharing between objects  
 * 
 * ✅ How to use them?
 * `.call(context, arg1, arg2, ...)`  
 * `.apply(context, [arg1, arg2, ...])` (arguments as array)  
 * 
 * ✅ Real-life examples:
 * - Sharing functions across objects  
 * - Method borrowing  
 * - Using built-in methods on array-like structures  
 */

// 🧠 `.call()` with Custom `this`
const bakery = {
  name: "PureCravve"
};
function announce() {
  console.log(`Welcome to ${this.name}`);
}
announce.call(bakery);
// Output: Welcome to PureCravve

// ✅ `.call()` with Arguments
function greet(greeting, emoji) {
  console.log(`${greeting}, ${this.name} ${emoji}`);
}
const user = { name: "Rohit" };
greet.call(user, "Hello", "👋");
// Output: Hello, Rohit 👋

// ✅ `.apply()` with Arguments Array
greet.apply(user, ["Hi", "🚀"]);
// Output: Hi, Rohit 🚀

// ✅ Real-world Example: Borrowing Array Methods
const arrayLike = { 0: "Cake", 1: "Cookie", length: 2 };
Array.prototype.forEach.call(arrayLike, function (item) {
  console.log(item);
});
// Output: Cake  
//         Cookie

// ✅ Real-world Example: Reusing Functions Across Objects
const baker = {
  name: "Rohit",
  bake: function (item) {
    console.log(`${this.name} is baking ${item}`);
  }
};
const assistant = { name: "PureCravve Assistant" };
baker.bake.call(assistant, "Cupcakes");
// Output: PureCravve Assistant is baking Cupcakes

// ✅ Real-world Example: Using `.apply()` with Math Functions
const numbers = [5, 10, 2, 8];
const max = Math.max.apply(null, numbers);
console.log(max);
// Output: 10



//🗣️ Layman Interview Explanation — .call() and .apply()
//"Imagine you can borrow your friend’s bakery sign for your pop-up shop but write your name on it. .call() and .apply() let you use someone else’s function, but with your own name and details showing up."