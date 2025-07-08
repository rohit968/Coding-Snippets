// ======================================================
// 📌 Topic: Nested Object Handling in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Nested object handling refers to accessing or managing deeply nested data
 * within an object safely and efficiently.
 * 
 * ✅ Why is it useful?
 * - Common in real-world APIs and configs  
 * - Avoids runtime errors  
 * - Helps write robust, defensive code
 * 
 * ✅ How to access deeply nested values?
 * - Using dot/bracket notation
 * - Using optional chaining (`?.`)
 * - Use defaults to prevent crashes
 */

// ✅ Basic Example
const user = {
  profile: {
    name: "Rohit",
    contact: {
      email: "rohit@example.com",
      phone: "1234567890"
    }
  }
};

// Accessing nested properties
console.log(user.profile.name);         // Rohit
console.log(user.profile.contact.email); // rohit@example.com

// ❌ Unsafe: This will throw an error if `contact` is missing
// console.log(user.profile.contact.email);

// ✅ Safe Access with Optional Chaining
console.log(user.profile?.contact?.email); // ✅ rohit@example.com
console.log(user.profile?.address?.city);  // ✅ undefined (no crash)

// ✅ Provide Default Value
const city = user.profile?.address?.city || "Not Provided";
console.log(city); // Not Provided

// ✅ Destructuring Nested Objects
const {
  profile: {
    contact: { phone }
  }
} = user;
console.log(phone); // 1234567890

// ✅ Use Case: API Data (with optional fields)
const apiResponse = {
  user: {
    name: "Rohit",
    settings: null
  }
};
const darkMode = apiResponse.user.settings?.theme?.dark || false;
console.log(darkMode); // false (safely fallback)


// 🗣️ Layman Interview Explanation — Nested Object Handling
// "Think of a nested object like a set of labeled boxes inside boxes. If you want the item in the last box, you need to carefully open each layer. Optional chaining is like saying: 'Open this box if it exists'. That way, you don’t tear the whole stack apart when something’s missing."

