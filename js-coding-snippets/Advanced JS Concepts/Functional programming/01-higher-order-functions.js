// 🔁 Higher-Order Functions in JavaScript

/*
👉 Definition:
A higher-order function (HOF) is a function that:
1. Takes one or more functions as arguments
2. Or returns a function as its result
*/

// ✅ Example 1: A function that takes another function as an argument
function greetUser(name, formatterFn) {
  return formatterFn(name);
}

function casualGreeting(name) {
  return `Hi ${name}, what's up?`;
}

function formalGreeting(name) {
  return `Good evening, ${name}.`;
}

console.log(greetUser("Rohit", casualGreeting)); // Hi Rohit, what's up?
console.log(greetUser("Rohit", formalGreeting)); // Good evening, Rohit.

// ✅ Example 2: Returning a function (Closure + HOF)
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ✅ Example 3: Array methods like map, filter, reduce use HOFs
const numbers = [1, 2, 3, 4, 5];

// map takes a function as argument => HOF
const squared = numbers.map((num) => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// filter takes a function => HOF
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

// reduce takes a function => HOF
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// ✅ Example 4: Custom HOF
function repeatNTimes(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

repeatNTimes(3, (i) => console.log(`Running task ${i + 1}`));
// Running task 1
// Running task 2
// Running task 3

/*
🔍 Use Cases:
- Functional programming style
- Abstracting logic (like retry logic, debounce, throttle)
- Custom utility methods
- Middleware pipelines (e.g. Express.js)
*/

/*
🧠 Interview Tip:
If a function accepts or returns another function — it's a HOF.
All array iteration methods are HOFs.
*/

