/* 
============================
🌐 BOM - Window Object
============================

🧠 1. What is the window object?
The window object is the global object in the browser. Every variable or function declared globally (with var) becomes a property of window.

❓ 2. Why does it matter?
Because it holds everything — your DOM, location, history, navigator, console, storage, and many browser methods like alert(), confirm(), prompt(), etc.

💡 3. Why and when to use it?
To control browser-level behavior (e.g., opening popups, getting viewport size, setting timers).

To access global properties or check if a variable is truly global.

For debugging and understanding JavaScript scope in browsers.
4️⃣ Snippets:
--------------
*/

// window is the global object in browsers
console.log(window === this); // true

// Accessing a global variable
var myName = "Rohit";
console.log(window.myName); // "Rohit"

// Global function becomes method of window
function greet() {
  console.log("Hello!");
}
window.greet(); // Hello!

// Alert box
window.alert("This is an alert box!");

// Confirm box (returns true/false)
const proceed = window.confirm("Do you want to continue?");
console.log("User response:", proceed);

// Prompt box (returns user input)
const name = window.prompt("What is your name?");
console.log("User entered:", name);


/*
5️⃣ Real-World Examples:
-------------------------
Form Validation Alert: Show a warning if the form is incomplete:
window.alert("Please complete all fields.")
Example:
--------
*/

//Confirm before deleting
const confirmed = window.confirm("Delete this product?");
if (confirmed) {
  deleteProduct();
}

//Prompt for Customization
const theme = window.prompt("Choose theme: light or dark?");
applyTheme(theme);


/*
6️⃣ Interview Tips:
--------------------
❓ Q: What's the difference between var, let, and const in relation to window?
✅ A: Only var adds the variable to the window object. let and const do not.

❓ Q: What is window.alert() and should we use it in production?
✅ A: It's used to show a modal alert, but avoid it in production due to poor UX and blocking behavior.
*/

