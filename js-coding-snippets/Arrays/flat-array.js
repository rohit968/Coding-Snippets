// ======================================================
// 📌 Topic: Flattening Nested Arrays — `.flat()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.flat()` method creates a new array with all sub-array elements flattened into a single array, up to the specified depth.
 * 
 * ✅ Why is it useful?
 * - Removes nesting from arrays
 * - Simplifies deeply nested structures
 * - Useful for processing multi-level data
 * 
 * ✅ How to use it?
 * Syntax: `array.flat(depth)`
 * - `depth` (optional): How deep to flatten (default is 1)
 * 
 * ✅ Real-life example:
 * - Flattening nested lists
 * - Cleaning API data
 * - Working with multi-dimensional arrays
 */

// 🧠 Basic Example — Flatten One Level
const nested = [1, 2, [3, 4], [5, 6]];
const flat = nested.flat();
console.log(flat);
// Output: [1, 2, 3, 4, 5, 6]

// ✅ Flattening Multiple Levels
const deepNested = [1, [2, [3, [4, 5]]]];
const flatOnce = deepNested.flat();
console.log(flatOnce);
// Output: [1, 2, 2, [3, [4, 5]]]

const flatTwice = deepNested.flat(2);
console.log(flatTwice);
// Output: [1, 2, 3, [4, 5]]

const fullyFlat = deepNested.flat(3);
console.log(fullyFlat);
// Output: [1, 2, 3, 4, 5]

// ✅ Flatten with Missing or Empty Slots
const sparse = [1, , 2, [3, , 4]];
console.log(sparse.flat());
// Output: [1, 2, 3, 4]

// ✅ Flattening Objects in Arrays
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  [{ name: "Charlie", age: 35 }]
];
const flatUsers = users.flat();
console.log(flatUsers);
// Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// ✅ Flattening Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!"),
  [[() => console.log("Nested Function")]]
];
const flatFunctions = functionsArray.flat();
console.log(flatFunctions);
// Output: [ƒ, ƒ, ƒ] (three functions)
// Calling the functions
flatFunctions.forEach(func => {
  if (typeof func === 'function') {
    func();
  }
});
// Output:
// Hello!
// World!
// Nested Function


// ✅ Emoji/Unicode Example
const emojiNested = [["😀", "🚀"], ["❤️"]];
const flatEmojis = emojiNested.flat();
console.log(flatEmojis);
// Output: ["😀", "🚀", "❤️"]


// ======================================================= //

// ✅ Real-world Example: Flatten Product Categories
const categories = ["Electronics", ["Phones", "Laptops"], ["Tablets", ["Accessories"]]];
const flatCategories = categories.flat(2);
console.log(flatCategories);
// Output: ["Electronics", "Phones", "Laptops", "Tablets", "Accessories"]

// ✅ Real-world Example: Flattening User Comments
const comments = [
  "Great post!",
  ["Thanks!", "I agree!"],
  ["Interesting read", ["Loved it!", "Very informative"]]
];
const flatComments = comments.flat(2);
console.log(flatComments);
// Output: ["Great post!", "Thanks!", "I agree!", "Interesting read", "Loved it!", "Very informative"]
