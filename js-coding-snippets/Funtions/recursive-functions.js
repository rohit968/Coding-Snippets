// ======================================================
// 📌 Topic: Recursive Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Recursive Function** is a function that calls itself to solve a smaller version of the original problem, repeating until it reaches a base condition to stop.
 * 
 * ✅ Why is it useful?
 * - Solves problems with repetitive, nested, or breaking-down patterns  
 * - Common for tasks like factorials, traversing trees, reversing arrays, etc.  
 * - Simplifies code for complex, repetitive logic  
 * 
 * ✅ How to use it?
 * 1. Function should call itself with a smaller input  
 * 2. Must include a **base condition** to avoid infinite loops  
 * 
 * ✅ Real-life examples:
 * - Calculating factorials  
 * - Summing numbers  
 * - Reversing strings or arrays  
 * - Searching nested structures (trees, folders, menus)  
 */

// 🧠 Basic Recursive Example: Countdown
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
countdown(5);
// Output: 5, 4, 3, 2, 1, Done!

// 🧠 Factorial Calculation
function factorial(n) {
  if (n === 0) return 1; // Base condition
  return n * factorial(n - 1);
}
console.log(factorial(5));
// Output: 120

// 🧠 Summing Array Elements
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4]));
// Output: 10

// 🧠 Reversing a String
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("PureCravve"));
// Output: evvarCeruP

// ========================================================== //

// ✅ Real-world Example: Factorial Calculator
function factorial(n) {
  if (n === 0) return 1; // Base condition
  return n * factorial(n - 1);
}
console.log(factorial(5));
// Output: 120

// ✅ Real-world Example: Sum of Array Elements
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4]));
// Output: 10

// ✅ Real-world Example: Reverse a String
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("PureCravve"));
// Output: evvarCeruP

// ✅ Real-world Example: Searching Nested Menu
const menu = {
  name: "Home",
  children: [
    { name: "About" },
    {
      name: "Services",
      children: [
        { name: "Baking" },
        { name: "Coding" }
      ]
    }
  ]
};
function findMenuItem(menu, target) {
  if (menu.name === target) return true;
  if (menu.children) {
    return menu.children.some(child => findMenuItem(child, target));
  }
  return false;
}
console.log(findMenuItem(menu, "Coding"));
// Output: true


//🗣️ Layman Interview Explanation — Recursive Functions
//"Imagine standing in front of a line of mirrors — one reflects the other again and again, making it look endless. Recursive functions are like that — the function keeps calling itself, shrinking the problem each time, until it’s so small that it stops."