// ======================================================
// 📌 Topic: Async Functions (`async/await`) in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `async` functions simplify working with asynchronous code by:
 * - Allowing the use of `await` to pause execution until a Promise resolves
 * - Making async code look and behave like synchronous code
 * 
 * ✅ Why is it useful?
 * - Improves readability and maintainability of asynchronous code
 * - Eliminates "callback hell" or excessive `.then()` chains
 * - Easier to handle sequential or dependent async operations
 * 
 * ✅ How to use it?
 * - Declare a function with `async`
 * - Use `await` inside to pause for Promises
 * - Always returns a Promise implicitly
 * 
 * Syntax:
 * ```js
 * async function fetchData() {
 *    const result = await somePromise();
 * }
 * ```
 * 
 * ✅ Real-life examples:
 * - Fetching data from APIs
 * - Waiting for file operations
 * - Handling time delays (e.g., setTimeout with Promises)
 */

// ✅ Example: Basic Async/Await Usage
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function runTask() {
  console.log("Task starting...");
  await wait(1000);
  console.log("Task finished after 1 second.");
}
runTask();

// ✅ Advanced Consideration: Async Functions Always Return a Promise
async function giveNumber() {
  return 42;
}
giveNumber().then(console.log); // Output: 42 (wrapped in Promise)

// =============================================================== //

// ✅ Real-life Example: Fetching API Data
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("User Data:", user);
  } catch (err) {
    console.error("Failed to fetch user:", err);
  }
}
getUser();

// ✅ Real-life Example: Sequential API Calls
async function loadData() {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await res1.json();

    const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await res2.json();

    console.log(`Post Title: ${post.title}`);
    console.log(`Author: ${user.name}`);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
loadData();

// ✅ Real-life Example: Simulating Bakery Order Processing
async function bakeCake() {
  console.log("Starting to bake...");
  await wait(2000);
  console.log("Cake is ready! 🎂");
}
bakeCake();


//🗣️ Layman Interview Explanation — Async/Await
//"Imagine you're baking. You mix the batter, but you can't serve the cake until it's baked. With async/await, your code pauses the recipe at 'bake cake' and resumes only when it's ready, making your steps clean and easy to follow."
