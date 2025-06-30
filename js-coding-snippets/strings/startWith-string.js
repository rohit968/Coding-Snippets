// ======================================================
// 📌 Topic: Checking If a String Starts with Specific Text — `.startsWith()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.startsWith(substring)` method checks if a string begins with the specified substring.
 * Returns `true` if it starts with the text, otherwise `false`.
 * 
 * ✅ Why is it useful?
 * - Validating prefixes in inputs (URLs, phone numbers, file names)
 * - Conditional logic for string processing
 * - Optimizing search filters by checking beginning patterns
 * 
 * ✅ How to use it?
 * Syntax: `string.startsWith(substring, startIndex)`
 * - `substring`: Text to search for at the beginning
 * - `startIndex` (optional): Start searching from this index
 * Returns a boolean (`true` or `false`)
 * 
 * ✅ Real-life example:
 * - Checking if a website URL starts with "https"
 * - Validating phone numbers start with specific codes
 */

// 🧠 Basic Example
const site = "https://purecravve.com";

console.log(site.startsWith("https"));   // Output: true
console.log(site.startsWith("http"));    // Output: true
console.log(site.startsWith("www"));     // Output: false

// ✅ Using Optional Start Index
const phrase = "JavaScript Snippets Daily";
console.log(phrase.startsWith("Snippets", 11)); // Output: true

// ✅ Real-world Example: Check Phone Number Prefix
const phone = "+91-9876543210";

if (phone.startsWith("+91")) {
  console.log("Indian number ✅");
} else {
  console.log("Different country ❌");
}

// ✅ Emoji/Unicode Consideration
const emojiString = "😀Hello World";

console.log(emojiString.startsWith("😀")); // Output: true
console.log(emojiString.startsWith("Hello", 2)); // Output: true

// ✅ Use in Conditions
const username = "GoogleUser";
if (username.startsWith("Google")) {
  console.log("It's a Google profile!");
} // Output: It's a Google profile!

// ✅ Using `.startsWith()` with non-string values
const num = 12345;
console.log(String(num).startsWith("123")); // Output: true (implicitly converts number to string)

// ✅ Using `.startsWith()` with Optimizing search filters by checking beginning patterns
const searchQuery = "Google";
const items = ["Google", "GoogleUser", "GoogleAdmin"];
const filteredItems = items.filter(item => item.startsWith(searchQuery));
console.log(filteredItems); // Output: ["Google", "GoogleUser", "GoogleAdmin"]
