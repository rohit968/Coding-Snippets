// ======================================================
// 📌 Topic: Reversing Array Order — `.reverse()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.reverse()` method reverses the order of elements in an array **in-place**, meaning it modifies the original array.
 * 
 * ✅ Why is it useful?
 * - Reversing lists or sequences
 * - Useful in algorithms or logic-based tasks
 * - Generating mirrored or opposite-order views
 * 
 * ✅ How to use it?
 * Syntax: `array.reverse()`
 * Changes the original array and returns the reversed version.
 * 
 * ✅ Real-life example:
 * - Displaying items in reverse order
 * - Generating palindrome checks
 * - Reversing emoji sequences or user input
 */

// 🧠 Basic Example
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers);
// Output: [5, 4, 3, 2, 1]

// ✅ `.reverse()` Modifies Original Array
const fruits = ["Apple", "Banana", "Mango"];

const reversed = fruits.reverse();
console.log(reversed);
// Output: ["Mango", "Banana", "Apple"]
console.log(fruits);
// Output: ["Mango", "Banana", "Apple"]

// ✅ Reversing Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray.reverse();
console.log(nestedArray);
// Output: [[5, 6], [3, 4], [1, 2]]

// ✅ Reversing Objects in Arrays
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
users.reverse();
console.log(users);
// Output: [{ name: "Charlie" }, { name: "Bob" }, { name: "Alice" }]

// ✅ Reversing Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!")
];
functionsArray.reverse();
console.log(functionsArray);
// Output: [ƒ, ƒ] (functions in reverse order)

// ✅ Reversing with Different Data Types
const mixedArray = [1, "Hello", true, null];
mixedArray.reverse();
console.log(mixedArray);
// Output: [null, true, "Hello", 1]

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
emojis.reverse();
console.log(emojis);
// Output: ["❤️", "🚀", "😀"]

// ====================================================== //

// ✅ Real-world Example: Reverse Message
const message = ["Hello", "from", "PureCravve"];
console.log(message.reverse().join(" "));
// Output: "PureCravve from Hello"

// ✅ Real-life Example: Reversing User Input
const userInput = "JavaScript is fun!";
const reversedInput = userInput.split(" ").reverse().join(" ");
console.log(reversedInput);
// Output: "fun! is JavaScript"

// ✅ Real-life Example: Reversing a List of Tags
const tags = ["JavaScript", "Coding", "Web Development"];
const reversedTags = tags.reverse().join(" | ");
console.log(`Reversed Tags: ${reversedTags}`);
// Output: "Reversed Tags: Web Development | Coding | JavaScript"

// ✅ Real-life Example: Reversing a List of Emojis
const emojiList = ["😀", "🚀", "❤️"];
const reversedEmojis = emojiList.reverse().join(" ");
console.log(`Reversed Emojis: ${reversedEmojis}`);
// Output: "Reversed Emojis: ❤️ 🚀 😀"