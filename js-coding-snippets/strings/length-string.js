// ======================================================
// 📌 Topic: Finding String Length in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.length` property gives the total number of characters in a string, including spaces and symbols.
 * 
 * ✅ Why is it useful?
 * - Knowing the string length is essential for validation, formatting, and logic conditions.
 * - Used in building character limits, form checks, or text processing.
 * 
 * ✅ How to use it?
 * Syntax: `string.length`
 * It returns a number representing the character count.
 * 
 * ✅ Real-life example:
 * - Checking if a username exceeds allowed length.
 * - Limiting text in a UI to prevent overflow.
 */

// 🧠 Snippet
const username = "JohnDoe123";

console.log(username.length);
// Output: 10

// Example with spaces and symbols
const message = "Hello, World!";

console.log(message.length);
// Output: 13

// ======================================================
// ⚠️ Special Case: Emojis & Complex Unicode Characters
// ======================================================

/**
 * Some emojis or special symbols use multiple UTF-16 code units,
 * so `.length` might not match the number of visible characters.
 */

const emoji = "😀";
console.log(emoji.length); // Output: 2 (technically two code units)

// ✅ Correct way to count visible characters:
console.log([...emoji].length); // Output: 1

const complex = "Rohit😀🚀";
console.log(complex.length); // Output: 9 (code units)
console.log([...complex].length); // Output: 7 (true visible characters)
