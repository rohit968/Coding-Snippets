// ======================================================
// 📌 Topic: Iterating Over Arrays — `.forEach()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.forEach()` method executes a provided function once for each array element.
 * 
 * ✅ Why is it useful?
 * - Simplifies looping through arrays
 * - Ideal for performing actions like printing, updating UI, or side effects
 * - Makes code more readable than traditional loops
 * 
 * ✅ How to use it?
 * Syntax: `array.forEach(callback)`
 * The `callback` function receives:
 * - `currentValue`: The current element
 * - `index` (optional): The index of the element
 * - `array` (optional): The array itself
 * 
 * ✅ Real-life example:
 * - Printing each item of a list
 * - Rendering UI elements for each array item
 * - Logging, debugging, or applying actions
 */

// 🧠 Basic Example
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// Apple
// Banana
// Mango

// ✅ Using Arrow Function
fruits.forEach((fruit) => console.log(fruit));

// ✅ Accessing Index
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Mango

// ✅ Using `thisArg` (optional)
const context = { prefix: "Fruit: " };
fruits.forEach(function (fruit) {
  console.log(this.prefix + fruit);
}
  , context);
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Mango
// ✅ Using `thisArg` with Arrow Function (not recommended, as arrow functions don't bind `this`)
fruits.forEach((fruit) => {
  console.log(this.prefix + fruit);
}, context);
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Mango

// ✅ Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray.forEach((subArray, index) => {
  console.log(`Sub-array ${index}: ${subArray}`);
});
// Output:
// Sub-array 0: 1,2
// Sub-array 1: 3,4
// Sub-array 2: 5,6

// ✅ Objects in Arrays
const new_users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
users.forEach((user, index) => {
  console.log(`User ${index + 1}: ${user.name}, Age: ${user
    .age}`);
});
// Output:
// User 1: Alice, Age: 25
// User 2: Bob, Age: 30
// User 3: Charlie, Age: 35

// ✅ Functions in Arrays
const functionsArray = [
  function () { console.log("Hello!"); },
  () => console.log("World!"),
  () => console.log("JavaScript!")
];
functionsArray.forEach((func, index) => {
  console.log(`Function ${index + 1}:`);
  func(); // Call the function
}
);
// Output:
// Function 1:
// Hello!
// Function 2:
// World!
// Function 3:
// JavaScript!


// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
emojis.forEach((emoji, idx) => {
  console.log(`Emoji ${idx + 1}: ${emoji}`);
});


// ======================================================= //

// ✅ Real-world Example: Display Shopping Cart
const cart = ["Cake", "Cookies", "Brownie"];
cart.forEach((item, i) => {
  console.log(`Item ${i + 1}: ${item}`);
});
// Output:
// Item 1: Cake
// Item 2: Cookies
// Item 3: Brownie

// ✅ Real-world Example: Total Price Calculation (Side-effect only, no return)
const prices = [100, 200, 300];
let total = 0;
prices.forEach(price => {
  total += price;
});
console.log(`Total Price: ₹${total}`);

// ✅ Important: `.forEach()` Doesn't Return New Array
const nums = [1, 2, 3];
const result = nums.forEach(num => console.log(num));
console.log(result);
// Output: undefined

// ✅ Cannot Break or Exit Early from `.forEach()`
// `.forEach()` will always iterate through all elements
// Example of `.forEach()` iterating through all elements
nums.forEach(num => {
  console.log(num);
}
);
// Output:  
// 1
// 2  
// 3


// Use `.some()` or `.for` loops if you need to exit early
// Example of `.some()` to exit early
const found = nums.some(num => {
  if (num === 2) {
    console.log("Found 2, exiting loop");
    return true; // Stops the loop
  }
  return false; // Continues the loop
});
console.log(found);
// Output: Found 2, exiting loop


// ✅ Real-world Example: Filtering with `.forEach()`
const items = ["Apple", "Banana", "Cherry", "Date"];
const filteredItems = [];
items.forEach(item => {
  if (item.startsWith("A")) {
    filteredItems.push(item);
  }
});
console.log(filteredItems);
// Output: ["Apple"]

// ✅ Real-world Example: Updating UI Elements
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
users.forEach(user => {
  // Simulate updating UI
  console.log(`User: ${user.name}, Age: ${user.age}`);
});
// Output:
// User: Alice, Age: 25
// User: Bob, Age: 30
// User: Charlie, Age: 35

// ✅ Real-world Example: Logging User Actions
const actions = ["Login", "View Profile", "Logout"];
actions.forEach(action => {
  console.log(`User performed action: ${action}`);
});
// Output:
// User performed action: Login
// User performed action: View Profile
// User performed action: Logout

// ✅ Real-world Example: Sending Notifications
const notifications = ["New Message", "Friend Request", "Event Reminder"];
notifications.forEach(notification => {
  // Simulate sending notification
  console.log(`Notification sent: ${notification}`);
});
// Output:
// Notification sent: New Message
// Notification sent: Friend Request
// Notification sent: Event Reminder
