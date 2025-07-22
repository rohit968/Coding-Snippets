/* 
============================
🌐 BOM - Window Dimensions
============================

1️⃣ What is this?
------------------
The window dimensions are properties of the `window` object that give you the size of the browser window (including or excluding browser UI like toolbars).

- `innerWidth` / `innerHeight` → visible area (viewport)
- `outerWidth` / `outerHeight` → full browser window size (includes toolbars, scrollbars)

2️⃣ Why does it matter?
-----------------------
You often need to adapt UI based on screen size, especially for:
- Responsive designs
- Modals, canvas, or custom layouts
- Resizing content dynamically

3️⃣ Why and when to use?
-------------------------
✅ To detect if the window is small or large and adjust UI
✅ To handle responsive breakpoints
✅ To calculate dimensions for rendering or layout logic
✅ Useful for games, dashboards, and media-heavy apps

4️⃣ Snippets:
--------------
*/

// Viewport size (doesn't include browser UI)
console.log("Viewport Width:", window.innerWidth);
console.log("Viewport Height:", window.innerHeight);

// Full window size (includes toolbars)
console.log("Outer Width:", window.outerWidth);
console.log("Outer Height:", window.outerHeight);

// Resize Event Listener
window.addEventListener("resize", () => {
  console.log("Window resized to:", window.innerWidth + " x " + window.innerHeight);
});

/*
5️⃣ Real-World Examples:
-------------------------
✅ Show/hide sidebar if screen < 768px
✅ Adjust video player or canvas based on current window size
✅ Log window size for analytics or debugging

Example:
--------
*/

function adjustLayout() {
  if (window.innerWidth < 768) {
    console.log("Switching to mobile layout...");
  } else {
    console.log("Using desktop layout.");
  }
}
window.addEventListener("resize", adjustLayout);
adjustLayout(); // Call once at load

/*
6️⃣ Interview Tips:
--------------------
❓ Q: What's the difference between innerWidth and outerWidth?
✅ A: innerWidth is the content area (viewport), outerWidth includes the browser’s borders, scrollbars, and toolbars.

❓ Q: When would you use resize event?
✅ A: To recalculate layout or trigger UI changes when user resizes the browser window.

🔥 Bonus: Avoid performance issues in resize handlers by using debouncing or throttling.
*/

