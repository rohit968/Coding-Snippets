// ======================================================
// 📌 Topic: Memoization with Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * **Memoization** is a performance optimization technique where:
 * - You store (cache) the results of expensive function calls  
 * - If the same inputs occur again, you return the cached result instead of re-calculating  
 * 
 * ✅ Why is it useful?
 * - Speeds up slow, repetitive operations  
 * - Avoids recalculating identical results  
 * - Boosts performance in recursive functions, API calls, computations  
 * 
 * ✅ How to use it?
 * 1. Wrap your function with a cache mechanism  
 * 2. Store results based on unique inputs  
 * 3. Check the cache before executing the function  
 * 
 * ✅ Real-life examples:
 * - Caching API responses  
 * - Optimizing recursive calculations (e.g., Fibonacci)  
 * - Reducing server load for repeated data  
 * - Improving performance in search, filters, heavy loops  
 */

// 🧠 Example 1: Simple Memoization Wrapper
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }
    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// ✅ Real-world Example: Expensive Calculation with Memoization
function slowSquare(n) {
  console.log("Running heavy calculation...");
  return n * n;
}
const memoSquare = memoize(slowSquare);
console.log(memoSquare(5));
console.log(memoSquare(5));
console.log(memoSquare(6));
// Output:
// Running heavy calculation...
// 25
// Fetching from cache: [5]
// 25
// Running heavy calculation...
// 36

// ✅ Real-world Example: Fibonacci with Memoization
function fib(n, cache = {}) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
  return cache[n];
}
console.log(fib(10));
// Output: 55

// ✅ Real-world Example: API Response Caching (Simulation)
const fakeAPI = memoize(function (endpoint) {
  console.log(`Fetching from ${endpoint}...`);
  return `Data from ${endpoint}`;
});
console.log(fakeAPI("/products"));
console.log(fakeAPI("/products"));
// Second call is fetched from cache

// ✅ Real-world Example: Search Filter Optimization
const heavySearch = memoize(function (query) {
  console.log(`Searching for ${query}...`);
  return `Results for ${query}`;
});
console.log(heavySearch("cake"));
console.log(heavySearch("cake"));


// 🗣️ Layman Interview Explanation — Memoization
//"Imagine your brain remembers answers to tough math problems. First time you calculate, it's slow. Next time, your brain recalls the answer instantly. Memoization lets your code do the same — solve once, reuse the answer next time."