// ======================================================
// 📌 Topic: Finding Array Length — `.length` Property in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.length` property returns the total number of elements present in an array.
 * 
 * ✅ Why is it useful?
 * - Checking array size
 * - Looping through arrays
 * - Dynamic conditions based on array content
 * 
 * ✅ How to use it?
 * Syntax: `array.length`
 * Returns the count of elements as a number.
 * 
 * ✅ Real-life example:
 * - Controlling loops
 * - Checking if an array is empty
 * - Displaying item counts in UI
 */

// 🧠 Basic Example
const colors = ["Red", "Green", "Blue"];
console.log(colors.length);
// Output: 3

// ✅ Using `.length` in Loops
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Output: "Red", "Green", "Blue"

// ✅ Checking for Empty Arrays
const cart = [];
if (cart.length === 0) {
  console.log("Cart is empty 🛒");
} else {
  console.log("You have items in the cart");
}

// ✅ Dynamic Conditions
const numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("You have more than 3 numbers");
}
// Output: "You have more than 3 numbers"

// ✅ Using `.length` with Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.length);
// Output: 3 (number of sub-arrays)

// ✅ Using `.length` with Objects in Arrays
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(users.length);
// Output: 3 (number of user objects)

// ✅ Using `.length` with Functions in Arrays
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function")
];
console.log(functionsArray.length);
// Output: 2 (number of functions)

// ✅ Using `.length` with Mixed Data Types
const mixedArray = [1, "Hello", true, null];
console.log(mixedArray.length);
// Output: 4 (number of elements)


// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.length);
// Output: 3


// ====================================================== //

// ✅ Real-world Example: Displaying Cart Item Count
const cartItems = ["Cake", "Cookies", "Brownie"];
console.log(`You have ${cartItems.length} items in your cart`);
// Output: "You have 3 items in your cart"


// ✅ Real-world Example: Display Item Count
const tasks = ["Fix bug", "Review code"];
console.log(`You have ${tasks.length} tasks`);
// Output: "You have 2 tasks"