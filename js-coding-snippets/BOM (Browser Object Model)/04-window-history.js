/* 
==================================
🕓 BOM - window.history Object
==================================

1️⃣ What is this?
------------------
The `window.history` object represents the browser session history, letting you navigate back and forth through the pages visited in the tab.

2️⃣ Why does it matter?
-----------------------
✅ Enables custom navigation controls  
✅ Crucial for SPAs to manage view states without full reloads  
✅ Gives insights into user’s navigation depth (history length)

3️⃣ Why and when to use?
-------------------------
✅ Implement "Back" and "Forward" buttons in-app  
✅ Conditionally block navigation (e.g., unsaved form warnings)  
✅ Jump multiple steps in history (e.g., `history.go(-2)`)

4️⃣ Snippets:
--------------
*/

// Number of pages in session history
console.log("History length:", window.history.length);

// Go back one page
window.history.back();

// Go forward one page
window.history.forward();

// Move n steps in history (positive or negative)
window.history.go(-2); // two pages back

// Push a new state without reloading (for SPAs)
history.pushState({ page: 1 }, "Title", "?page=1");

// Replace current state
history.replaceState({ page: 2 }, "New Title", "?page=2");

// Listen for popstate events (back/forward in SPAs)
window.addEventListener("popstate", (event) => {
  console.log("Popstate event:", event.state);
});

 /*
5️⃣ Real-World Examples:
-------------------------
✅ SPA route handling: pushState/replaceState to update URL while rendering new views  
✅ Warning before unload:  
   window.onbeforeunload = () => "You have unsaved changes.";  
✅ Custom back button:  
   document.getElementById("backBtn").onclick = () => history.back();

6️⃣ Interview Tips:
--------------------
❓ Q: What’s the difference between `pushState` and `replaceState`?  
✅ A: `pushState` adds a new entry to history; `replaceState` modifies the current one.

❓ Q: How to detect when a user clicks browser back/forward?  
✅ A: Listen to the `popstate` event on `window`.

❓ Q: Can you modify the URL without reloading?  
✅ A: Yes, via `history.pushState()` or `history.replaceState()`.  

🔥 Bonus: Use history state object to store scroll positions or UI state between navigations.
*/

