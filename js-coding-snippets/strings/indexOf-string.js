// ======================================================
// 📌 Topic: Finding First Occurrence in a String — `.indexOf()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.indexOf(substring)` method returns the index (position) of the first occurrence of the specified substring within a string.
 * Returns `-1` if the substring is not found.
 * 
 * ✅ Why is it useful?
 * - Locating specific characters or words
 * - Validating or extracting based on position
 * - Case-sensitive search operations
 * 
 * ✅ How to use it?
 * Syntax: `string.indexOf(substring, startIndex)`
 * - `substring`: Text to search for
 * - `startIndex` (optional): Start searching from this index
 * Returns the position (0-based) or `-1` if not found
 * 
 * ✅ Real-life example:
 * - Finding position of `"@"` in emails
 * - Locating words in sentences
 * - String-based input validations
 */

// 🧠 Basic Example
const message = "Welcome to Google";

console.log(message.indexOf("Google"));   // Output: 11
console.log(message.indexOf("google"));   // Output: -1 (case-sensitive)
console.log(message.indexOf("e"));      // Output: 1 (first occurrence)

// ✅ Using Optional Start Index
console.log(message.indexOf("e", 5));   // Output: 14 (next "e" after index 5)

// ✅ Real-world Example: Email Validation
const email = "rohit@example.com";

const atPosition = email.indexOf("@");
if (atPosition !== -1) {
  console.log(`"@" found at position ${atPosition}`);
} else {
  console.log("Invalid email — '@' missing ❌");
}

// ✅ Emoji/Unicode Consideration
const emojiString = "Hello 😀 World 😀";

console.log(emojiString.indexOf("😀")); // Output: 6 (position of first emoji)
