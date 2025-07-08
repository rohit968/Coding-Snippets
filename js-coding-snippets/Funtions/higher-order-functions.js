// ======================================================
// 📌 Topic: Higher-Order Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Higher-Order Function** (HOF) is a function that:
 * - Takes another function as an argument, or
 * - Returns a function as a result
 * 
 * ✅ Why is it useful?
 * - Enables powerful abstractions
 * - Used in callbacks, array methods, functional programming
 * - Makes code more reusable and readable
 * 
 * ✅ Real-life example:
 * - Array operations like `.map()`, `.filter()`, `.reduce()`
 * - Custom logic with callbacks
 * - Event handling
 */

// 🧠 Example 1 — Function Passed as Argument
function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
greetUser("Rohit", () => console.log("Callback executed"));
// Output: Hello, Rohit  
//         Callback executed

// ✅ Example 2 — Function Returning a Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const triple = multiplier(3);
console.log(triple(5));
// Output: 15

// ✅ Example 3 — Common HOFs: `.map()`, `.filter()`
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]
const even = numbers.filter(n => n % 2 === 0);
console.log(even);
// Output: [2, 4]

// ✅ Example 4 — Custom HOF for Logging
function withLogging(fn) {
  return function (...args) {
    console.log("Function called with:", args);
    return fn(...args);
  };
}
const sum = (a, b) => a + b;
const loggedSum = withLogging(sum);
console.log(loggedSum(5, 7));
// Output: Function called with: [5, 7]  
//         12

// ✅ Emoji/Unicode Example with HOF
const emojis = ["🚀", "❤️", "😀"];
emojis.forEach(e => console.log(`Emoji: ${e}`));

// ✅ Example 5 — Common HOFs: `.reduce()`
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
// Output: 15

// ✅ Example 6 — Custom HOF for Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Cache hit for:", key);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    console.log("Cache miss, calculating for:", key);
    return result;
  };
}
const memoizedFactorial = memoize(n => {
  if (n === 0) return 1;
  return n * memoizedFactorial(n - 1);
});
console.log(memoizedFactorial(5)); // Calculated
console.log(memoizedFactorial(5)); // From cache
console.log(memoizedFactorial(7)); // Calculated

// ✅ Example 7 — Custom HOF for Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Output: 24
console.log(curriedMultiply(2, 3)(4)); // Output: 24
console.log(curriedMultiply(2, 3, 4)); // Output: 24

// ✅ Example 8 — Custom HOF for Function Composition
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}
const addOne = num => num + 1;
const double = num => num * 2;
const subtractThree = num => num - 3;
const composedFunction = compose(subtractThree, double, addOne);
console.log(composedFunction(5)); // Output: (5 + 1) * 2 - 3 = 12 - 3 = 9

// ===================================================== //

// ✅ Real-world Example: Event Listener with HOF (Throttling)
function throttle(func, delay) {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, delay);
    }
  }
}
// Simulate a costly scroll handler
const onScroll = () => console.log("Scrolling...");
const throttledScroll = throttle(onScroll, 1000);
// In a real browser environment, you would add:
// window.addEventListener('scroll', throttledScroll);
console.log("Throttled scroll handler set up (check console for output on scroll simulation)")
// Simulate multiple rapid calls
// setTimeout(throttledScroll, 100);
// setTimeout(throttledScroll, 200);
// setTimeout(throttledScroll, 1100);
// setTimeout(throttledScroll, 1200);

// ✅ Real-world Example: Authentication Middleware (Express.js style)
// This demonstrates a HOF returning a middleware function
function requireRole(role) {
  return function (req, res, next) {
    // In a real app, req.user would come from authentication (e.g., JWT token)
    const user = { name: "Alice", roles: ["admin", "editor"] }; // Simulate user roles

    if (user && user.roles.includes(role)) {
      console.log(`User ${user.name} has required role: ${role}. Proceeding.`);
      // next(); // In Express.js, this passes control to the next middleware
    } else {
      console.log(`Access denied: User ${user ? user.name : 'Guest'} does not have role: ${role}.`);
      // res.status(403).send('Forbidden'); // In Express.js, send forbidden status
    }
  };
}
// Usage example:
const authMiddleware = requireRole('admin');
// Simulate a request object (usually provided by web framework)
const mockReq = {};
const mockRes = {};
const mockNext = () => console.log("Next middleware/route handler called");
authMiddleware(mockReq, mockRes, mockNext);
const editorAuthMiddleware = requireRole('editor');
editorAuthMiddleware(mockReq, mockRes, mockNext);
const viewerAuthMiddleware = requireRole('viewer');
viewerAuthMiddleware(mockReq, mockRes, mockNext);


//🗣️ Layman Interview Explanation — Higher-Order Functions
//"Think of Higher-Order Functions like hiring a worker who either brings tools (functions as input) or builds new tools for you (functions as output). You can pass instructions or get ready-made functionality to solve complex problems more easily."
