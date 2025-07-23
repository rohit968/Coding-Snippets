/*
📌 What are cookies?
Cookies are small text files stored in the browser to store data — often used for authentication, session tracking, or personalization.

💡 Why use cookies?
- To persist small bits of data across sessions and server communication.
- Used by server-side frameworks for session management.

🧪 Cookie Structure:
key=value; expires=; path=; domain=; secure; SameSite

⚠️ Cookie size is limited (~4KB) and sent with every HTTP request.
*/

// ✅ Set a cookie (basic)
document.cookie = "username=Rohit";

// ✅ Set a cookie with expiry (in UTC format)
document.cookie = "theme=dark; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

// ✅ Read all cookies
console.log(document.cookie); // "username=Rohit; theme=dark"

// ⚠️ Update a cookie = overwrite with same key
document.cookie = "username=RohitT";

// ❌ Delete a cookie = set expiry to past date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

/*
💻 Real-world Example:
Track consent of cookie popup:
*/
function acceptCookies() {
  document.cookie = "cookieAccepted=true; max-age=604800"; // 1 week
}

/*
🧠 Interview Tips:
- Cookies are automatically sent to the server with each request (if not `HttpOnly`)
- `SameSite`, `Secure`, and `HttpOnly` are essential for secure cookie handling
- JS can't read `HttpOnly` cookies (used for secure auth)

📌 Use cookies when:
- You need server-client sync
- Small, non-sensitive data
- You’re building analytics, consent managers, or legacy apps

🧠 Comparison:
| Feature         | localStorage | sessionStorage | Cookies    |
|-----------------|--------------|----------------|------------|
| Persistence     | Forever      | Until tab close| Based on expiry |
| Size limit      | ~5MB         | ~5MB           | ~4KB       |
| Sent to server  | ❌            | ❌              | ✅         |
| Accessible in JS| ✅            | ✅              | ✅ (except HttpOnly) |
*/
