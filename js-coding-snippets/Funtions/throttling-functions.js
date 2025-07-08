// ======================================================
// 📌 Topic: Throttling Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Throttling is a performance technique that:
 * - Ensures a function executes at most once in a specified time period  
 * - Ignores repeated calls during that period  
 * 
 * ✅ Why is it useful?
 * - Controls how frequently a function runs  
 * - Ideal for continuous, high-frequency events like:
 *   → Scrolling  
 *   → Window resizing  
 *   → Button spam prevention  
 * 
 * ✅ How to use it?
 * Throttling allows a function to run once, then ignores further calls until time passes  
 * 
 * ✅ Real-life examples:
 * - Improving performance on scroll-heavy pages  
 * - Limiting how fast buttons can trigger actions  
 * - Handling resize events efficiently  
 */

// ✅ Throttle Utility Function
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// ===================================================== //

// ✅ Real-life Example: Throttling Scroll Events
function onScroll() {
  console.log(`Scroll event at ${window.scrollY}px`);
}
window.addEventListener("scroll", throttle(onScroll, 500));

// ✅ Real-life Example: Throttling Resize Events
function handleResize() {
  console.log(`Window resized to ${window.innerWidth} x ${window.innerHeight}`);
}
window.addEventListener("resize", throttle(handleResize, 1000));

// ✅ Real-life Example: Throttling Button Clicks
const orderButton = document.createElement("button");
orderButton.textContent = "Place Order";
document.body.appendChild(orderButton);
orderButton.addEventListener("click", throttle(() => {
  console.log("Order placed (throttled)");
}, 2000));


// 🗣️ Layman Interview Explanation — Throttling
// "Imagine your bakery gets flooded with orders, but your staff can only prepare one every 2 minutes. Throttling works the same way—it ensures your system handles tasks at a steady, manageable pace, no matter how many times an event happens."