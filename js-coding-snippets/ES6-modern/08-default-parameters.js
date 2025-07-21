// ======================================================
// 📌 Topic: Default Parameters in JavaScript (ES6+)
// es6-modern/08-default-parameters.js
// ======================================================

/**
 * ✅ What is it?
 * Default parameters allow named parameters to be initialized
 * with default values if no value or `undefined` is passed.
 *
 * ✅ Why is it useful?
 * - Simplifies function signatures
 * - Avoids manual checks inside functions
 * - Improves readability and maintainability
 *
 * ✅ Syntax:
 * function fn(a = defaultA, b = defaultB) { ... }
 */

// 🔹 Basic Usage
function greet(name = 'Guest', message = 'Welcome') {
  console.log(`${message}, ${name}!`);
}

greet();                         // "Welcome, Guest!"

greet('Rohit');                 // "Welcome, Rohit!"

greet('Alice', 'Hello');        // "Hello, Alice!"

// 🔹 Using Expressions
function sum(a = 0, b = 1 + 1) {
  return a + b;
}
console.log(sum());              // 2   (0 + 2)
console.log(sum(3));             // 5   (3 + 2)

// 🔹 Dependency on Previous Parameters
function buildUrl(domain = 'example.com', protocol = 'https') {
  return `${protocol}://${domain}`;
}
console.log(buildUrl());          // "https://example.com"
console.log(buildUrl('site.org')); // "https://site.org"

// 🔹 Real-life Example: Configurable Request
function fetchData(endpoint, timeout = 5000, retries = 3) {
  console.log(`Fetching ${endpoint} with timeout ${timeout}ms and ${retries} retries`);
  // simulate fetch logic
}
fetchData('/api/data');           // default timeout & retries
fetchData('/api/data', 10000, 1); // custom values

// 🔹 Edge Case: Passing `undefined` vs `null`
function test(val = 'default') {
  console.log(val);
}
test(undefined);                // "default"
test(null);                     // null  (null is a value)

// 🗣️ Interview Tip:
// "Default parameters let you define expected defaults right in the function signature,
// reducing boilerplate and making your APIs self-documenting."