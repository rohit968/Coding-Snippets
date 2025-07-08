// ======================================================
// 📌 Topic: Converting Arrays to Strings — `.toString()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.toString()` method converts an array to a comma-separated string.
 * 
 * ✅ Why is it useful?
 * - Quick way to display or log arrays as text
 * - Useful for debugging, output formatting, and basic serialization
 * 
 * ✅ How to use it?
 * Syntax: `array.toString()`
 * Returns a string representation of the array
 * 
 * ✅ Real-life example:
 * - Displaying array contents in UIs
 * - Logging arrays as strings
 * - Simple string conversion without manual looping
 */

// 🧠 Basic Example — Array to String
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString());
// Output: "Apple,Banana,Mango"

// ✅ Arrays with Numbers
const numbers = [1, 2, 3];
console.log(numbers.toString());
// Output: "1,2,3"

// ✅ Mixed Data Types
const mixed = ["Hello", 42, true, null];
console.log(mixed.toString());
// Output: "Hello,42,true,null"

// ✅ Nested Arrays — Flattened One Level
const nested = [1, [2, 3], 4];
console.log(nested.toString());
// Output: "1,2,3,4"


// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.toString());
// Output: "😀,🚀,❤️"

// ===================================================== //

// ✅ Real-world Example: Quick UI Display
const cart = ["Cake", "Cookies", "Brownie"];
const cartText = cart.toString();
console.log(`Items: ${cartText}`);
// Output: "Items: Cake,Cookies,Brownie"
