// ======================================================
// 📌 Topic: Converting Arrays to Strings — `.join()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.join()` method combines all elements of an array into a single string, separated by a specified delimiter.
 * 
 * ✅ Why is it useful?
 * - Displaying array contents as readable text
 * - Generating CSV-style data
 * - Creating dynamic messages or UI strings
 * 
 * ✅ How to use it?
 * Syntax: `array.join(separator)`
 * - If `separator` is omitted, commas are used by default.
 * 
 * ✅ Real-life example:
 * - Showing a list of items to users
 * - Generating tags, sentences, or file formats
 * - Joining emoji arrays for fun displays
 */

// 🧠 Basic Example
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.join());
// Output: "Apple,Banana,Mango"
console.log(fruits.join(" | "));
// Output: "Apple | Banana | Mango"

// ✅ Joining with No Separator (creates merged string)
console.log(fruits.join(""));
// Output: "AppleBananaMango"

// ✅ Joining with Custom Separator
const colors = ["Red", "Green", "Blue"];
console.log(colors.join(" - "));
// Output: "Red - Green - Blue"

// ✅ Joining Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.join(" | "));
// Output: "1,2 | 3,4 | 5,6"

// ✅ Joining Objects in Arrays
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(users.map(user => user.name).join(", "));
// Output: "Alice, Bob, Charlie"

// ✅ Joining Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!")
];
console.log(functionsArray.map(fn => fn.toString()).join(" | "));
// Output: "function () { console.log("Hello!"); } | () => console.log("World!")"

// ✅ Joining with Different Data Types
const mixedArray = [1, "Hello", true, null];
console.log(mixedArray.join(" - "));
// Output: "1 - Hello - true - " (null is converted to an empty string)

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.join(" "));
// Output: "😀 🚀 ❤️"

// =========================================== //

// ✅ Real-world Example: Display Shopping Cart
const cart = ["Cake", "Cookies", "Brownie"];
const cartSummary = cart.join(", ");
console.log(`Your Cart: ${cartSummary}`);
// Output: "Your Cart: Cake, Cookies, Brownie"

// Real-life Example: Generating a List of Tags
const tags = ["JavaScript", "Coding", "Web Development"];
const tagString = tags.join(" | ");
console.log(`Tags: ${tagString}`);
// Output: "Tags: JavaScript | Coding | Web Development"

// Real-life Example: Creating a Dynamic Message
const userMessages = ["Welcome", "to", "our", "website!"];
const welcomeMessage = userMessages.join(" ");
console.log(welcomeMessage);
// Output: "Welcome to our website!"