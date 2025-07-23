/*
🌐 What is URL and URLSearchParams?

These APIs help parse, manipulate, and construct URLs easily.

✅ Use Cases:
- Reading query parameters
- Updating URLs without messy string splitting
- Generating URLs dynamically
*/

// ✅ Create a URL object
const url = new URL("https://example.com/page?name=Rohit&role=admin");

console.log("🌍 Host:", url.host);         // example.com
console.log("🧾 Path:", url.pathname);     // /page
console.log("🔑 Params:", url.search);     // ?name=Rohit&role=admin

// ✅ Get individual query parameters using URLSearchParams
const params = new URLSearchParams(url.search);
console.log("🧑 Name:", params.get("name"));      // Rohit
console.log("🔐 Role:", params.get("role"));      // admin

// ✅ Add or modify query parameters
params.set("role", "user");
params.append("status", "active");
url.search = params.toString();

console.log("🛠️ Updated URL:", url.toString());  // URL with updated params

// ✅ Remove a query parameter
params.delete("name");
console.log("🧹 Removed param URL:", url.origin + url.pathname + "?" + params.toString());

// 🧠 Real-World Example:
// - Building pagination URLs: ?page=2
// - Applying filters: ?category=cakes&sort=price

// 🧠 Interview Tip:
// Q: How do you read and update query parameters from the URL in JS?
// A: Use URL & URLSearchParams — cleaner than regex/string methods

// ❗ Gotcha:
// - Works only on fully-qualified URLs
// - In browsers, use `window.location.href` or `location.search` for current URL

