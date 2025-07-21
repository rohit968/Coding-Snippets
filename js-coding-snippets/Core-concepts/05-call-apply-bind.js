// ======================================================
// 📌 Topic: Function Context — call, apply, bind
// core-concepts/05-call-apply-bind.js
// ======================================================

/**
 * ✅ What is it?
 * Methods to explicitly set a function's `this` context:
 *  - `function.call(thisArg, arg1, arg2, ...)`
 *  - `function.apply(thisArg, [argsArray])`
 *  - `function.bind(thisArg, arg1, arg2, ...)` returns a new bound function
 *
 * ✅ Why is it useful?
 * - Control which object a function uses as `this`
 * - Borrow methods between objects
 * - Partial application of arguments
 *
 * ✅ How to use it?
 * - `call` and `apply` invoke immediately
 * - `bind` returns a new function for later use
 */

// 🔹 call()
function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}
const user = { name: 'Rohit' };
greet.call(user, 'Hello');        // Hello, I'm Rohit

// 🔹 apply()
function sum(a, b, c) {
  console.log(a + b + c);
}
sum.apply(null, [1, 2, 3]);      // 6

// 🔹 bind()
const calculator = {
  x: 10,
  add(y) {
    return this.x + y;
  }
};
const addTen = calculator.add.bind(calculator);
console.log(addTen(5));           // 15

// ✅ Real-life Example: Borrowing Array methods
const obj = { length: 3 };
const arrSlice = Array.prototype.slice;
const result = arrSlice.call(obj, 0);
console.log(result); // [] (empty array of length 3 entries)

// ✅ Real-life Example: Partial Application
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5));           // 10

// ✅ Edge Case: bind and new
function Person(age) {
  this.age = age;
}
const BoundPerson = Person.bind(null);
const p = new BoundPerson(30);
console.log(p.age);               // 30

// 🗣️ Interview Tip:
// "Use call for immediate invocation with a custom `this`, apply when args are in an array,
// and bind to create a new function with bound context or preset arguments."