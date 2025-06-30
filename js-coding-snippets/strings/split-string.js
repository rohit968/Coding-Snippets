// ======================================================
// 📌 Topic: Splitting Strings into Arrays — `.split()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.split(separator, limit)` method divides a string into an array of substrings based on the specified separator.
 * It returns a new array containing the split pieces.
 * 
 * ✅ Why is it useful?
 * - Converting text into manageable chunks
 * - Processing CSV, sentences, or words
 * - Parsing data from user input or APIs
 * 
 * ✅ How to use it?
 * Syntax: `string.split(separator, limit)`
 * - `separator`: Text or RegExp to split on (e.g., space `" "`, comma `","`)
 * - `limit` (optional): Maximum number of splits
 * Returns an array of substrings
 * 
 * ✅ Real-life example:
 * - Splitting full names into first and last
 * - Converting comma-separated lists into arrays
 * - Breaking sentences into words for analysis
 */

// 🧠 Basic Example
const sentence = "Learn JavaScript with PureCravve";
const words = sentence.split(" ");
console.log(words);
// Output: ["Learn", "JavaScript", "with", "PureCravve"]

// ✅ Splitting by Character
const letters = "ABCDEF".split("");
console.log(letters);
// Output: ["A", "B", "C", "D", "E", "F"]

// ✅ Using Limit Parameter
const text = "one-two-three-four";
const parts = text.split("-", 2);
console.log(parts);
// Output: ["one", "two"]

// ✅ Real-world Example: CSV Parsing
const csv = "apple,banana,orange";
const fruits = csv.split(",");
console.log(fruits);
// Output: ["apple", "banana", "orange"]

// ✅ Emoji/Unicode Consideration
const emojiString = "😀❤️🚀";
const emojis = emojiString.split("");
console.log(emojis);
// Output: ["😀", "❤️", "🚀"]
// Note: Each emoji is treated as a single character in the array