// ======================================================
// 📌 Topic: Generators in JavaScript (ES6+)
// es6-modern/13-generators.js
// ======================================================

/**
 * ✅ What is it?
 * A generator is a special function that can pause its execution
 * and resume later, producing a sequence of values over time.
 * Defined with `function*` and `yield` statements.
 *
 * ✅ Why is it useful?
 * - Create sequence data lazily (e.g., infinite sequences)
 * - Manage asynchronous flows in older patterns
 * - Simplify iterator creation for custom objects
 *
 * ✅ Syntax:
 * function* gen() { yield value; }
 */

// 🔹 Basic Generator Example
function* simpleGenerator() {
  console.log('Start generator');
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: true }

// 🔹 Infinite Sequence Generator
function* idGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}
const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2

// 🔹 Using Generators with for...of
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (const num of range(5, 7)) {
  console.log(num); // 5, 6, 7
}

// 🔹 Real-life Example: Paginated API Fetching
async function* fetchPages(api, totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${api}?page=${page}`);
    const data = await response.json();
    yield data;
  }
}
// Usage in async context:
// (async () => {
//   for await (const pageData of fetchPages('/api/items', 3)) {
//     console.log(pageData);
//   }
// })();

// 🗣️ Interview Tip:
// "Generators give you fine-grained control over iteration and can replace
// complex iterator implementations—think of them as pausable functions."