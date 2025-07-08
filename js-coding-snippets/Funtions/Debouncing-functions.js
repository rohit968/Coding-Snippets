// ======================================================
// 📌 Topic: Debouncing Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Debouncing is a technique to:
 * - Limit how often a function executes
 * - Ensure the function only runs after a pause in events
 * 
 * ✅ Why is it useful?
 * - Prevents excessive function calls during fast, repeated events
 * - Improves performance in scenarios like:
 *   → Window resizing
 *   → Search input typing
 *   → Button spam clicks
 *   → Scroll event handling
 * 
 * ✅ How to use it?
 * Debouncing creates a delayed function that resets its timer on every call:
 * ```js
 * function debounce(func, delay) { ... }
 * ```
 * 
 * ✅ Real-life examples:
 * - Search suggestions only appearing after user stops typing
 * - Preventing multiple API calls on input change
 * - Avoiding expensive layout recalculations on window resize
 */

// ✅ Debounce Utility Function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// ========================================================= //

// ✅ Real-life Example: Debouncing Search Input
const searchBox = document.createElement("input");
searchBox.placeholder = "Search...";
document.body.appendChild(searchBox);
function searchQuery(query) {
  console.log(`Searching for: ${query}`);
}
const debouncedSearch = debounce(searchQuery, 500);
searchBox.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

// ✅ Real-life Example: Debouncing Window Resize Event
function onResize() {
  console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`);
}
window.addEventListener("resize", debounce(onResize, 300));

// ✅ Real-life Example: Preventing Button Spam Clicks
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);
button.addEventListener("click", debounce(() => {
  console.log("Button clicked (debounced)");
}, 1000));


// 🗣️ Layman Interview Explanation — Debouncing
// "Imagine you're typing a message, but your phone only sends it when you stop typing for a second. That's debouncing. It waits for you to pause, then acts, avoiding unnecessary work."

