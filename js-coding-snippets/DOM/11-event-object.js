// ======================================================
// 📌 Topic: Understanding the `event` Object in JavaScript
// dom-basics/13-event-object.js
// ======================================================

/**
 * ✅ What is the `event` object?
 * Every event listener callback receives an `event` object,
 * which contains details about the triggered event and the
 * context in which it occurred.
 *
 * ✅ Why is it useful?
 * - Inspect event type and target element
 * - Prevent default behaviors or stop propagation
 * - Access coordinates, key details, and more
 *
 * ✅ Common Properties & Methods:
 * - `event.type`              → String name of the event (e.g., 'click')
 * - `event.target`            → Element that initiated the event
 * - `event.currentTarget`     → Element the listener is attached to
 * - `event.preventDefault()`  → Stop default browser behavior
 * - `event.stopPropagation()` → Stop event bubbling
 * - `event.stopImmediatePropagation()` → Stop other listeners on same element
 * - `event.defaultPrevented`  → Boolean, true if preventDefault() was called
 * - `event.clientX`, `event.clientY` → Mouse coordinates
 * - `event.key`, `event.code`  → Key pressed (keyboard events)
 */

// 🔹 Example: Click event details
const button = document.getElementById('info-btn');
button.addEventListener('click', function (event) {
  console.log('Event type:', event.type);                // 'click'
  console.log('Event target:', event.target);            // <button id="info-btn">
  console.log('Current target:', event.currentTarget);   // same as target
  console.log('Default prevented?', event.defaultPrevented);
});

// 🔹 Prevent default link navigation
const link = document.querySelector('a.prevent-link');
link.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Default navigation prevented.');
});

// 🔹 Stop propagation example
const outer = document.getElementById('outer-div');
const inner = document.getElementById('inner-div');
outer.addEventListener('click', () => console.log('Outer clicked'));
inner.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('Inner clicked, propagation stopped');
});

// 🔹 Keyboard event properties
const input = document.getElementById('text-input');
input.addEventListener('keydown', (event) => {
  console.log(`Key "${event.key}" (code: ${event.code}) pressed`);
});

// 🔹 Mouse event coordinates
document.addEventListener('mousemove', (event) => {
  // throttle in real use-case
  console.log(`Mouse at (${event.clientX}, ${event.clientY})`);
});

// 🗣️ Interview Tip:
// “The `event` object is your gateway to user interaction data—always inspect `event.target` vs. `currentTarget`,
// and use `preventDefault`/`stopPropagation` to control event flow and default behaviors.”
