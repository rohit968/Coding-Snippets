// ======================================================
// 📌 Topic: Default Parameters in JavaScript (ES6+)
// ======================================================

/**
 * ✅ What is it?
 * Default Parameters allow functions to assign default values to parameters when no argument is provided or `undefined` is passed.
 * 
 * ✅ Why is it useful?
 * - Avoids `undefined` in outputs
 * - Makes functions more robust
 * - Reduces need for manual checks
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function functionName(param = defaultValue) {
 *     // code
 * }
 * 
 * ✅ Real-life example:
 * - Providing fallback values
 * - Simplifying function calls
 * - Avoiding errors in missing data
 */

// 🧠 Basic Example — Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet();
// Output: "Hello, Guest"
greet("Rohit");
// Output: "Hello, Rohit"

// ✅ Default Parameters with Multiple Arguments
function calculateTotal(price, tax = 5) {
  return price + (price * (tax / 100));
}
console.log(calculateTotal(100));
// Output: 105 (tax = 5%)
console.log(calculateTotal(100, 10));
// Output: 110

// ✅ Default Values Based on Expressions
function generateID(prefix = "ID", number = Date.now()) {
  return `${prefix}-${number}`;
}
console.log(generateID());
// Output: ID-<timestamp>
console.log(generateID("USER"));
// Output: USER-<timestamp>

// ✅ Default Parameters with Objects
function createUser(name, age = 18, isActive = true) {
  return {
    name: name,
    age: age,
    isActive: isActive
  };
}
console.log(createUser("Alice"));
// Output: { name: "Alice", age: 18, isActive: true }

// ✅ Default Parameters with Arrays
function logItems(items = []) {
  items.forEach(item => {
    console.log(`Item: ${item}`);
  });
}
logItems();
// Output: (no items logged)
logItems(["Apple", "Banana"]);
// Output:
// Item: Apple
// Item: Banana

// ✅ Default Parameters with Functions
function executeCallback(callback = () => console.log("No callback provided")) {
  callback();
}
executeCallback();
// Output: "No callback provided"
executeCallback(() => console.log("Callback executed!"));
// Output: "Callback executed!"


// ✅ Emoji/Unicode Example
function showEmoji(emoji = "❤️") {
  console.log(`Your emoji: ${emoji}`);
}
showEmoji();
// Output: "Your emoji: ❤️"
showEmoji("🚀");
// Output: "Your emoji: 🚀"

// ======================================================= //

// ✅ Real-world Example: Customizable Greetings
function welcomeUser(name = "User", emoji = "👋") {
  console.log(`${emoji} Welcome, ${name}`);
}
welcomeUser();
// Output: "👋 Welcome, User"
welcomeUser("Alice", "🚀");
// Output: "🚀 Welcome, Alice"

// ✅ Real-world Example: Configurable API Request
function fetchData(url = "https://api.example.com/data", method = "GET") {
  console.log(`Fetching data from ${url} using ${method} method`);
  // Simulate fetching data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}
fetchData();
// Output: "Fetching data from https://api.example.com/data using GET method"
fetchData("https://api.example.com/users", "POST");
// Output: "Fetching data from https://api.example.com/users using POST method" 
fetchData("https://api.example.com/products");
// Output: "Fetching data from https://api.example.com/products using GET method"
