/* 
===================================
🌐 BOM - navigator Object
===================================

1️⃣ What is this?
------------------
The `navigator` object provides information about the browser and the user’s environment, such as user agent, language, and online status.

2️⃣ Why does it matter?
------------------------
✅ Detect browser and OS for compatibility  
✅ Tailor content based on user language  
✅ Build offline-aware features  

3️⃣ Why and when to use?
-------------------------
✅ Show browser‑specific warnings (e.g., unsupported features)  
✅ Load localized content based on `navigator.language`  
✅ Detect if the user is online or offline  

4️⃣ Snippets:
--------------
*/

// Browser’s user agent string
console.log("User Agent:", navigator.userAgent);

// Browser language (e.g., "en-US")
console.log("Language:", navigator.language);

// Platform/OS (e.g., "Win32", "Linux x86_64")
console.log("Platform:", navigator.platform);

// Online/offline status
console.log("Is online?", navigator.onLine);

// Listen for online/offline events
window.addEventListener("online", () => {
  console.log("Network status: Online");
});
window.addEventListener("offline", () => {
  console.log("Network status: Offline");
});

// Example: Redirect to offline page if offline
if (!navigator.onLine) {
  window.location.href = "/offline.html";
}


//5️⃣ Real-World Examples:
//-------------------------

//✅ **Feature Detection Warning**:  
if (/MSIE|Trident/.test(navigator.userAgent)) {
  alert("Some features may not work in Internet Explorer.");
}

// ✅ Language-Based Greeting:
const lang = navigator.language.split("-")[0];
const greetings = { en: "Hello", hi: "नमस्ते" };
alert(`${greetings[lang] || greetings.en}, welcome!`);

// ✅ Offline Fallback: Listen for offline to show a banner:
window.addEventListener("offline", () => {
  document.body.insertAdjacentHTML("afterbegin",
    "<div class='alert'>You are offline!</div>");
});

/*
6️⃣ Interview Tips:
❓ Q: How to detect user’s browser language?
✅ A: Use navigator.language or navigator.languages.

❓ Q: How can you build an offline‑aware web app?
✅ A: Listen for online/offline events on window and use Cache API or localStorage.

❓ Q: What’s contained in navigator.userAgent?
✅ A: A string with browser name/version, engine, OS, and device info.

🔥 Bonus: Use navigator.hardwareConcurrency to optimize for the user’s CPU cores.
*/
