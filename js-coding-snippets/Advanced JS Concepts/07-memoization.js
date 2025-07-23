/*
🧠 Memoization in JavaScript
Memoization is a performance optimization technique:
It **caches** the result of expensive function calls
and returns the cached result when the same inputs occur again.

✅ It’s most useful in:
- Recursive functions (like Fibonacci)
- Heavy computation
- Avoiding repeated work with same inputs
*/

// ❌ Without memoization (slow for large n)
function slowFib(n) {
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}

console.time("slow");
console.log("slowFib(30):", slowFib(30));
console.timeEnd("slow"); // ~300ms+

// ✅ With memoization
function memoizedFib() {
  const cache = {};

  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;

    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  };
}

const fastFib = memoizedFib();

console.time("fast");
console.log("memoizedFib(30):", fastFib(30));
console.timeEnd("fast"); // ~1-2ms

/*
-------------------------------
💾 Generic Memoization Function
-------------------------------
*/

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// 📌 Example: factorial with memoization
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoFactorial = memoize(factorial);
console.log("memoFactorial(5):", memoFactorial(5)); // 120
console.log("memoFactorial(6):", memoFactorial(6)); // Uses cached 5!

/*
--------------------------------
✅ When to Use Memoization:
--------------------------------
- Pure functions (no side effects)
- Same input always gives same output
- Repeated calls with same args

⚠️ Avoid for functions with:
- Side effects
- Varying results (like Math.random())
*/

/*
🧠 Real-world use:
- React's `useMemo()` hook
- Redux selectors
- Caching API calls in frontend apps
*/

