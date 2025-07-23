// 🎯 Use case: Optimizing scroll & input events

// 💡 Why do we need these?
//    In JavaScript, certain events like scroll, resize, or input can fire many times per second.
//    If we call a function every single time, it leads to performance issues.

// 🚀 1. Debouncing — Delay execution until user stops
// Debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example: Search box
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", debounce((e) => {
  console.log("🔍 API call for:", e.target.value);
}, 500));
//  📌 Use Case: Search bars, auto-saving, window resizing
// ❗️Executes after the user has stopped typing for 500ms.

// ------------------------------------------------------

// ⚡ 2. Throttling — Execute once every X ms
// Throttle function
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Example: Scroll event
window.addEventListener("scroll", throttle(() => {
  console.log("📜 Scroll event handled");
}, 1000));
// 📌 Use Case: Scroll handlers, button spamming, resize events
// ❗️Executes at most once every 1000ms (even if user keeps scrolling).

/* 
🧠 Visual Explanation

Debounce:- 
User Types:     H-----E----L----L------O
                |----delay----|   (call happens only after full stop)

Call Triggered: ----------------------●

Throttle
User Scrolls:   ██████████████████████
                |-----1s------|-----1s------|

Call Triggered: ●           ●           ●


🆚 Summary
| Feature   | Debounce                            | Throttle                        |
| --------- | ----------------------------------- | ------------------------------- |
| Execution | After inactivity (wait & fire once) | Every X ms (regular interval)   |
| Use Case  | Search box, resize, input events    | Scroll, resize, continuous fire |
| Best for  | Reducing API calls                  | Smoothing UI performance        |

*/