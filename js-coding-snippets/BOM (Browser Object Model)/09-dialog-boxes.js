/* 
==========================================
⚠️ BOM - Dialog Boxes (Custom vs. Native)
==========================================

1️⃣ What is this?
------------------
Dialog boxes are UI overlays used to interact with users.  
- **Native**: Built‑in browser dialogs (`alert`, `confirm`, `prompt`).  
- **Custom**: HTML/CSS/JS modals or `<dialog>` elements styled and controlled via JS.

2️⃣ Why does it matter?
------------------------
✅ Native dialogs are quick and easy but blocking and unstyled.  
✅ Custom dialogs give full control over style, behavior, and non‑blocking UX.

3️⃣ Why and when to use?
-------------------------
✅ **Native**: For quick debugging alerts or simple confirmations in prototypes.  
✅ **Custom**: For production‑grade apps needing branded modals, forms, or async flows.  
✅ Use `<dialog>` for semantic, accessible modals when supported, with JS fallback.

4️⃣ Snippets:
--------------
*/

// --- Native Dialogs ---
window.alert("This is a native alert!");           // blocks page until OK
const ok = window.confirm("Proceed with action?"); // returns true/false
const email = window.prompt("Enter your email:");  // returns user input/string

// --- Custom Dialog using <dialog> ---
<dialog id="myDialog">
  <form method="dialog">
    <p>Custom dialog content here.</p>
    <menu>
      <button id="cancelBtn">Cancel</button>
      <button id="confirmBtn">Confirm</button>
    </menu>
  </form>
</dialog>

const dlg = document.getElementById("myDialog");
// Show dialog
dlg.showModal();
// Handle close event
dlg.addEventListener("close", () => {
  console.log("Dialog closed, returnValue:", dlg.returnValue);
});

// Programmatically set returnValue and close
document.getElementById("confirmBtn").onclick = () => {
  dlg.returnValue = "confirmed";
  dlg.close();
};
document.getElementById("cancelBtn").onclick = () => {
  dlg.returnValue = "canceled";
  dlg.close();
};

// --- Custom Dialog via DIV and CSS/JS ---
HTML:
<div id="modal" class="hidden">
  <div class="backdrop"></div>
  <div class="modal-content">
    <h2>Subscribe</h2>
    <button id="closeModal">Close</button>
  </div>
</div>


const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

/*
5️⃣ Real-World Examples:
-------------------------
✅ **Native Quick Warning**:  
   window.alert("Form incomplete!");  

✅ **Custom Confirm Dialog**:  
   Show styled modal with “Yes/No” buttons for destructive actions.  

✅ **Login Modal**:  
   `<dialog>` for login form, auto‑focus first input, and handle accessibility roles.

6️⃣ Interview Tips:
--------------------
❓ Q: Why avoid `alert()` in production?  
✅ A: It blocks UI, cannot style, poor UX, non‑customizable.

❓ Q: How do you create an accessible custom modal?  
✅ A: Use `<dialog>` with `role="dialog"`, focus trapping, aria-label/title, and keyboard handlers.

❓ Q: What’s the difference between `show()` and `showModal()` on `<dialog>`?  
✅ A: `showModal()` blocks interaction with background; `show()` does not.

🔥 Bonus: Always restore focus to the triggering element when closing a custom dialog for better accessibility.
*/
