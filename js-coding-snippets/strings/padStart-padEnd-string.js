// ======================================================
// 📌 Topic: Padding Strings with `.padStart()` & `.padEnd()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * `.padStart(targetLength, padString)` adds characters to the **beginning** of a string until it reaches the desired length.
 * `.padEnd(targetLength, padString)` adds characters to the **end** of a string until it reaches the desired length.
 * 
 * ✅ Why is it useful?
 * - Formatting numbers with leading zeros
 * - Aligning text in console output
 * - Creating visual placeholders for UI
 * 
 * ✅ How to use it?
 * Syntax:  
 * - `string.padStart(targetLength, padString)`  
 * - `string.padEnd(targetLength, padString)`  
 * 
 * If `padString` is omitted, spaces are added by default.
 * Returns a new padded string.
 * 
 * ✅ Real-life example:
 * - Adding leading zeros to invoice numbers
 * - Aligning price or quantity columns
 * - Creating placeholders for masked data
 */

// 🧠 Basic Example with `.padStart()`
const invoice = "25";
const paddedInvoice = invoice.padStart(5, "0");
console.log(paddedInvoice);
// Output: "00025"

// 🧠 Basic Example with `.padEnd()`
const username = "Rohit";
const paddedName = username.padEnd(10, "_");
console.log(paddedName);
// Output: "Rohit_____"

// ✅ Real-world Example: Masking Card Numbers
const cardLast4 = "7890";
const maskedCard = cardLast4.padStart(16, "*");
console.log(maskedCard);
// Output: "************7890"

// ✅ Real-world Example: Formatting Phone Numbers
const phone = "1234567890";
const formattedPhone = phone.padStart(14, "+1 ");
console.log(formattedPhone);
// Output: "+1 1234567890"


// ✅ Real-world Example: Aligning Dates
const date = "2023-10-05";
const paddedDate = date.padEnd(15, " ");
console.log(paddedDate);
// Output: "2023-10-05     " (padded with spaces to 15 characters)

// ✅ Real-world Example: Formatting IDs
const userId = "42";
const paddedUserId = userId.padStart(6, "0");
console.log(paddedUserId);
// Output: "000042"

// ✅ Real-world Example: Aligning Prices
const price = "9.99";
const paddedPrice = price.padStart(6, "$");
console.log(paddedPrice);
// Output: "$ 9.99"

// ✅ Real-world Example: Aligning Text in Console Output
const product = "Apple";
const paddedProduct = product.padEnd(15, ".");
console.log(paddedProduct);
// Output: "Apple..........."

// ✅ Real-world Example: Creating Placeholders for UI
const placeholder = "Enter your name";
const paddedPlaceholder = placeholder.padEnd(20, "_");
console.log(paddedPlaceholder);
// Output: "Enter your name____"

// ✅ Edge Case: Padding with Empty String
const emptyString = "";
console.log(emptyString.padStart(5, "-"));
// Output: "-----" (5 dashes added)

// ✅ Padding with Emoji/Unicode
const emoji = "🚀";
console.log(emoji.padStart(4, "🌟"));
// Output: "🌟🌟🌟🚀"
