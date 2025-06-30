// ======================================================
// 📌 Topic: Removing Extra Spaces — `.trim()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.trim()` method removes whitespace from both the **start** and **end** of a string.
 * It leaves the inner content untouched.
 * 
 * ✅ Why is it useful?
 * - Cleaning up user input from forms
 * - Preventing accidental errors due to extra spaces
 * - Essential for data processing, validation, or formatting
 * 
 * ✅ How to use it?
 * Syntax: `string.trim()`
 * Returns a new string with leading/trailing spaces removed
 * 
 * ✅ Real-life example:
 * - Cleaning email or username fields
 * - Removing unwanted spaces before saving data
 * - Preparing strings for comparisons
 */

// 🧠 Basic Example
const messy = "   Google   ";
console.log(messy.trim());
// Output: "Google"

// ✅ `.trim()` Keeps Inner Spaces Intact
const phrase = "  JavaScript is awesome  ";
console.log(phrase.trim());
// Output: "JavaScript is awesome"

// ✅ Real-world Example: Form Input Cleaning
const emailInput = "   rohit@example.com   ";
const cleanEmail = emailInput.trim();
console.log(cleanEmail);
// Output: "rohit@example.com"

// ✅ Combining `.trim()` with Validation
if (cleanEmail.trim() !== "") {
  console.log("Email is valid ✅");
} else {
  console.log("Email cannot be empty ❌");
}

// ✅ Emoji/Unicode Consideration
const emojiString = "   😀 Hello 😀   ";
console.log(emojiString.trim());
// Output: "😀 Hello 😀"
