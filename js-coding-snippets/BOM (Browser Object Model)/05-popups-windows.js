/* 
===============================
🪟 BOM - Popups & Windows
===============================

1️⃣ What is this?
------------------
Browser popups/windows are new browser windows or tabs opened via JavaScript using the `window.open()` method. You can also programmatically close, move, or resize them.

2️⃣ Why does it matter?
------------------------
✅ Enables multi-window workflows (e.g., OAuth flows, print previews)  
✅ Useful for utilities like help dialogs or tool palettes  
✅ Gives control over window features (size, position, toolbar visibility)

3️⃣ Why and when to use?
-------------------------
✅ Open external auth or payment pages without navigating away  
✅ Launch print previews or dashboards in separate windows  
✅ Pop up secondary tool windows for complex web apps (e.g., drawing tools)  
✅ Close helper windows when task is done  

4️⃣ Snippets:
--------------
*/

// Open a new window (popup)
// Arguments: URL, target name, window features
const popup = window.open(
  "https://purecravve.in/promo",
  "promoWindow",
  "width=600,height=400,toolbar=no,menubar=no,scrollbars=yes"
);

// Check if popup blocked
if (!popup) {
  console.warn("Popup blocked by browser!");
} else {
  // Focus the popup window
  popup.focus();
}

// Close the popup after 5 seconds
setTimeout(() => {
  popup.close();
  console.log("Popup closed after delay");
}, 5000);

// Move and resize the popup (if allowed)
popup.moveTo(100, 100);
popup.resizeTo(800, 600);


//5️⃣ Real-World Examples:
//-------------------------
//✅ **OAuth Login Flow**:  
const authWin = window.open(
  authUrl, "authPopup",
  "width=500,height=600"
);

// User logs in on third‑party site, then you use postMessage to communicate back.
const printWin = window.open("", "printWin");
printWin.document.write("<h1>Invoice</h1>" + invoiceHTML);
printWin.print();

//✅ Help/Tool Palette:
//Launch a draggable helper window for drawing tools or calculators.

/*
❓ Q: How can you detect if a popup was blocked?
✅ A: window.open() returns null (or undefined), so check the returned reference.

❓ Q: What are potential downsides of popups?
✅ A: Often blocked by browsers, can be annoying UX, security restrictions on window features.

❓ Q: How to communicate between main window and popup?
✅ A: Use window.postMessage() and listen for message events.

🔥 Bonus: Always provide fallback UI if popup fails (e.g., inline modal).
*/