// ======================================================
// 📌 Topic: Accessing Array Elements by Index — `.at()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.at()` method returns the element at the specified index of an array.
 * Supports both positive and negative indexes.
 * 
 * ✅ Why is it useful?
 * - Cleaner and safer than bracket `[]` access
 * - Negative indexes access elements from the end of the array
 * - Avoids common index calculation errors
 * 
 * ✅ How to use it?
 * Syntax: `array.at(index)`
 * Returns the element at the given position or `undefined` if out of bounds
 * 
 * ✅ Real-life example:
 * - Fetching first/last items cleanly
 * - Cleaner code for accessing end elements
 * - Reduces manual index math
 */

// 🧠 Basic Example — Positive Index
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.at(0));
// Output: "Apple"
console.log(fruits.at(2));
// Output: "Mango"

// ✅ Negative Index — From End
console.log(fruits.at(-1));
// Output: "Mango"
console.log(fruits.at(-2));
// Output: "Banana"

// ✅ Out of Bounds
console.log(fruits.at(5));
// Output: undefined

// ✅ Traditional vs `.at()` Comparison
console.log(fruits[fruits.length - 1]);
// "Mango" (Manual math)
console.log(fruits.at(-1));
// "Mango" (Cleaner and direct)

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.at(-1));
// Output: "❤️"

// ==================================================== //

// ✅ Real-world Example: Get Last Product
const products = ["Cake", "Cookies", "Brownie"];
console.log(products.at(-1));
// Output: "Brownie"
