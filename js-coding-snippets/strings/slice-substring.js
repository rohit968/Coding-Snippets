// ======================================================
// 📌 Topic: Extracting Substrings Using `.slice()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.slice(start, end)` method extracts a section of a string and returns it as a new string, without modifying the original.
 * 
 * ✅ Why is it useful?
 * - Pulls out specific parts of a string (first name, domain from email, etc.)
 * - Flexible: accepts negative indexes to count from the end
 * 
 * ✅ How to use it?
 * Syntax: `string.slice(startIndex, endIndex)`
 * - `startIndex`: Position to begin extraction (0-based)
 * - `endIndex`: (Optional) Stops before this index
 * - If negative index is used, counts from the end of the string
 * 
 * ✅ Real-life example:
 * - Extracting first names from full names
 * - Trimming file extensions
 * - Building substring-based conditions
 */

// 🧠 Basic Example
const fullName = "Rohit Tiwari";

console.log(fullName.slice(0, 5));  // Output: "Rohit"
console.log(fullName.slice(6));     // Output: "Tiwari" (till end)

// ✅ Using negative indexes
const domain = "www.google.com";
console.log(domain.slice(-4));  // Output: ".com"

// ✅ Edge Case: Start index > string length
console.log(fullName.slice(20)); // Output: "" (empty string)

// ✅ Using `.slice()` with emojis (safe with spread operator)
const emojiString = "Hello😀World";
console.log(emojiString.slice(5, 7)); // Outputs garbled part

// Correct approach for emojis:
const emojiSafe = [...emojiString].slice(5, 7).join('');
console.log(emojiSafe); // Output: "😀W"
