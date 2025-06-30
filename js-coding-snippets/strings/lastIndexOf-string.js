// ======================================================
// 📌 Topic: Finding Last Occurrence in a String — `.lastIndexOf()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.lastIndexOf(substring)` method returns the position of the **last occurrence** of the specified substring within a string.
 * Returns `-1` if the substring is not found.
 * 
 * ✅ Why is it useful?
 * - Locating the last instance of a word, character, or symbol
 * - Useful when processing file paths, extensions, or repeating characters
 * - Helps with string validation and extraction tasks
 * 
 * ✅ How to use it?
 * Syntax: `string.lastIndexOf(substring, fromIndex)`
 * - `substring`: Text to search for
 * - `fromIndex` (optional): Start searching backwards from this index
 * Returns the position (0-based) or `-1` if not found
 * 
 * ✅ Real-life example:
 * - Finding the last `"."` in filenames to get the extension
 * - Locating last space in a sentence to extract words
 * - Working with repeated characters
 */

// 🧠 Basic Example
const phrase = "Google Google";

console.log(phrase.lastIndexOf("Goog"));  // Output: 7 (last "Goog")
console.log(phrase.lastIndexOf("e"));     // Output: 12 (last "e")

// ✅ Using Optional fromIndex
console.log(phrase.lastIndexOf("e", 10)); // Output: 4 (last "e" before index 10)

// ✅ Real-world Example: File Extension Extraction
const fileName = "profile.picture.final.jpg";

const lastDot = fileName.lastIndexOf(".");
if (lastDot !== -1) {
  const extension = fileName.slice(lastDot + 1);
  console.log(`File extension is: ${extension}`);
} else {
  console.log("No extension found");
}

// ✅ Helps with string validation and extraction tasks
const sentence = "Learn JavaScript, JavaScript is fun!";
const lastComma = sentence.lastIndexOf(",");
if (lastComma !== -1) {
  const lastPart = sentence.slice(lastComma + 1).trim();
  console.log(`Last part after last comma: "${lastPart}"`);
}
// Output: Last part after last comma: "JavaScript is fun!"

// ✅ Use in Conditions
const text = "PureCravve is awesome!";
if (text.lastIndexOf("awesome") !== -1) {
  console.log("The text contains 'awesome' at the end!");
}
// Output: The text contains 'awesome' at the end!

// ✅ Emoji/Unicode Consideration
const emojiString = "Hello 😀 World 😀";
console.log(emojiString.lastIndexOf("😀")); // Output: 13 (position of last emoji)
console.log(emojiString.lastIndexOf("Hello", 5)); // Output: 0 (position of "Hello" before index 5)