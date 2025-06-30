// ======================================================
// 📌 Topic: Getting a Character at a Specific Position — `.charAt()`
// ======================================================

/**
 * ✅ What is it?
 * The `.charAt(index)` method returns the character at the specified index of a string.
 * 
 * ✅ Why is it useful?
 * - Helps in processing individual characters in strings
 * - Common in algorithms, validations, and formatting tasks
 * 
 * ✅ How to use it?
 * Syntax: `string.charAt(index)`
 * Index starts at 0 (first character)
 * If index is out of bounds, returns an empty string `""`
 * 
 * ✅ Real-life example:
 * - Checking the first character of a username
 * - Formatting input based on first/last letter
 * - Character-by-character processing (e.g., initials)
 */

// 🧠 Basic Example
const word = "Programming in JavaScript";

console.log(word.charAt(0));  // Output: "P"
console.log(word.charAt(4));  // Output: "g"
console.log(word.charAt(30)); // Output: "" (out of bounds)

// ✅ Common shortcut (but can cause issues with empty strings)
console.log(word[0]); // Output: "P"


const emoji = "😀";
console.log(emoji.charAt(0)); // "�" — incomplete character
console.log([...emoji][0]);   // "😀" — correct
// ✅ Using `.charAt()` with complex strings
