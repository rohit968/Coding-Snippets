/*
🔄 Currying vs Partial Application in JavaScript

Both help break down functions and improve code reusability and flexibility.

-------------------------------
🧠 CURRYING
-------------------------------
Currying transforms a function with multiple arguments
into a sequence of functions, each taking **one argument at a time**.
*/

function add(a, b, c) {
  return a + b + c;
}

// Curried version of above:
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(2)(3)(4)); // 9

// ✅ Arrow function currying
const curryMultiply = (a) => (b) => (c) => a * b * c;
console.log(curryMultiply(2)(3)(5)); // 30

// 🎯 Use Case: Reusable functions
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
console.log(sayHello("Rohit")); // Hello, Rohit!
console.log(sayHello("Amit"));  // Hello, Amit!

/*
-------------------------------
🧠 PARTIAL APPLICATION
-------------------------------
Partial application is when we fix **some** arguments of a function
and return a new function.
*/

function log(level, time, message) {
  console.log(`[${level}] [${time}] ${message}`);
}

// Partial: Fix `level` and `time`
function partialLog(level, time) {
  return function (message) {
    log(level, time, message);
  };
}

const infoLog = partialLog("INFO", "12:00PM");
infoLog("Server started"); // [INFO] [12:00PM] Server started

// 🔧 Generic partial function
function partial(fn, ...fixedArgs) {
  return function (...restArgs) {
    return fn(...fixedArgs, ...restArgs);
  };
}

const multiply = (a, b, c) => a * b * c;
const doubleAndTriple = partial(multiply, 2, 3);
console.log(doubleAndTriple(4)); // 2*3*4 = 24

/*
-------------------------------
🧠 CURRYING vs PARTIAL
-------------------------------
✅ Currying:
- Breaks down a function into unary functions (1 arg each)
- Useful in function composition

✅ Partial Application:
- Fixes some arguments
- Still expects remaining args together
*/

/*
💡 Interview Tip:
👉 Libraries like Lodash provide `_.curry` and `_.partial` utilities.
👉 Currying is widely used in functional programming (e.g., in React hooks patterns).
*/

