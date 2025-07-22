/* 
===================================
📍 BOM - window.location Object
===================================

1️⃣ What is this?
------------------
The `window.location` object contains information about the current URL and allows navigation to other URLs.

It gives you access to:
- Protocol, hostname, port
- Path and query string
- Methods to reload, redirect, or replace the current page

2️⃣ Why does it matter?
------------------------
✅ Helps manage routing/navigation from JavaScript
✅ Can programmatically reload or redirect users
✅ Can read URL values (useful for search params, query filters, etc.)

3️⃣ Why and when to use?
-------------------------
✅ Redirect users after login/logout
✅ Reload page after certain user actions
✅ Get current page URL details
✅ Dynamically change URLs in single-page apps

4️⃣ Snippets:
--------------
*/

// Full URL
console.log("Full URL:", window.location.href);

// Protocol (http or https)
console.log("Protocol:", window.location.protocol);

// Hostname (without protocol)
console.log("Hostname:", window.location.hostname);

// Port (if any)
console.log("Port:", window.location.port);

// Path after domain
console.log("Pathname:", window.location.pathname);

// Query string (e.g. ?id=5&sort=asc)
console.log("Search params:", window.location.search);

// Hash (after #)
console.log("Hash:", window.location.hash);

// Reload the page
// window.location.reload();

// Redirect to another page
// window.location.href = "https://purecravve.in";

// Redirect using replace (doesn't save to browser history)
// window.location.replace("https://example.com");

/*
5️⃣ Real-World Examples:
-------------------------
✅ Redirect user to a success page after form submission:
window.location.href = "/thank-you.html";

✅ Force page reload after logout:
window.location.reload();

✅ Extract query params:
*/

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user");
console.log("User ID from URL:", userId);

/*
6️⃣ Interview Tips:
--------------------
❓ Q: Difference between `window.location.href` vs `window.location.replace()`?
✅ A: `href` adds to history (back button works). `replace()` doesn't (no back).

❓ Q: How can you reload the current page?
✅ A: Use `window.location.reload();`

❓ Q: How to access the full URL of the current page?
✅ A: `window.location.href`

🔥 Bonus: You can create dynamic UIs by checking query parameters in `location.search`
*/

