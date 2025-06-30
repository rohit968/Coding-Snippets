// ======================================================
// 📌 Topic: Repeating Strings — `.repeat()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.repeat(count)` method creates a new string consisting of the original string repeated `count` times.
 * 
 * ✅ Why is it useful?
 * - Generating patterns or placeholders
 * - Creating loading animations, formatting, or repeated content
 * - Quick way to multiply string content
 * 
 * ✅ How to use it?
 * Syntax: `string.repeat(count)`
 * - `count`: Number of times to repeat (must be >= 0)
 * Throws a RangeError if count is negative or infinite
 * 
 * ✅ Real-life example:
 * - Making dashed lines for UI separators
 * - Repeating emojis for visual effects
 * - Generating repeated test data
 */

// 🧠 Basic Example
const word = "JS ";
const repeated = word.repeat(3);
console.log(repeated);
// Output: "JS JS JS "

// ✅ Real-world Example: Dashed Line for UI
const separator = "-".repeat(20);
console.log(separator);
// Output: "--------------------"

// ✅ Using `.repeat()` with Emojis
const hearts = "❤️".repeat(5);
console.log(hearts);
// Output: "❤️❤️❤️❤️❤️"

// ✅ Repeating Words with Custom Count
const cheer = "Hooray! ".repeat(2);
console.log(cheer);
// Output: "Hooray! Hooray! "

// ✅ Handling Edge Cases
console.log("Hi".repeat(0)); // Output: "" (empty string)
console.log("Hi".repeat(-1)); // Throws RangeError: repeat count must be non-negative
console.log("Hi".repeat(Infinity)); // Throws RangeError: repeat count must be finite

// ✅ Using with Creating loading animations, formatting, or repeated content
const loading = "Loading... ".repeat(3);
console.log(loading);
// Output: "Loading... Loading... Loading... "
// ✅ Using with Generating repeated test data

const testData = "Test Data ".repeat(4);
console.log(testData);
// Output: "Test Data Test Data Test Data Test Data "