/*
🧭 What is the History & Navigation API?

It allows manipulation of the browser session history stack (forward, back, replace URL, etc.)

✅ Use Cases:
- SPAs (Single Page Apps)
- Routing without page reload
- Tracking navigation state
*/

// ✅ Basic usage of history API
console.log("📜 Current URL:", window.location.href);

// Push a new URL into browser history without page reload
history.pushState({ page: 1 }, "Title 1", "?page=1");
history.pushState({ page: 2 }, "Title 2", "?page=2");

// Replace the current entry without adding new entry
history.replaceState({ page: 99 }, "Title 99", "?page=99");

// ✅ Navigating through history
// Go back one step in history
// history.back();

// Go forward
// history.forward();

// Go to specific step
// history.go(-1);  // One step back
// history.go(2);   // Two steps forward

// ✅ Listening to history change
window.onpopstate = function (event) {
  console.log("📦 Back/Forward navigation detected");
  console.log("📄 State object:", event.state);
};

// 🧠 Real-World Examples:
// - Client-side routing (React Router, Vue Router)
// - Modal back-navigation (closing modal via back button)
// - Pagination without reload

// 🧠 Interview Tip:
// Q: What’s the difference between `pushState` and `replaceState`?
// A: pushState adds a new entry to history, replaceState modifies the current one.

// ❗ Gotchas:
// - These methods only affect the address bar, not server navigation
// - You need to handle popstate manually for full control

