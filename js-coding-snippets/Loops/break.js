// ======================================================
// 📌 Topic: Breaking Loops Early — Using `break` in JavaScript
// ======================================================

/**
 * ✅ What is `break`?
 * `break` is used to **exit a loop immediately**, even before the loop finishes naturally.
 * 
 * ✅ Why is it useful?
 * - Stops looping when a condition is met
 * - Improves performance (especially in long arrays)
 * - Prevents unnecessary iterations
 * 
 * ✅ Where can we use it?
 * - Inside `for`, `while`, `do...while`, `for...of`, and `for...in` loops
 * - Can also be used in `switch` statements
 */

// ✅ Basic Example — Stop at 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// Output: 1 2 3 4

// ✅ `while` Loop Example: Stop on Condition
let count = 0;
while (true) {
  count++;
  if (count === 3) {
    break;
  }
  console.log("Loop count:", count);
}
// Output: Loop count: 1, Loop count: 2

// ✅ `break` with nested loops (only breaks inner loop)
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) break;
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: i=1, j=1; i=1, j=2; i=2, j=1; i=2, j=2

// ====================================================== //

// ✅ Real-life Example: Stop Searching When Found
const products = ["Cake", "Cookies", "Brownie", "Muffin"];

for (const item of products) {
  if (item === "Brownie") {
    console.log("Brownie found! Stopping search.");
    break;
  }
  console.log(`Checking: ${item}`);
}
// Output:
// Checking: Cake
// Checking: Cookies
// Brownie found!



// 🗣️ Layman Interview Explanation — break
// "Think of a loop as a playlist on shuffle. break is like pressing STOP when your favorite song plays — you don’t wait for the rest."

// 💬 In interviews, say: “I use break when I want to exit a loop early, usually after finding what I’m looking for. It saves time and resources, especially in large datasets.”