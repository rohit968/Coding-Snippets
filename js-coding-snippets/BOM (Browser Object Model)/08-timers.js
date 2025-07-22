/* 
===================================
⏱️ BOM - Timers (setTimeout & setInterval)
===================================

1️⃣ What is this?
------------------
Timers are methods on the `window` object that schedule functions to run after a delay (`setTimeout`) or repeatedly at intervals (`setInterval`).

2️⃣ Why does it matter?
------------------------
✅ Allows delayed or repeated execution without blocking the main thread  
✅ Essential for animations, polling, debouncing, and time-based logic  
✅ Helps manage asynchronous tasks in vanilla JS

3️⃣ Why and when to use?
-------------------------
✅ Use `setTimeout` for one-off delays (e.g., show a tooltip after hover)  
✅ Use `setInterval` for repeated tasks (e.g., clocks, auto-save)  
✅ Always clear timers to prevent memory leaks or unwanted behavior  

4️⃣ Snippets:
--------------
*/

// setTimeout: run once after delay (milliseconds)
const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Cancel the timeout before it fires
clearTimeout(timeoutId);

// setInterval: run repeatedly at given interval
const intervalId = setInterval(() => {
  console.log("Executed every 1 second");
}, 1000);

// Cancel the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 5000);


//5️⃣ Real-World Examples:
//-------------------------

// ✅ **Tooltip Delay**: Show help tip 500ms after hover:
element.addEventListener("mouseover", () => {
  tooltipTimeout = setTimeout(showTooltip, 500);
});
element.addEventListener("mouseout", () => {
  clearTimeout(tooltipTimeout);
  hideTooltip();
});

// ✅ **Auto-Save Draft**: Save form data every 30 seconds:
const saveInterval = setInterval(saveDraft, 30000);

// ✅ **Debouncing Input**: Delay search until user stops typing:
let debounceId;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceId);
  debounceId = setTimeout(() => {
    performSearch(searchInput.value);
  }, 300);
});

/* 

6️⃣ Interview Tips:
--------------------
❓ Q: What's the difference between `setTimeout` and `setInterval`?  
✅ A: `setTimeout` schedules one execution; `setInterval` repeats until cleared.

❓ Q: How do you stop a timer?  
✅ A: Use `clearTimeout(id)` for timeouts or `clearInterval(id)` for intervals.

❓ Q: How to implement a debounce function using timers?  
✅ A: Use `clearTimeout` inside the input handler before setting a new `setTimeout`.

🔥 Bonus: Use `requestAnimationFrame` for smoother, frame‑sync animations instead of intervals.
*/
