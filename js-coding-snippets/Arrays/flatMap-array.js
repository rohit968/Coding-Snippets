// ======================================================
// 📌 Topic: Mapping and Flattening Combined — `.flatMap()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.flatMap()` method first maps each element using a provided function, then flattens the result by one level.
 * 
 * ✅ Why is it useful?
 * - Combines `.map()` and `.flat()` for cleaner, efficient code
 * - Ideal for transforming and flattening arrays in one step
 * - Especially helpful when `.map()` returns arrays
 * 
 * ✅ How to use it?
 * Syntax: `array.flatMap(callback)`
 * The `callback` receives:
 * - `currentValue`: Element value
 * - `index` (optional)
 * - `array` (optional)
 * 
 * ✅ Real-life example:
 * - Splitting strings into words
 * - Transforming lists with nested results
 * - Cleaning structured API responses
 */

// 🧠 Basic Example — Multiply and Duplicate Elements
const numbers = [1, 2, 3];
const doubled = numbers.flatMap(num => [num, num * 2]);
console.log(doubled);
// Output: [1, 2, 2, 4, 3, 6]

// ✅ Splitting Strings into Words
const sentences = ["Hello World", "JavaScript Rocks"];
const words = sentences.flatMap(sentence => sentence.split(" "));
console.log(words);
// Output: ["Hello", "World", "JavaScript", "Rocks"]

// ✅ Transforming Objects with Nested Arrays
const users = [
  { name: "Alice", hobbies: ["Reading", "Hiking"] },
  { name: "Bob", hobbies: ["Cooking"] }
];
const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies);
// Output: ["Reading", "Hiking", "Cooking"]

// ✅ Flattening Arrays of Arrays
const arrays = [[1, 2], [3, 4], [5]];
const a_flattened = arrays.flatMap(arr => arr);
console.log(a_flattened);
// Output: [1, 2, 3, 4, 5]

// ✅ Flattening Nested Numbers with Transformation
const nested = [1, [2, 3], 4];
const flattened = nested.flatMap(num => Array.isArray(num) ? num : [num]);
console.log(flattened);
// Output: [1, 2, 3, 4]

// ✅ Emoji/Unicode Example
const emojiGroups = [["😀", "🚀"], ["❤️"]];
const allEmojis = emojiGroups.flatMap(e => e);
console.log(allEmojis);
// Output: ["😀", "🚀", "❤️"]

// =================================================== //

// ✅ Real-world Example: Expanding Product Tags
const products = [
  { name: "Phone", tags: ["Electronics", "Gadget"] },
  { name: "Cake", tags: ["Food", "Dessert"] }
];
const allTags = products.flatMap(p => p.tags);
console.log(allTags);
// Output: ["Electronics", "Gadget", "Food", "Dessert"]

// ✅ Real-world Example: Flattening User Comments
const comments = [
  { user: "Alice", text: "Great post!", replies: ["Thanks!", "I agree!"] },
  { user: "Bob", text: "Interesting read!", replies: [] }
];
const allReplies = comments.flatMap(comment => comment.replies);
console.log(allReplies);
// Output: ["Thanks!", "I agree!"]