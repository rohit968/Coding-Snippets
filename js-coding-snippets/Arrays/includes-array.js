// ======================================================
// 📌 Topic: Checking for Existence — `.includes()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.includes()` method checks if an array contains a specific element and returns `true` or `false`.
 * 
 * ✅ Why is it useful?
 * - Quickly tests presence of items
 * - Cleaner alternative to `.indexOf()`
 * - Works with strings, numbers, objects (by reference), emojis, etc.
 * 
 * ✅ How to use it?
 * Syntax: `array.includes(element, fromIndex)`
 * - `element`: The item to search for
 * - `fromIndex` (optional): Start search from this index
 * 
 * ✅ Real-life example:
 * - Checking if a product exists in a cart
 * - Validating form inputs
 * - Filtering or toggling items in UI
 */

// 🧠 Basic Example — Check for Value
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));
// Output: true
console.log(numbers.includes(10));
// Output: false

// ✅ Checking Strings
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana"));
// Output: true
console.log(fruits.includes("Grapes"));
// Output: false

// ✅ Real-world Example: Product Exists in Cart
const cart = ["Cake", "Cookies", "Brownie"];
console.log(cart.includes("Cookies"));
// Output: true

// ✅ Using `fromIndex` to Start Search Later
console.log(numbers.includes(2, 2));
// Output: false (starts search at index 2)

// ✅ Using `fromIndex` to Start Search Earlier
console.log(numbers.includes(2, 0));
// Output: true (starts search at index 0)

// ✅ Checking for Empty Arrays
const emptyArray = [];
console.log(emptyArray.includes(1));
// Output: false (array is empty)

// ✅ Checking for Non-Existent Values
console.log(fruits.includes("Pineapple"));
// Output: false (not in the array)

// ✅ Checking for Non-Primitive Types
const mixedArray = [1, "Hello", true, null];
console.log(mixedArray.includes("Hello"));
// Output: true (string is present)

// ✅ Checking Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.includes([3, 4]));
// Output: false (arrays are compared by reference, not value)

// ✅ Checking Objects in Arrays
const users = [{ name: "Alice" }, { name: "Bob" }];
console.log(users.includes({ name: "Alice" }));
// Output: false (objects are compared by reference, not value)

// ✅ Checking Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!")
];
console.log(functionsArray.includes(function () { console.log("Hello!"); }));
// Output: false (functions are compared by reference, not value)


// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.includes("❤️"));
// Output: true

// ✅ Objects Compared by Reference
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
const people = [obj1];
console.log(people.includes(obj1));
// Output: true

console.log(people.includes(obj2));
// Output: false (different object reference)

// ============================================ //

// ✅ Real-world Example: Feature Available Check
const features = ["Login", "Signup", "Dark Mode"];
if (features.includes("Dark Mode")) {
  console.log("Dark Mode is supported!");
}
else {
  console.log("Dark Mode is not available.");
}
// Output: "Dark Mode is supported!"

// ✅ Real-world Example: Validating User Input
const validColors = ["Red", "Green", "Blue"];
const userColor = "Yellow";
if (validColors.includes(userColor)) {
  console.log("Valid color selected.");
}
else {
  console.log("Invalid color selected.");
}
// Output: "Invalid color selected."

// ✅ Real-world Example: Checking if Item is in Wishlist
const wishlist = ["Laptop", "Smartphone", "Headphones"];
const itemToCheck = "Smartphone";
if (wishlist.includes(itemToCheck)) {
  console.log(`${itemToCheck} is in your wishlist.`);
}
else {
  console.log(`${itemToCheck} is not in your wishlist.`);
}
// Output: "Smartphone is in your wishlist."

