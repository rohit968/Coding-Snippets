// ======================================================
// 📌 Topic: Event Handling with addEventListener()
// dom-basics/09-event-handling.js
// ======================================================

/**
 * ✅ What is it?
 * Event handling lets you respond to user interactions (clicks, inputs, etc.)
 * by registering functions (listeners) on DOM elements.
 *
 * ✅ Why is it useful?
 * - Enables interactivity
 * - Keeps JavaScript separate from HTML
 * - Allows multiple handlers on the same element
 */

// 🔹 Selecting an element\ nconst btn = document.getElementById('action-btn');

// 🔹 Adding a click event listener
btn.addEventListener('click', function (event) {
  console.log('Button clicked!');
  // event object contains info about the event
  console.log('Clicked element:', event.target);
});

// 🔹 Using an external handler function
function handleMouseOver(e) {
  console.log('Mouse over:', e.target.id);
}
const box = document.querySelector('.hover-box');
box.addEventListener('mouseover', handleMouseOver);

// 🔹 Removing an event listener\ n// box.removeEventListener('mouseover', handleMouseOver);

// 🔹 Options object: once, capture, passive
btn.addEventListener('click', () => console.log('Once!'), { once: true });

// 🔹 Preventing default behavior (e.g., form submission)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // stops the form from submitting
  console.log('Form submission prevented');
});

// 🗣️ Interview Tip:
// "Use addEventListener for clean separation of logic, leverage options like `once` and always clean up listeners to avoid memory leaks."
