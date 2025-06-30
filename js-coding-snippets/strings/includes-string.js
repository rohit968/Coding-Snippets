// ======================================================
// 📌 Topic: Checking if a String Contains Text — `.includes()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.includes(substring)` method checks if a string contains the specified substring.
 * It returns `true` if found, otherwise `false`.
 * 
 * ✅ Why is it useful?
 * - Validating user input (email, passwords)
 * - Keyword search filters
 * - Simple condition checks in strings
 * 
 * ✅ How to use it?
 * Syntax: `string.includes(substring, startIndex)`
 * - `substring`: Text to search for (case-sensitive)
 * - `startIndex` (optional): Start searching from this index
 * Returns a boolean (`true` or `false`)
 * 
 * ✅ Real-life example:
 * - Checking if an email contains "@"
 * - Searching for keywords in user messages
 * - Simple case checks for conditional logic
 */

// 🧠 Basic Example
const message = "Welcome to Disneyland!";

console.log(message.includes("Disney"));   // Output: true
console.log(message.includes("disney"));   // Output: false (case-sensitive)
console.log(message.includes("land", 10)); // Output: true (start search from index 10)

// ✅ Real-world use: Validate Email Contains "@"
const email = "rohit@example.com";
if (email.includes("@")) {
  console.log("Valid email ✅");
} else {
  console.log("Invalid email ❌");
}

// ✅ Real-world use: Search for Keywords
const userMessage = "I love JavaScript and coding!";
if (userMessage.includes("JavaScript")) {
  console.log("Found JavaScript keyword! ✅");
} else {
  console.log("JavaScript keyword not found ❌");
} // Output: Found JavaScript keyword! ✅

// ✅ Real-world use: Check for Sensitive Words
const comment = "This is a great product!";
if (comment.includes("great")) {
  console.log("Comment contains positive feedback! ✅");
} else {
  console.log("No positive feedback found ❌");
}
// Output: Comment contains positive feedback! ✅

// ✅ Emoji/Unicode Consideration
const emojiString = "Hello😀World";
console.log(emojiString.includes("😀")); // Output: true

// ✅ Use in Conditions
const username = "PureCravveUser";
if (username.includes("User")) {
  console.log("It's a user profile!");
}

