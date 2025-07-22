// ======================================================
// 📌 Topic: Class Manipulation in the DOM
// dom-basics/15-class-manipulation.js
// ======================================================

/**
 * ✅ What is it?
 * `element.classList` provides methods to add, remove, toggle,
 * and check for CSS classes on a DOM element.
 *
 * ✅ Why is it useful?
 * - Dynamically update styling without directly touching `style`
 * - Add or remove classes based on state or events
 * - Efficiently manage CSS-driven UI changes
 */

// 🔹 Selecting an element
const box = document.getElementById('interactive-box');

// 🔹 add() — add one or more classes
box.classList.add('highlight');
box.classList.add('rounded', 'shadow');

// 🔹 remove() — remove a class
box.classList.remove('shadow');

// 🔹 toggle() — toggle class presence
box.classList.toggle('active');          // adds if missing, removes if present
box.classList.toggle('active', true);    // force add

// 🔹 contains() — check for a class
if (box.classList.contains('highlight')) {
  console.log('Box is highlighted');
}

// 🔹 replace() — replace one class with another
box.classList.replace('rounded', 'circle');

// 🔹 Real-life Example: Click to Highlight
box.addEventListener('click', () => {
  box.classList.toggle('highlight');
});

// 🔹 Real-life Example: Form Validation Feedback
const input = document.getElementById('email-input');
input.addEventListener('blur', () => {
  if (!input.value.includes('@')) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
});

// 🗣️ Interview Tip:
// “Use `classList` over manipulating `className` strings—it’s more readable,
// less error-prone, and supports multiple classes effortlessly.”
