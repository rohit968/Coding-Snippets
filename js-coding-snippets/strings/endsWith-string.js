// ======================================================
// 📌 Topic: Checking If a String Ends with Specific Text — `.endsWith()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.endsWith(substring)` method checks if a string ends with the specified substring.
 * Returns `true` if it ends with the text, otherwise `false`.
 * 
 * ✅ Why is it useful?
 * - Validating file extensions
 * - Ensuring URLs have expected endings (e.g., ".com")
 * - Filtering content based on suffix patterns
 * 
 * ✅ How to use it?
 * Syntax: `string.endsWith(substring, length)`
 * - `substring`: Text to search for at the end
 * - `length` (optional): Consider only the first `length` characters
 * Returns a boolean (`true` or `false`)
 * 
 * ✅ Real-life example:
 * - Checking if a file name ends with `.jpg`, `.pdf`, etc.
 * - Verifying URLs end with `.com`, `.org`
 */

// 🧠 Basic Example
const website = "https://google.com";

console.log(website.endsWith(".com"));   // Output: true
console.log(website.endsWith("google")); // Output: false

// ✅ Using Optional Length Parameter
const sentence = "Learn JavaScript Today";
console.log(sentence.endsWith("JavaScript", 16)); // Output: true

// ✅ Real-world Example: File Type Check
const file = "profile_picture.jpg";

if (file.endsWith(".jpg")) {
  console.log("This is an image file ✅");
} else {
  console.log("Not an image ❌");
}

// ✅ Emoji/Unicode Consideration
const emojiString = "Hello World😀";

console.log(emojiString.endsWith("😀")); // Output: true
