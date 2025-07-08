// ======================================================
// 📌 Topic: Recursion in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Recursive Function** is a function that calls itself to solve smaller instances of the same problem.
 * 
 * ✅ Why is it useful?
 * - Breaks complex problems into simpler sub-problems
 * - Ideal for tasks like:
 *   ✔️ Repeating patterns
 *   ✔️ Tree/graph traversals
 *   ✔️ Mathematical calculations (factorial, Fibonacci)
 * 
 * ✅ How to use it?
 * Two Key Rules:
 * 1️⃣ Base Case — Stops the recursion to prevent infinite loop  
 * 2️⃣ Recursive Case — Function calls itself
 */

// 🧠 Basic Example — Countdown Recursion
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // Recursive call
}
countdown(5);
// Output: 5 4 3 2 1 Done!

// ✅ Recursive Sum of Array Elements
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5]));
// Output: 15

// ✅ Recursion with Strings — Reverse a String
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("Rohit"));
// Output: "tihoR"

// ✅ Recursion with Arrays — Sum of Array Elements
function sumArray(arr) {
  if (arr.length === 0) return 0; // Base case: empty array sum is 0
  const [first, ...rest] = arr; // Destructure array
  return first + sumArray(rest); // Recursive step
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// ✅ Emoji/Unicode Example with Recursion
function repeatEmoji(emoji, count) {
  if (count <= 0) return "";
  return emoji + repeatEmoji(emoji, count - 1);
}
console.log(repeatEmoji("🚀", 5));
// Output: 🚀🚀🚀🚀🚀

// ====================================================== //

// ✅ Real-world Example: Factorial Calculation
function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1);      // Recursive case
}
console.log(factorial(5));
// Output: 120

// ✅ ✅ Real-world Example: Recursion with Numbers — Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) return n; // Base cases: fib(0) = 0, fib(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive step
}
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)


// ✅ ✅ Real-world Example: Recursion with Numbers — Power Calculation (x^n)
function power(base, exponent) {
  if (exponent === 0) return 1; // Base case: any number to the power of 0 is 1
  if (exponent < 0) { // Handle negative exponents
    return 1 / power(base, -exponent);
  }
  return base * power(base, exponent - 1); // Recursive step
}
console.log(power(2, 3)); // Output: 8 (2 * 2 * 2)
console.log(power(5, 0)); // Output: 1
console.log(power(2, -2)); // Output: 0.25 (1 / (2 * 2))
