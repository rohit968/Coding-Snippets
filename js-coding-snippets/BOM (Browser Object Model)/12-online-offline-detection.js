/* 
===============================================
🌐 BOM - Online/Offline Detection (Expanded)
===============================================

1️⃣ What is this?
------------------
Online/Offline Detection uses browser events and properties to detect changes in network connectivity:
- `navigator.onLine`: boolean indicating current online status.
- `online` / `offline` events on `window`.

2️⃣ Why does it matter?
------------------------
✅ Enables resilient web apps that adapt to connectivity changes.  
✅ Provides UX feedback when the user loses or regains internet access.  
✅ Essential for PWAs, offline caching, and data syncing logic.

3️⃣ Why and when to use?
-------------------------
✅ **Offline Mode**: Show cached content and queue user actions.  
✅ **Reconnect Logic**: Auto‑sync data when back online.  
✅ **User Alerts**: Notify users of connectivity loss/gain.  
✅ **Feature Toggles**: Disable network‑dependent features when offline.

4️⃣ Snippets:
--------------

*/

console.log("Initial online status:", navigator.onLine);

// Listen for offline event
window.addEventListener("offline", () => {
  console.log("⚠️ You are now offline.");
  document.body.classList.add("is-offline");
  showOfflineBanner();    // Custom function to alert user
});

// Listen for online event
window.addEventListener("online", () => {
  console.log("✅ You are back online.");
  document.body.classList.remove("is-offline");
  hideOfflineBanner();    // Custom function to remove alert
  syncQueuedActions();    // Send queued requests to server
});

// Example: Queue fetch requests when offline
const requestQueue = [];

async function safeFetch(url, options) {
  if (!navigator.onLine) {
    // Queue request for later
    requestQueue.push({ url, options });
    console.log("Request queued:", url);
    return Promise.resolve({ offline: true });
  }
  return fetch(url, options);
}

// Sync queued requests on reconnect
function syncQueuedActions() {
  while (requestQueue.length) {
    const { url, options } = requestQueue.shift();
    fetch(url, options)
      .then(res => console.log("Synced:", url))
      .catch(err => console.error("Sync failed:", err));
  }
}

/*
5️⃣ Real-World Examples:
-------------------------
✅ **Offline Drafts**: Save form inputs to IndexedDB/localStorage when offline, then submit on reconnect.  
✅ **Progressive Web App**: Show “Offline Mode” banner and serve cached assets via Service Worker.  
✅ **Chat App**: Queue messages typed offline and auto‑send when back online.  

6️⃣ Interview Tips:
--------------------
❓ Q: How do you detect network status changes in JS?  
✅ A: Use `navigator.onLine` and listen to `online`/`offline` events on `window`.

❓ Q: Is `navigator.onLine` always reliable?  
✅ A: It checks OS/network stack but may be inaccurate in some browsers; combine with heartbeat requests if critical.

❓ Q: How to handle API calls when offline?  
✅ A: Queue requests (IndexedDB/localStorage) and retry on `online` event or via Service Worker background sync.

🔥 Bonus: Combine with the Page Visibility API (`visibilitychange`) to pause/resume activity when user hides or shows the tab.
*/
