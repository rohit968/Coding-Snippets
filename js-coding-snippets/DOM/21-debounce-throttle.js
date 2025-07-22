// ======================================================
// 📌 Topic: Debouncing and Throttling (Performance Tips)
// dom-basics/24-debounce-throttle.js
// ======================================================

/**
 * ✅ Why are these important?
 * Scroll, resize, input, or key events can fire rapidly → slowing down your app.
 * Debounce and throttle help control *how often* your functions run.
 */

// 🔹 Debounce: Runs after delay *only when event stops firing*
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedSearch = debounce(function (e) {
  console.log('Debounced input:', e.target.value);
}, 500);

document.querySelector('#searchInput').addEventListener('input', debouncedSearch);

// 🔹 Throttle: Runs function at most once every X ms
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const throttledScroll = throttle(function () {
  console.log('Throttled scroll at', new Date().toLocaleTimeString());
}, 1000);

window.addEventListener('scroll', throttledScroll);

/**
 * 🧪 Try this:
 * <input id="searchInput" placeholder="Type to test debounce" />
 * Scroll your page after attaching the scroll event.
 */

/**
 * 🧠 Interview Tip:
 * - Debounce: Great for search inputs or resize events
 * - Throttle: Ideal for scroll, mousemove, or drag events
 *
 * 🗣️ Analogy:
 * - Debounce = “Wait until they stop typing”
 * - Throttle = “Let them speak once every second”
 */
