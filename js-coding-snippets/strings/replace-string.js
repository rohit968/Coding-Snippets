// ======================================================
// 📌 Topic: Replacing Part of a String — `.replace()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.replace(searchValue, newValue)` method replaces the **first occurrence** of `searchValue` with `newValue` in a string.
 * The original string remains unchanged (strings are immutable).
 * 
 * ✅ Why is it useful?
 * - Modifying specific text in strings
 * - Cleaning up or formatting data
 * - Replacing sensitive or unwanted content
 * 
 * ✅ How to use it?
 * Syntax: `string.replace(searchValue, newValue)`
 * - `searchValue`: Text or RegExp to search for (only first match replaced)
 * - `newValue`: Text to replace it with
 * Returns a new string with the replacement
 * 
 * ✅ Real-life example:
 * - Replacing specific words in sentences
 * - Masking email domains for privacy
 * - Quick text cleanup
 */

// 🧠 Basic Example
const sentence = "I love JavaScript. JavaScript is awesome.";
const updated = sentence.replace("JavaScript", "JS");
console.log(updated);
// Output: "I love JS. JavaScript is awesome."

// ✅ Using Regular Expressions (case-insensitive, global flags)
const text = "Google google GOOGLE";
const replacedText = text.replace(/google/i, "GoogleOfficial");
console.log(replacedText);
// Replaces first "google" regardless of case

// ✅ Real-world Example: Mask Email Domain
const email = "rohit@example.com";
const masked = email.replace(/@.*/, "@*****.com");
console.log(masked); // Output: "rohit@*****.com"

// ✅ Emoji/Unicode Consideration
const emojiString = "I love 😀 emoji.";
console.log(emojiString.replace("😀", "❤️"));
// Output: "I love ❤️ emoji."

// ✅ Using with Cleaning up or formatting data
const messyData = "  Hello   World!  ";
const cleanedData = messyData.replace(/\s+/g, " ").trim();
console.log(cleanedData);
// Output: "Hello World!"