// ======================================================
// 📌 Topic: Form Input Handling & Validation
// dom-basics/16-form-validation.js
// ======================================================

/**
 * ✅ What is it?
 * Handling and validating form inputs means reading user-entered data,
 * checking it against rules (e.g., required, email format, length),
 * and providing feedback before submission.
 *
 * ✅ Why is it useful?
 * - Prevents invalid data from being sent
 * - Enhances user experience with real-time feedback
 * - Reduces server-side errors and security risks
 */

// 🔹 Selecting form and its inputs
const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('form-feedback');

// 🔹 Utility: show error or success
function showFeedback(input, message, isValid) {
  input.classList.toggle('error', !isValid);
  input.classList.toggle('success', isValid);
  if (!isValid) {
    feedback.textContent = message;
    feedback.classList.add('visible');
  } else {
    feedback.classList.remove('visible');
  }
}

// 🔹 Validation rules
function validateUsername() {
  const value = username.value.trim();
  if (value === '') {
    showFeedback(username, 'Username is required', false);
    return false;
  }
  if (value.length < 3) {
    showFeedback(username, 'Min 3 characters', false);
    return false;
  }
  showFeedback(username, '', true);
  return true;
}

function validateEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = email.value.trim();
  if (!re.test(value)) {
    showFeedback(email, 'Invalid email address', false);
    return false;
  }
  showFeedback(email, '', true);
  return true;
}

function validatePassword() {
  const value = password.value;
  if (value.length < 6) {
    showFeedback(password, 'Password must be 6+ characters', false);
    return false;
  }
  showFeedback(password, '', true);
  return true;
}

// 🔹 Real-time validation
[username, email, password].forEach(input => {
  input.addEventListener('input', () => {
    if (input === username) validateUsername();
    if (input === email) validateEmail();
    if (input === password) validatePassword();
  });
});

// 🔹 Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isFormValid = [validateUsername(), validateEmail(), validatePassword()]
    .every(valid => valid);
  if (isFormValid) {
    feedback.textContent = 'Form submitted successfully!';
    feedback.classList.add('visible', 'success');
    form.reset();
    [username, email, password].forEach(i => i.classList.remove('success'));
  }
});

// 🗣️ Interview Tip:
// “Use regex for format checks, length checks for strength, and toggle classes to give clear UI feedback—validate both on input and on submit.”
