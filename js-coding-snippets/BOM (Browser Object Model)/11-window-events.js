/* 
==========================================
📦 BOM - Window Events (load, beforeunload, unload)
==========================================

1️⃣ What is this?
------------------
Window events are lifecycle hooks triggered on the `window` object during page lifecycle:
- `load`: fires when the whole page (DOM, styles, images, subframes) has loaded.
- `beforeunload`: fires just before the page is about to unload, allowing you to prompt the user.
- `unload`: fires when the page is unloading (after `beforeunload`), for cleanup tasks.

2️⃣ Why does it matter?
------------------------
✅ Ensure scripts run only after all resources are ready (`load`).  
✅ Warn users about unsaved changes before navigating away (`beforeunload`).  
✅ Perform final cleanup (e.g., analytics, saving state) on `unload`.

3️⃣ Why and when to use?
-------------------------
✅ **`load`**: Initialize sliders, charts, or heavy components after images/styles are loaded.  
✅ **`beforeunload`**: Prevent data loss by prompting users if they have unsaved work.  
✅ **`unload`**: Send “user left” analytics or clean up long‑running connections (WebSockets).

4️⃣ Snippets:
--------------

*/

// LOAD event: run code after full page load
window.addEventListener("load", () => {
  console.log("Page fully loaded including images and subframes");
  initializeGallery();
});

// BEFOREUNLOAD event: warn user before leaving
window.addEventListener("beforeunload", (e) => {
  const message = "You have unsaved changes. Are you sure you want to leave?";
  e.returnValue = message; // Standard
  return message;          // Some browsers
});

// UNLOAD event: cleanup tasks
window.addEventListener("unload", () => {
  // Send analytics event
  navigator.sendBeacon("/analytics", JSON.stringify({ event: "page_unload" }));
  // Close WebSocket gracefully
  if (socket) socket.close();
});

/*
5️⃣ Real-World Examples:
-------------------------
✅ **Image Gallery Initialization**:  
   Initialize lightbox plugin only after all images load.  

✅ **Form Unsaved Changes**:  
   Warn user if they try to navigate away from a filled form without saving.  

✅ **Analytics Ping**:  
   Use `sendBeacon` in `unload` to reliably send final usage stats.

6️⃣ Interview Tips:
--------------------
❓ Q: Why use `beforeunload` instead of `unload` for prompts?  
✅ A: `unload` cannot block navigation; only `beforeunload` can prompt.

❓ Q: What’s the difference between DOMContentLoaded and load?  
✅ A: `DOMContentLoaded` fires when HTML is parsed; `load` waits for all assets (images, CSS).

❓ Q: How to reliably send data when user closes tab?  
✅ A: Use `navigator.sendBeacon()` inside `unload` event.

🔥 Bonus: Avoid heavy work in `unload`—it may be skipped; prefer `sendBeacon` for critical data.
*/
