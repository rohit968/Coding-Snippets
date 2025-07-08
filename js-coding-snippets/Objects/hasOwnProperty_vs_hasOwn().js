// ======================================================
// 📌 Topic: `hasOwnProperty()` vs `Object.hasOwn()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Both `hasOwnProperty()` and `Object.hasOwn()` check if a property exists **directly on an object**,  
 * and not via the prototype chain.
 * 
 * ✅ What's the difference?
 * - `hasOwnProperty()` is an instance method (called on the object)  
 * - `Object.hasOwn()` is a newer static method (safer and cleaner)
 * 
 * ✅ Why use `Object.hasOwn()`?
 * - Works even if object has no prototype (`Object.create(null)`)  
 * - No risk of being overridden  
 * - Preferred in modern JS (ES2022+)
 */

// ✅ Using `.hasOwnProperty()`
const user = {
  name: "Rohit"
};
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("email")); // false

// ⚠️ But this fails if object has no prototype
const data = Object.create(null);
data.value = 42;
try {
  console.log(data.hasOwnProperty("value")); // ❌ Error
} catch (e) {
  console.log("Error:", e.message);
}

// ✅ Use `Object.hasOwn()` — safer
console.log(Object.hasOwn(user, "name"));   // ✅ true
console.log(Object.hasOwn(data, "value"));  // ✅ true

// ====================================================== //

// ✅ Real-life Example: Safely check config keys
const config = {
  theme: "dark",
  debug: true
};
if (Object.hasOwn(config, "debug")) {
  console.log("Debugging is enabled.");
}

// ✅ Real-life Example: Validate dynamic user input
const userInput = {
  username: "purecravve",
  password: "1234"
};
["username", "email", "password"].forEach((field) => {
  if (Object.hasOwn(userInput, field)) {
    console.log(`✅ ${field} provided`);
  } else {
    console.log(`❌ ${field} missing`);
  }
});
