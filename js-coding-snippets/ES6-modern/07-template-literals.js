// ======================================================
// 📌 Topic: Template Literals in JavaScript (ES6+)
// es6-modern/07-template-literals.js
// ======================================================

/**
 * ✅ What is it?
 * Template literals are string literals allowing embedded expressions,
 * multi-line strings, and improved readability using backticks (`` ` ``).
 *
 * ✅ Why is it useful?
 * - Easy interpolation of variables and expressions
 * - Cleaner multi-line strings
 * - Tagged templates enable custom parsing
 *
 * ✅ Syntax:
 * const str = `Hello ${name}, you have ${count} messages.`;
 */

// 🔹 Basic Interpolation
const user = 'Rohit';
const count = 5;
const message = `Hello ${user}, you have ${count} new messages.`;
console.log(message);
// Output: Hello Rohit, you have 5 new messages.

// 🔹 Expressions Inside Templates
const a = 10;
const b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}.`);

// 🔹 Multi-line Strings
const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// 🔹 Tagged Templates (simple example)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<b>${values[i] || ''}</b>`, '');
}
const nameTag = 'Alice';
const ageTag = 30;
const tagged = highlight`Name: ${nameTag}, Age: ${ageTag}`;
console.log(tagged);
// Output: Name: <b>Alice</b>, Age: <b>30</b>

// ✅ Real-life Example: HTML Templating
function createCard(title, content) {
  return `
    <div class="card">
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
}
console.log(createCard('Cake', 'Delicious vanilla cake.'));

// 🗣️ Interview Tip:
// "Template literals make string building more intuitive—think of them as
// allowing you to write normal text with placeholders rather than chaining or concatenations."
