// ======================================================
// 📌 Topic: Changing String Case — `.toUpperCase()` & `.toLowerCase()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `.toUpperCase()` converts all letters in a string to uppercase.  
 * `.toLowerCase()` converts all letters in a string to lowercase.  
 * The original string remains unchanged (strings are immutable).
 * 
 * ✅ Why is it useful?
 * - Case-insensitive comparisons (login forms, search filters)
 * - Standardizing user input (emails, usernames)
 * - Styling/display purposes in UI
 * 
 * ✅ How to use it?
 * Syntax: 
 * - `string.toUpperCase()`
 * - `string.toLowerCase()`
 * Returns a new string in the desired case.
 * 
 * ✅ Real-life example:
 * - Forcing email input to lowercase before saving to a database
 * - Making search filters case-insensitive
 * - Displaying names in uppercase for headings
 */

// 🧠 Basic Example
const name = "John Doe";

console.log(name.toUpperCase()); // Output: "JOHN DOE"
console.log(name.toLowerCase()); // Output: "john doe"

// ✅ Case-insensitive comparison
const userInput = "JohnDOE";
const correct = "johndoe";

if (userInput.toLowerCase() === correct.toLowerCase()) {
  console.log("Match Found ✅");
} else {
  console.log("No Match ❌");
}

// ✅ Unicode/Emoji Note:
const emojiString = "Rohit😀";
console.log(emojiString.toUpperCase()); // Output: "ROHIT😀" (emojis unaffected)

// ✅ Complex Example: Emails
const emailInput = "Rohit.Tiwari@Example.Com";
const standardizedEmail = emailInput.toLowerCase();
console.log(standardizedEmail); // Output: "rohit.tiwari@example.com"

// ✅ Using with template literals
const firstName = "Rohit";
const lastName = "Tiwari";
const fullName = `${firstName.toUpperCase()} ${lastName.toLowerCase()}`;
console.log(fullName); // Output: "ROHIT tiwari"

// ✅ Using with non-string values
const num = 12345;
console.log(String(num).toUpperCase()); // Output: "12345" (numbers remain unchanged)
const bool = true;
console.log(String(bool).toLowerCase()); // Output: "true" (boolean converted to string and then to lowercase)
