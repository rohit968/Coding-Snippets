// ======================================================
// 📌 Topic: Form Events & the Event Object
// dom-basics/11-form-events.js
// ======================================================

/**
 * ✅ What is it?
 * Form events fire when users interact with form controls.
 * Common events:
 * - submit: form submission
 * - input: any value change in <input> or <textarea>
 * - change: when an input loses focus after its value changes
 * - focus & blur: when elements gain or lose focus
 *
 * ✅ Why is it useful?
 * - Validate or process data before submission
 * - Provide real-time feedback/validation
 * - Prevent default behaviors (e.g., page reload)
 */

// 🔹 Selecting the form and inputs
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// ======================================================
// ✉️ submit event
// ======================================================
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload
  console.log('Form submitted');
  const data = {
    name: nameInput.value,
    email: emailInput.value
  };
  console.log('Form Data:', data);
  // Clear form after submission
  form.reset();
});

// ======================================================
// 🔄 input event (real-time value)
// ======================================================
[nameInput, emailInput].forEach(input => {
  input.addEventListener('input', function (e) {
    console.log(`Input ${e.target.id} changed to:`, e.target.value);
  });
});

// ======================================================
// ✔️ change event (on blur after change)
// ======================================================
emailInput.addEventListener('change', function (e) {
  console.log(`Email field value confirmed as:`, e.target.value);
});

// ======================================================
// 🔍 focus & blur
// ======================================================
nameInput.addEventListener('focus', () => console.log('Name field focused'));
nameInput.addEventListener('blur', () => console.log('Name field blurred'));

// ======================================================
// 🧠 Tip: use `e.target` to access the element, and `e.preventDefault()` to stop default behaviors.

// 🗣️ Interview Tip:
// "Form events let you hook into the lifecycle of form controls. Use `submit` to gather data,
// `input` for live validation, and `change` for final value checks. Always prevent default submission when handling with JS."
