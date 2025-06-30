// ======================================================
// 📌 Topic: Extracting Parts of a String — `.substring()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.substring(startIndex, endIndex)` method extracts a portion of a string between two specified indexes.
 * 
 * ✅ Why is it useful?
 * - Extracting words, characters, or sections of strings
 * - Handling user input or formatting output
 * - Alternative to `.slice()` for basic string slicing
 * 
 * ✅ How to use it?
 * Syntax: `string.substring(startIndex, endIndex)`
 * - `startIndex`: The position to start extraction (included)
 * - `endIndex` (optional): Position to stop extraction (excluded)
 * 
 * If `endIndex` is omitted, extracts till the end.
 * Negative values are treated as 0.
 * Swaps start and end if `startIndex > endIndex`.
 * 
 * ✅ Real-life example:
 * - Getting first name from full name
 * - Extracting domain from email
 * - Isolating substrings based on logic
 */

// 🧠 Basic Example
const phrase = "RohitTiwari";
console.log(phrase.substring(0, 4));
// Output: "Rohi"

console.log(phrase.substring(4));
// Output: "Tiwari"

// ✅ `.substring()` Swaps Start & End if Needed
console.log(phrase.substring(7, 2));
// Output: "Tiwari" (swaps to extract from 2 to 7)

// ✅ Negative Values Treated as 0
console.log(phrase.substring(-3, 4));
// Output: "Rohi" (negative treated as 0)

// ✅ Real-world Example: Extract First Name
const fullName = "Rohit Tiwari";
const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log(firstName);
// Output: "Rohit"

// ✅ Extract Domain from Email
const email = "www.google.com";
const domain = email.substring(email.indexOf(".") + 1);
console.log(domain);
// Output: "google.com"
// ✅ Extract File Name from Path
const filePath = "/user/documents/report.pdf";
const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
console.log(fileName);
// Output: "report.pdf"

// ✅ Isolate Substring Based on Logic
const sentence = "Learn JavaScript Today";
const lastSpace = sentence.lastIndexOf(" ");
const lastPart = sentence.substring(lastSpace + 1);
console.log(lastPart);
// Output: "Today"

// ✅ Emoji/Unicode Consideration
const emojiString = "😀 Hello 🚀";
console.log(emojiString.substring(0, 7));
// Output may depend on emoji length handling
// Using spread operator to handle emojis correctly
const emojiSafe = [...emojiString].substring(0, 7).join('');
console.log(emojiSafe);
// Output: "😀 Hello" (handles emojis correctly)