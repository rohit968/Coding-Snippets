// ======================================================
// 📌 Topic: Mouse & Keyboard Events in JavaScript
// dom-basics/10-mouse-keyboard-events.js
// ======================================================

/**
 * ✅ What is it?
 * Mouse and keyboard events allow you to respond to user interactions
 * like clicks, hovers, key presses, and form navigation.
 *
 * ✅ Why is it useful?
 * - Enables dynamic and interactive UIs
 * - Captures user input and controls behavior (e.g., shortcuts)
 * - Improves accessibility and user experience
 *
 * ✅ Common Events:
 * Mouse: click, dblclick, mousedown, mouseup,
 *        mouseenter, mouseleave, mousemove, contextmenu, wheel
 * Keyboard: keydown, keyup, keypress (deprecated),
 *           input, focus, blur
 */

// 🔹 Selecting elements
const btn = document.getElementById('action-btn');
const hoverBox = document.querySelector('.hover-box');
const inputField = document.getElementById('text-input');

// ======================================================
// 🖱️ Mouse Events Examples
// ======================================================

// click
btn.addEventListener('click', (e) => {
  console.log('✅ Button clicked', e.target);
});

// dblclick
document.addEventListener('dblclick', () => {
  console.log('✅ Double-click detected');
});

// mousedown & mouseup
btn.addEventListener('mousedown', () => console.log('Mouse button down'));
btn.addEventListener('mouseup', () => console.log('Mouse button up'));

// mouseenter & mouseleave
hoverBox.addEventListener('mouseenter', () => console.log('Mouse entered box'));
hoverBox.addEventListener('mouseleave', () => console.log('Mouse left box'));

// mousemove
hoverBox.addEventListener('mousemove', (e) => {
  console.log(`Mouse at (${e.clientX}, ${e.clientY})`);
});

// contextmenu (right-click)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('🚫 Default context menu prevented');
});

// wheel (scroll)
document.addEventListener('wheel', (e) => {
  console.log(`Scrolled by ${e.deltaY}`);
});

// ======================================================
// ⌨️ Keyboard & Form Events Examples
// ======================================================

// keydown & keyup
document.addEventListener('keydown', (e) => {
  console.log(`Key down: ${e.key}`);
});

document.addEventListener('keyup', (e) => {
  console.log(`Key up: ${e.key}`);
});

// keypress (deprecated)
inputField.addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// input (value change)
inputField.addEventListener('input', (e) => {
  console.log(`Input changed to: ${e.target.value}`);
});

// focus & blur
inputField.addEventListener('focus', () => console.log('Input focused'));
inputField.addEventListener('blur', () => console.log('Input blurred'));

// ======================================================
// 🔹 Real-life Example: Keyboard Shortcut (Ctrl+S)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('💾 Save shortcut triggered');
  }
});

// ======================================================
// 🗣️ Interview Tip
// "Use mouse events for UI interactions and keyboard events for shortcuts and input handling.
// Always clean up listeners in single-page apps to avoid memory leaks."
