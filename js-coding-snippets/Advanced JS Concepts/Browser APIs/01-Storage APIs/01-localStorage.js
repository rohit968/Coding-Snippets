/* 
📌 What is localStorage?
A key-value storage that allows you to store data in the browser persistently.
Data remains even after the browser is closed.

💡 Why use it?
Useful for saving user preferences, theme, cart items, or tokens without a server.

📚 Syntax:
- localStorage.setItem(key, value)
- localStorage.getItem(key)
- localStorage.removeItem(key)
- localStorage.clear()

⚠️ Values are always stored as strings.
*/

// ✅ Storing data
localStorage.setItem('username', 'Rohit');

// ✅ Retrieving data
const user = localStorage.getItem('username');
console.log(user); // Output: 'Rohit'

// ✅ Removing a specific item
localStorage.removeItem('username');

// ✅ Clearing everything
localStorage.clear();

/* 
💻 Real-world Example:
Saving user's selected theme:
*/
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.body.className = theme;
}

// On page load, apply saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.body.className = savedTheme;

/*
🧠 Interview Tips:
- Only string values: JSON.stringify/parse for objects
- Not secure: don't store tokens or sensitive info
- Synchronous: may cause delay on large data
*/

// 📦 Store object
const userData = { name: "Rohit", age: 25 };
localStorage.setItem("user", JSON.stringify(userData));

// 📦 Retrieve and parse
const parsedData = JSON.parse(localStorage.getItem("user"));
console.log(parsedData.age); // 25
