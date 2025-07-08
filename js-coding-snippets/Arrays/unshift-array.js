// ======================================================
// 📌 Topic: Adding Elements to the Start of an Array — `.unshift()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.unshift()` method adds one or more elements to the **beginning** of an array and returns the new length.
 * 
 * ✅ Why is it useful?
 * - Dynamically growing arrays from the start
 * - Building queues, notifications, or priority lists
 * - Frequently used in real-world apps for managing data order
 * 
 * ✅ How to use it?
 * Syntax: `array.unshift(element1, element2, ..., elementN)`
 * Modifies the original array and returns the updated length.
 * 
 * ✅ Real-life example:
 * - Adding a new task at the front of a queue
 * - Prioritizing important items in lists
 * - Prepending elements dynamically
 */

// 🧠 Basic Example
const colors = ["Green", "Blue"];
const newLength = colors.unshift("Red");
console.log(colors);
// Output: ["Red", "Green", "Blue"]
console.log(newLength);
// Output: 3 (new array length)

// ✅ Adding Multiple Items
colors.unshift("Yellow", "Orange");
console.log(colors);
// Output: ["Yellow", "Orange", "Red", "Green", "Blue"]

// ✅ Emoji/Unicode Consideration
const emojis = ["🚀", "❤️"];
emojis.unshift("😀");
console.log(emojis);
// Output: ["😀", "🚀", "❤️"]

// ✅ Adding Different Data Types
const mixedArray = [1, "Hello", true];
mixedArray.unshift(42, null, { key: "value" });
console.log(mixedArray);
// Output: [42, null, { key: "value" }, 1, "Hello", true]

// ✅ Adding Nested Arrays
const nestedArray = [[3, 4], [5, 6]];
nestedArray.unshift([1, 2]);
console.log(nestedArray);
// Output: [[1, 2], [3, 4], [5, 6]] 

// ✅ Adding Objects
const users = [{ name: "Bob" }, { name: "Charlie" }];
users.unshift({ name: "Alice" });
console.log(users);
// Output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

// ✅ Adding Functions
const functionsArray = [];
functionsArray.unshift(function () { console.log("First Function"); });
functionsArray.unshift(() => console.log("Second Function"));
console.log(functionsArray);
// Output: [ƒ, ƒ] (two functions)

// ====================================================== //

// ✅ Real-world Example: Adding Notifications
const notifications = ["New Message", "Friend Request"];
notifications.unshift("System Alert");
console.log(notifications);
// Output: ["System Alert", "New Message", "Friend Request"]

// ✅ Real-world Example: Adding Tasks to a To-Do List
const todoList = ["Buy Groceries", "Clean Room"];
todoList.unshift("Finish Homework");
console.log(todoList);
// Output: ["Finish Homework", "Buy Groceries", "Clean Room"]

// ✅ Real-world Example: Adding Important Alerts
const alerts = ["Low Battery", "New Update"];
alerts.unshift("Critical Error");
console.log(alerts);
// Output: ["Critical Error", "Low Battery", "New Update"]