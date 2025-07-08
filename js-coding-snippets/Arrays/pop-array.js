// ======================================================
// 📌 Topic: Removing the Last Element — `.pop()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.pop()` method removes the **last element** from an array and returns that element.
 * If the array is empty, it returns `undefined`.
 * 
 * ✅ Why is it useful?
 * - Dynamically shrinking arrays
 * - Building stacks or undo functionality
 * - Managing last-in, first-out (LIFO) operations
 * 
 * ✅ How to use it?
 * Syntax: `array.pop()`
 * Modifies the original array by removing its last element.
 * 
 * ✅ Real-life example:
 * - Removing the last item added to a cart
 * - Building "undo" features in apps
 * - Managing stacks in algorithms
 */

// 🧠 Basic Example
const colors = ["Red", "Green", "Blue"];
const removedColor = colors.pop();
console.log(removedColor);
// Output: "Blue"
console.log(colors);
// Output: ["Red", "Green"]

// ✅ Using `.pop()` on an Empty Array
const emptyArray = [];
console.log(emptyArray.pop());
// Output: undefined

// ✅ Removing Different Data Types
const mixedArray = [1, "Hello", true, null];
console.log(mixedArray.pop());
// Output: null
console.log(mixedArray);
// Output: [1, "Hello", true]

// ✅ Removing Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.pop());
// Output: [5, 6]
console.log(nestedArray);
// Output: [[1, 2], [3, 4]]

// ✅ Removing Objects
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(users.pop());
// Output: { name: "Charlie" }
console.log(users);
// Output: [{ name: "Alice" }, { name: "Bob" }]

// ✅ Removing Functions
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function")
];
console.log(functionsArray.pop());
// Output: ƒ () { console.log("Second Function"); }
console.log(functionsArray);
// Output: [ƒ () { console.log("First Function"); }]

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.pop());
// Output: "❤️"
console.log(emojis);
// Output: ["😀", "🚀"]


// ====================================================== //

// ✅ Real-world Example: Removing Items from Cart
const cart = ["Cake", "Cookies", "Brownie"];
console.log(cart.pop());
// Output: "Brownie"
console.log(cart);
// Output: ["Cake", "Cookies"]

// Real-world Example: Undo Functionality
const actions = ["Add Item", "Remove Item", "Update Item"];
console.log(actions.pop());
// Output: "Update Item"
console.log(actions);
// Output: ["Add Item", "Remove Item"]

// Real-life Example: Managing a Stack
const stack = [1, 2, 3, 4];
console.log(stack.pop());
// Output: 4
console.log(stack);
// Output: [1, 2, 3]

