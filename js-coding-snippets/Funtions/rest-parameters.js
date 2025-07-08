// ======================================================
// 📌 Topic: Rest Parameters `...args` in JavaScript (ES6+)
// ======================================================

/**
 * ✅ What is it?
 * Rest Parameters allow a function to accept an **unlimited number of arguments** as an array using `...args`.
 * 
 * ✅ Why is it useful?
 * - Handles dynamic arguments easily
 * - Useful in calculations, logging, flexible APIs
 * - Avoids using outdated `arguments` object
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function functionName(...args) {
 *     // args is an array of all arguments
 * }
 * 
 * ✅ Real-life example:
 * - Summing numbers of unknown length
 * - Logging multiple values
 * - Building flexible utilities
 */

// 🧠 Basic Example — Rest Parameters
function showAll(...items) {
  console.log(items);
}
showAll(1, 2, 3);
// Output: [1, 2, 3]
showAll("A", "B", "C");
// Output: ["A", "B", "C"]

// ✅ Real-world Example: Sum Unlimited Numbers
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
// Output: 15

// ✅ Using with Other Parameters
function greetAll(greeting, ...names) {
  names.forEach(name => console.log(`${greeting}, ${name}`));
}
greetAll("Hello", "Rohit", "Alice", "Bob");
// Output:
// Hello, Rohit
// Hello, Alice
// Hello, Bob

// ✅ Combining with Regular Parameters
function logDetails(prefix, ...details) {
  console.log(`${prefix}:`, details);
}
logDetails("Info", "User1", "User2", "User3");
// Output: Info: [ 'User1', 'User2', 'User3' ]

// ✅ Handling No Arguments
function logMessages(...messages) {
  if (messages.length === 0) {
    console.log("No messages to log.");
  } else {
    console.log("Messages:", messages);
  }
}
logMessages();
// Output: No messages to log.
logMessages("Hello", "World");
// Output: Messages: [ 'Hello', 'World' ]

// ✅ Using with Array Methods
function collectItems(...items) {
  const uniqueItems = [...new Set(items)];
  console.log("Unique Items:", uniqueItems);
}
collectItems("apple", "banana", "apple", "orange", "banana");
// Output: Unique Items: [ 'apple', 'banana', 'orange' ]

// ✅ Using with Object Destructuring
function displayUserInfo(name, age, ...hobbies) {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log("Hobbies:", hobbies);
}
displayUserInfo("Rohit", 25, "Reading", "Coding", "Gaming");
// Output:
// Name: Rohit, Age: 25
// Hobbies: [ 'Reading', 'Coding', 'Gaming' ]

// ✅ Using with Callback Functions
function processItems(callback, ...items) {
  const processedItems = items.map(item => callback(item));
  console.log("Processed Items:", processedItems);
}
processItems(item => item.toUpperCase(), "apple", "banana", "cherry");
// Output: Processed Items: [ 'APPLE', 'BANANA', 'CHERRY'

// ✅ Emoji/Unicode Example
function emojiParty(...emojis) {
  console.log(`Party time: ${emojis.join(" ")}`);
}
emojiParty("🎉", "🚀", "❤️");
// Output: Party time: 🎉 🚀 ❤️

// ======================================================= //

// ✅ Real-world Example: Building a Cart
function addToCart(...items) {
  return `Added ${items.length} items to cart: ${items.join(", ")}`;
}
console.log(addToCart("Cake", "Cookies", "Brownie"));
// Output: Added 3 items to cart: Cake, Cookies, Brownie

// ✅ Real-world Example: Flexible Logger
function logError(...errors) {
  console.error("Errors:", errors);
}
logError("File not found", "Network error", "Timeout");
// Output: Errors: [ 'File not found', 'Network error', 'Timeout' ]

// ✅ Real-world Example: Dynamic Function Arguments
function dynamicFunction(...args) {
  console.log("Dynamic Function Arguments:", args);
}
dynamicFunction("arg1", 42, true, { key: "value" });
// Output: Dynamic Function Arguments: [ 'arg1', 42, true, { key: 'value' } ]