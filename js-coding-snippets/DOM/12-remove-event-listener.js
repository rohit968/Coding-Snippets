// ======================================================
// 📌 Topic: Removing Event Listeners — Cleanups & Memory Efficiency
// dom-basics/14-remove-event-listeners.js
// ======================================================

/**
 * ✅ What is it?
 * Removing event listeners detaches handlers from elements,
 * preventing callbacks from firing and avoiding memory leaks.
 *
 * ✅ Why is it useful?
 * - Frees up memory when elements are removed or not needed
 * - Prevents duplicate handlers and unexpected behavior
 * - Essential in single‑page apps for performance and stability
 *
 * ✅ Syntax:
 * element.removeEventListener(eventType, handler, options);
 */

// 🔹 Example Setup: Adding and Removing a Click Handler
const actionBtn = document.getElementById('action-btn');

function handleClick(e) {
  console.log('Button clicked');
}

// ➕ Add listener
actionBtn.addEventListener('click', handleClick);

// ... later, when no longer needed:
// ➖ Remove listener
actionBtn.removeEventListener('click', handleClick);

// 🔹 Removing with Named Function vs Anonymous
// ❌ Anonymous functions cannot be removed:
// actionBtn.addEventListener('click', () => console.log('Hi'));
// actionBtn.removeEventListener('click', () => console.log('Hi'));

// 🔹 Cleanup in Single‑Page Apps
function setupModal() {
  const modal = document.getElementById('modal');
  modal.addEventListener('click', closeModal);
}

function teardownModal() {
  const modal = document.getElementById('modal');
  modal.removeEventListener('click', closeModal);
}

// 🔹 Use Case: Interval + Event
let timerId = setInterval(() => console.log('Tick'), 1000);

// When stopping:
clearInterval(timerId);
actionBtn.removeEventListener('click', handleClick);

// 🗣️ Interview Tip:
// “Always use named functions for listeners so you can remove them later.
// Clean up listeners when elements are destroyed to prevent memory leaks.”
