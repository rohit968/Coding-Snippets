// ======================================================
// 📌 Topic: Event Listener Functions — Best Practices in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Event listeners are functions that respond to user actions:
 * - Handle clicks, typing, scrolling, etc.  
 * - Use `addEventListener()` to attach them  
 * 
 * ✅ Why is it useful?
 * - Makes websites interactive  
 * - Separates behavior from structure  
 * - Supports modular, clean code  
 * 
 * ✅ Best Practices:
 * ✔️ Use named functions, avoid inline anonymous ones  
 * ✔️ Remove listeners when no longer needed  
 * ✔️ Use `{ once: true }` for one-time listeners  
 * ✔️ Pass `{ passive: true }` for scroll/touch performance  
 * ✔️ Keep listener logic minimal — call other functions if needed  
 * 
 * ✅ Real-life examples:
 * - Button click handlers  
 * - Form input validation  
 * - Window resize or scroll actions  
 */

// ✅ Named Function for Clarity
function showAlert() {
  alert("Button clicked!");
}
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);
button.addEventListener("click", showAlert);

// ✅ Removing Event Listeners
function logScroll() {
  console.log("User is scrolling...");
}
window.addEventListener("scroll", logScroll);

// Remove after 5 seconds
setTimeout(() => {
  window.removeEventListener("scroll", logScroll);
  console.log("Scroll listener removed");
}, 5000);

// ✅ One-time Event Listener
button.addEventListener("click", () => {
  console.log("This will only run once");
}, { once: true });

// ✅ Passive Listener for Scroll Performance
window.addEventListener("scroll", () => {
  // No preventDefault() here
}, { passive: true });

// ✅ Minimal Listener Calling Other Functions
function processInput(value) {
  console.log(`User typed: ${value}`);
}
const input = document.createElement("input");
input.placeholder = "Type something...";
document.body.appendChild(input);
input.addEventListener("input", (e) => {
  processInput(e.target.value);
});


// 🗣️ Layman Interview Explanation — Event Listener Best Practices
// "Event listeners are like your bakery staff—always listening for customer requests. But you don't want them overwhelmed. So you train them: only respond when needed, don't stay forever, and keep tasks short. Same idea in code—efficient, clean event handling."