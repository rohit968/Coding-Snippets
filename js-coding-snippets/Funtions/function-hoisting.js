// ======================================================
// 📌 Topic: Function Hoisting in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * **Hoisting** is JavaScript's behavior of moving function and variable declarations to the top of their scope during the compilation phase.
 * 
 * For functions:
 * - **Function Declarations** are fully hoisted — can be called before they're written
 * - **Function Expressions** (assigned to variables) are not hoisted in the same way
 * 
 * ✅ Why is it useful?
 * - Understand how your code executes step-by-step
 * - Prevent bugs caused by calling functions before definition
 * - Clarifies behavior difference between declarations and expressions
 * 
 * ✅ How to use it?
 * ✔️ Function declarations can be invoked before their definition  
 * ✔️ Function expressions behave like variables — only accessible after assignment  
 * 
 * ✅ Real-life examples:
 * - Safe early calls in simple scripts  
 * - Understanding order in complex files  
 * - Clean, readable code structure
 */

// 🧠 Function Declaration is Hoisted
sayHello(); // Works due to hoisting
function sayHello() {
  console.log("👋 Hello from PureCravve!");
}

// ✅ Function Expression is NOT Hoisted
// greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization
const greet = function () {
  console.log("👋 Greeting with Function Expression!");
};
greet(); // Works here after declaration

// ✅ Arrow Function Hoisting — Same as Function Expressions
// shout(); // ❌ ReferenceError
const shout = () => {
  console.log("🔊 Shouting with Arrow Function!");
};
shout();

// ✅ Real-world Example: Avoid Confusion
// Mixing hoisted and non-hoisted functions can cause hard-to-debug issues

// ✅ Emoji/Unicode Consideration with Hoisting
// Using functions that print emojis before or after declaration

wave(); // ✅ Works due to hoisting
function wave() {
  console.log("🌊 Wave emoji printed before function written");
}

// ✅ Variable Hoisting (var vs. let/const)
console.log(myVar); // Output: undefined (var is hoisted and initialized with undefined)
var myVar = "I am hoisted";
console.log(myVar);
// console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
// let myLet = "I am not hoisted in the same way";

// ✅ Hoisting in Nested Scopes
function outerFunction() {
  console.log(innerVar); // Output: undefined (innerVar is hoisted within outerFunction's scope)
  var innerVar = "Inside outer function";
  innerFunc(); // Works due to hoisting within this scope
  function innerFunc() {
    console.log("Hello from inner function!");
  }
}
outerFunction();

// ✅ Named Function Expression Hoisting
// myFunctionExpression(); // ❌ ReferenceError: myFunctionExpression is not defined (or cannot access before initialization)
var myFunctionExpression = function someName() {
  console.log("This is a named function expression.");
  // console.log(someName); // 'someName' is only available within the function's scope, not outside.
};
myFunctionExpression();

// ✅ Function Declaration Priority
// Function declarations are hoisted before variable declarations (even if they have the same name)
console.log(hoistedItem); // Output: [Function: hoistedItem] (the function is hoisted first)
var hoistedItem = "I am a variable";
console.log(hoistedItem); // Output: I am a variable (now the variable is assigned)
function hoistedItem() {
  return "I am a function";
}

// ✅ Function Re-declaration
// In non-strict mode, function declarations can be re-declared, but it's generally bad practice.
myRedeclaredFunction(); // Output: Second definition
function myRedeclaredFunction() {
  console.log("First definition");
}
function myRedeclaredFunction() {
  console.log("Second definition");
}
myRedeclaredFunction(); // Output: Second definition
