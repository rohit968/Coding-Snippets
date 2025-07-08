// ======================================================
// 📌 Topic: Removing the First Element — `.shift()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.shift()` method removes the **first element** from an array and returns that element.
 * If the array is empty, it returns `undefined`.
 * 
 * ✅ Why is it useful?
 * - Dynamically managing arrays
 * - Building queues (First In, First Out — FIFO)
 * - Removing oldest or first-inserted items
 * 
 * ✅ How to use it?
 * Syntax: `array.shift()`
 * Modifies the original array by removing its first element.
 * 
 * ✅ Real-life example:
 * - Managing a queue of tasks
 * - Removing the first user from a waiting list
 * - Processing elements in FIFO order
 */

// 🧠 Basic Example
const colors = ["Red", "Green", "Blue"];
const removedColor = colors.shift();
console.log(removedColor);
// Output: "Red"
console.log(colors);
// Output: ["Green", "Blue"]

// ✅ Using `.shift()` on an Empty Array
const emptyArray = [];
console.log(emptyArray.shift());
// Output: undefined

// ✅ Removing Different Data Types
const mixedArray = [1, "Hello", true, null];
console.log(mixedArray.shift());
// Output: 1
console.log(mixedArray);
// Output: ["Hello", true, null]

// ✅ Removing Nested Arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.shift());
// Output: [1, 2]
console.log(nestedArray);
// Output: [[3, 4], [5, 6]]

// ✅ Removing Objects
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
console.log(users.shift());
// Output: { name: "Alice" }
console.log(users);
// Output: [{ name: "Bob" }, { name: "Charlie" }]

// ✅ Removing Functions
const functionsArray = [
  function () { console.log("First Function"); },
  () => console.log("Second Function")
];
console.log(functionsArray.shift());
// Output: ƒ () { console.log("First Function"); }
console.log(functionsArray);
// Output: [() => console.log("Second Function")]

// ✅ Emoji/Unicode Consideration
const emojis = ["😀", "🚀", "❤️"];
console.log(emojis.shift());
// Output: "😀"
console.log(emojis);
// Output: ["🚀", "❤️"]

// ====================================================== //

// ✅ Real-world Example: Removing First User in Queue
const queue = ["User1", "User2", "User3"];
console.log(queue.shift());
// Output: "User1"
console.log(queue);
// Output: ["User2", "User3"]

// Real-world Example: Processing Tasks in FIFO Order
const tasks = ["Task1", "Task2", "Task3"];
console.log(tasks.shift());
// Output: "Task1"
console.log(tasks);
// Output: ["Task2", "Task3"]

// Real-life Example: Processing User Inputs
const userInputs = ["Input1", "Input2", "Input3"];
console.log(userInputs.shift());
// Output: "Input1"
console.log(userInputs);
// Output: ["Input2", "Input3"]

// Real-life Example: Removing First Item from a List
const shoppingList = ["Milk", "Eggs", "Bread"];
console.log(shoppingList.shift());
// Output: "Milk"
console.log(shoppingList);
// Output: ["Eggs", "Bread"]

// Real-life Example: Managing a Waiting List
const waitingList = ["Person1", "Person2", "Person3"];
console.log(waitingList.shift());
// Output: "Person1"
console.log(waitingList);
// Output: ["Person2", "Person3"]
