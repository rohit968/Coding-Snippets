// ======================================================
// 📌 Topic: Generator Functions (`function*`) in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Generator functions are special functions defined with `function*` that:
 * - Can pause their execution using `yield`
 * - Can resume execution later
 * - Return an iterable `Generator` object
 * 
 * ✅ Why is it useful?
 * - Generates values one by one (lazy evaluation)
 * - Efficient for handling large or infinite sequences
 * - Useful in scenarios like pagination, streaming data, or complex iteration
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * function* generatorFunction() {
 *    yield value;
 * }
 * ```
 * - Calling the generator returns an iterator
 * - `.next()` retrieves the next value
 * - `{ value, done }` structure indicates progress
 * 
 * ✅ Real-life examples:
 * - Creating custom iterators
 * - Handling sequences step by step
 * - Breaking complex logic into manageable pieces
 */

// Basic Generator Function
function* simpleCounter() {
  yield 1;
  yield 2;
  yield 3;
}
const counter = simpleCounter();
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }

// ✅ Generating a Range of Numbers
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
const numbers = range(1, 5);
for (const num of numbers) {
  console.log(num);
}
// Output: 1 2 3 4 5


// ✅ Advanced Consideration: Using `.return()` to Stop a Generator
function* countdown(n) {
  while (n > 0) {
    yield n--;
  }
}
const cd = countdown(3);
console.log(cd.next().value); // 3
console.log(cd.return("Stopped Early")); // { value: "Stopped Early", done: true }
console.log(cd.next()); // { value: undefined, done: true }


// ================================================================= //

// ✅ Real-life Example: Infinite ID Generator
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const getId = idGenerator();
console.log(getId.next().value); // 1
console.log(getId.next().value); // 2
console.log(getId.next().value); // 3

// ✅ Real-life Example: Paginated Product Loader Simulation
function* productPages(products, pageSize) {
  for (let i = 0; i < products.length; i += pageSize) {
    yield products.slice(i, i + pageSize);
  }
}
const allProducts = ["Cake", "Cookie", "Brownie", "Pie", "Muffin", "Pastry"];
const loader = productPages(allProducts, 2);
console.log(loader.next().value); // ["Cake", "Cookie"]
console.log(loader.next().value); // ["Brownie", "Pie"]
console.log(loader.next().value); // ["Muffin", "Pastry"]
console.log(loader.next().done);  // true


// 🗣️ Layman Interview Explanation — Generator Functions
//  "Imagine baking cookies. Instead of making all cookies at once, you bake one, serve it, then bake the next only when needed. Generator functions do the same—they produce values step by step, saving time and resources, especially with large data."