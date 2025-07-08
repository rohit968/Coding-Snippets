// ======================================================
// 📌 Topic: Callback Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **Callback Function** is a function passed as an argument to another function, which is executed after some operation or when a specific condition is met.
 * 
 * ✅ Why is it useful?
 * - Controls execution flow, especially for asynchronous operations
 * - Helps structure modular and reusable code
 * - Essential for real-world scenarios like:
 *    ✔️ Event handling
 *    ✔️ API calls
 *    ✔️ Array processing
 *    ✔️ Timers
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * function task(callback) {
 *    // do some work
 *    callback();
 * }
 * 
 * Pass either:
 * - Named function: `task(myFunction);`
 * - Anonymous function: `task(() => { ... });`
 * 
 * ✅ Real-life examples:
 * - Executing logic after user interaction
 * - Handling API responses
 * - Performing steps in order (even if asynchronous)
 */

// 🧠 Passing Named Function as Callback
function showMessage() {
  console.log("✅ Callback executed: Hello from PureCravve!");
}

function greetUser(name, callback) {
  console.log(`👋 Hello, ${name}`);
  callback();
}
greetUser("Rohit", showMessage);
// Output:
// 👋 Hello, Rohit
// ✅ Callback executed: Hello from PureCravve!

// ✅ Passing Anonymous Function as Callback
greetUser("Rohit", () => {
  console.log("✅ Anonymous callback executed!");
});

// ✅ Using Callback in Asynchronous Operation
console.log("⏳ Start");
setTimeout(() => {
  console.log("✅ Callback executed after 2 seconds (setTimeout)");
}, 2000);

console.log("⏳ End");

// ✅ Array Processing with Callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled Array:", doubled);
// Output: [2, 4, 6, 8, 10]



// ✅ Emoji/Unicode Example with Callback
const emojis = ["🚀", "❤️", "😀"];
emojis.forEach(e => {
  console.log(`✨ Emoji: ${e}`);
});

// ======================================================== //

// ✅ Real-world Example: Simulating API with Callback
function fetchData(callback) {
  console.log("📡 Fetching data...");
  setTimeout(() => {
    console.log("✅ Data fetched");
    callback("🍪 Your Cookies are ready!");
  }, 1500);
}
fetchData((data) => {
  console.log("🎉 Result:", data);
});

// ✅ Real-world Example: Chaining Asynchronous Operations with Callbacks
function loginUser(username, password, callback) {
  console.log(`Attempting to log in user: ${username}...`);
  setTimeout(() => {
    if (username === "user" && password === "pass") {
      console.log("Login successful!");
      callback(null, { userId: 1, username: username }); // Pass null for error, data for success
    } else {
      console.log("Login failed.");
      callback("Invalid credentials"); // Pass error message
    }
  }, 1000);
}
function getUserProfile(userId, callback) {
  console.log(`Fetching profile for userId: ${userId}...`);
  setTimeout(() => {
    console.log("Profile fetched!");
    callback(null, { userId: userId, email: `user${userId}@example.com`, preferences: { theme: "dark" } });
  }, 800);
}
loginUser("user", "pass", (error, userData) => {
  if (error) {
    console.error("Login Error:", error);
    return;
  }
  console.log("Logged in user data:", userData);
  getUserProfile(userData.userId, (error, profileData) => {
    if (error) {
      console.error("Profile Error:", error);
      return;
    }
    console.log("User profile data:", profileData);
    console.log("🥳 Welcome to your dashboard!");
  });
});
loginUser("baduser", "wrongpass", (error, userData) => {
  if (error) {
    console.error("Login Error (failed attempt):", error);
  }
});

// ✅ Real-world Example: Custom Event Emitter with Callbacks
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    console.log(`Listener added for event: '${eventName}'`);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      console.log(`Emitting event: '${eventName}' with args:`, args);
      this.events[eventName].forEach(callback => {
        callback(...args);
      });
    }
  }
  off(eventName, callbackToRemove) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        callback => callback !== callbackToRemove
      );
      console.log(`Listener removed from event: '${eventName}'`);
    }
  }
}

const myEmitter = new EventEmitter();
const onDataReceived = (data) => console.log(`Event 'dataReceived':`, data);
const onStatusUpdate = (status) => console.log(`Event 'statusUpdate': ${status}`);
myEmitter.on('dataReceived', onDataReceived);
myEmitter.on('statusUpdate', onStatusUpdate);
myEmitter.on('statusUpdate', (msg) => console.log(`Another status update listener: ${msg}`));
myEmitter.emit('dataReceived', { id: 1, value: 'Hello World' });
myEmitter.emit('statusUpdate', 'Processing...');
myEmitter.emit('statusUpdate', 'Complete!');
myEmitter.off('statusUpdate', onStatusUpdate);
myEmitter.emit('statusUpdate', 'Still processing with remaining listeners...');


// ✅ Real-world Example: Data Processing Pipeline with Callbacks
function loadConfig(callback) {
  console.log("Loading configuration...");
  setTimeout(() => {
    console.log("Configuration loaded.");
    callback(null, { chunkSize: 1024, encryption: true });
  }, 500);
}
function processData(config, data, callback) {
  console.log("Processing data with config:", config, " and data:", data);
  setTimeout(() => {
    const processedResult = `Processed (${data}) with encryption: ${config.encryption}`;
    console.log("Data processed.");
    callback(null, processedResult);
  }, 700);
}
function saveData(processedData, callback) {
  console.log("Saving data:", processedData);
  setTimeout(() => {
    console.log("Data saved successfully.");
    callback(null, "Save successful");
  }, 600);
}// Orchestrate the pipeline
loadConfig((err, config) => {
  if (err) { console.error("Config load failed:", err); return; }
  processData(config, "Raw important data", (err, processed) => {
    if (err) { console.error("Data processing failed:", err); return; }
    saveData(processed, (err, status) => {
      if (err) { console.error("Data save failed:", err); return; }
      console.log("Full pipeline complete:", status);
    });
  });
});