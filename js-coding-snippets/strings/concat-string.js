// ======================================================
// 📌 Topic: Combining Strings — `.concat()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.concat()` method joins two or more strings into one new string.
 * Original strings remain unchanged.
 * 
 * ✅ Why is it useful?
 * - Building dynamic messages
 * - Combining names, text, or user input
 * - Useful alternative to `+` for string joining
 * 
 * ✅ How to use it?
 * Syntax: `string.concat(str1, str2, ..., strN)`
 * You can pass multiple strings to concatenate.
 * 
 * ✅ Real-life example:
 * - Building greetings or custom UI text
 * - Generating file names or paths
 * - Assembling dynamic sentences
 */

// 🧠 Basic Example
const firstName = "Rohit";
const lastName = "Tiwari";
const fullName = firstName.concat(" ", lastName);
console.log(fullName);
// Output: "Rohit Tiwari"

// ✅ Concatenating Multiple Strings
const sentence = "JavaScript".concat(" ", "is", " ", "awesome!");
console.log(sentence);
// Output: "JavaScript is awesome!"

// ✅ Real-world Example: Generating File Names
const base = "invoice_";
const id = "12345";
const fileName = base.concat(id, ".pdf");
console.log(fileName);
// Output: "invoice_12345.pdf"

// ✅ Real-world Example: Dynamic URL
const domain = "example.com";
const path = "/api/data";
const url = "https://".concat(domain, path);
console.log(url);
// Output: "https://example.com/api/data"

// ✅ Emoji/Unicode Consideration
const emoji = "😀";
const heart = "❤️";
const combined = emoji.concat(heart);
console.log(combined);
// Output: "😀❤️"
// Note: Emojis are treated as single characters in the concatenation