// ======================================================
// 📌 Topic: Safe Property Access — Optional Chaining (`?.`)
// ======================================================

/**
 * ✅ What is it?
 * Optional chaining (`?.`) allows you to safely access deeply nested properties  
 * **without causing runtime errors** if something is `undefined` or `null`.
 * 
 * ✅ Why is it useful?
 * - Prevents "cannot read property of undefined" errors  
 * - Cleaner, shorter fallback logic  
 * - Great for working with API data, optional fields, nested configs
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * object?.prop
 * object?.[key]
 * object?.method?.()
 * ```
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  contact: {
    email: "rohit@example.com"
  }
};
console.log(user.contact?.email); // ✅ "rohit@example.com"
console.log(user.address?.city);  // ✅ undefined (no crash)

// ✅ Optional Chaining with Arrays
const products = [{ name: "Cake", price: 499 }];
console.log(products[0]?.name);  // ✅ "Cake"
console.log(products[1]?.name);  // ✅ undefined (no crash)

// ✅ Optional Chaining with Methods
const person = {
  sayHi() {
    return "Hi!";
  }
};
console.log(person.sayHi?.()); // ✅ "Hi!"
console.log(person.bye?.());   // ✅ undefined (no crash)

// ✅ Optional Chaining with Bracket Notation
const key = "email";
console.log(user.contact?.[key]); // ✅ "rohit@example.com"

// ====================================================== //

// ✅ Real-world Example: API Response
const response = {
  user: {
    profile: {
      social: null
    }
  }
};
const twitterHandle = response.user?.profile?.social?.twitter || "Not Provided";
console.log(twitterHandle); // "Not Provided"

// ✅ Real-world Example: Optional Image URL
const product = {
  name: "Cookie",
  images: null
};
const thumbnail = product.images?.[0]?.url || "/default.jpg";
console.log(thumbnail); // "/default.jpg"


// 🗣️ Layman Interview Explanation — Optional Chaining
// "Optional chaining is like politely asking — ‘Do you exist? Can I go deeper?’ It avoids breaking your app when some data is missing — especially useful when dealing with APIs where you're never sure what's returned."

