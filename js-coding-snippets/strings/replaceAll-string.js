// ======================================================
// 📌 Topic: Replacing All Occurrences in a String — `.replaceAll()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.replaceAll(searchValue, newValue)` method replaces **all occurrences** of `searchValue` with `newValue` in a string.
 * Unlike `.replace()`, this targets every match, not just the first one.
 * 
 * ✅ Why is it useful?
 * - Global text replacements made easy
 * - Cleaning or reformatting large text
 * - Avoids complex RegExp for simple tasks
 * 
 * ✅ How to use it?
 * Syntax: `string.replaceAll(searchValue, newValue)`
 * - `searchValue`: Text or RegExp (as string literal)
 * - `newValue`: Replacement text
 * Returns a new string with all matches replaced
 * 
 * ✅ Real-life example:
 * - Replacing all spaces with dashes for URL slugs
 * - Censoring or masking repeated sensitive words
 * - Global text formatting
 */

// 🧠 Basic Example
const sentence = "JavaScript is great. I love JavaScript.";
const updated = sentence.replaceAll("JavaScript", "JS");
console.log(updated);
// Output: "JS is great. I love JS."

// ✅ Using `.replaceAll()` to Create URL Slugs
const title = "Learn JavaScript in 30 Days";
const slug = title.replaceAll(" ", "-").toLowerCase();
console.log(slug);
// Output: "learn-javascript-in-30-days"

// ✅ Real-world Example: Mask All Digits in Phone Number
const phone = "Call me at 9876543210";
const maskedPhone = phone.replaceAll(/[0-9]/g, "*");
console.log(maskedPhone);
// Output: "Call me at **********"

// ✅ Emoji/Unicode Consideration
const emojiString = "😀 Hello 😀 World 😀";
const replacedEmoji = emojiString.replaceAll("😀", "❤️");
console.log(replacedEmoji);
// Output: "❤️ Hello ❤️ World ❤️"
