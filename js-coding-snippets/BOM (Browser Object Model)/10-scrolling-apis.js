/* 
===========================================
🧭 BOM - Scrolling APIs (scrollTo, scrollBy & onscroll)
===========================================

1️⃣ What is this?
------------------
Scrolling APIs allow you to programmatically control and react to page scroll:
- `window.scrollTo()`, `window.scrollBy()`: methods to move viewport.
- `window.scrollX` / `window.scrollY`: current scroll offsets.
- `window.onscroll` or `addEventListener("scroll")`: event when user or script scrolls.

2️⃣ Why does it matter?
------------------------
✅ Create smooth in‑page navigation  
✅ Lazy‑load images or infinite scroll  
✅ Trigger animations or load content on scroll  
✅ Improve UX in long‑form content or dynamic layouts

3️⃣ Why and when to use?
-------------------------
✅ Jump to specific sections (e.g., “Back to Top”)  
✅ Animate scroll for single‑page nav links  
✅ Detect scroll to bottom for infinite feeds  
✅ Show/hide UI elements (sticky header, scroll‑to‑top button)

4️⃣ Snippets:
--------------
*/

// Scroll to top-left instantly
window.scrollTo(0, 0);

// Smooth scroll to element by coordinates
window.scrollTo({
  top: 500,
  left: 0,
  behavior: "smooth"
});

// Scroll by relative amount
window.scrollBy(0, 300); // down 300px

// Get current scroll position
console.log("Scroll X:", window.scrollX);
console.log("Scroll Y:", window.scrollY);

// Listen for scroll events (throttle/debounce in production!)
window.addEventListener("scroll", () => {
  console.log("Scrolled to:", window.scrollX, window.scrollY);
});

// Using onscroll property
window.onscroll = () => {
  if (window.scrollY > 200) {
    document.getElementById("toTopBtn").style.display = "block";
  } else {
    document.getElementById("toTopBtn").style.display = "none";
  }
};

/*
5️⃣ Real-World Examples:
-------------------------
✅ **“Back to Top” Button**:  
  Show button after scrolling down; scroll smoothly to top on click.

✅ **Lazy Loading Images**:  
  When `scrollY + innerHeight >= element.offsetTop`, load image src.

✅ **Infinite Scroll Feed**:  
  If user near bottom (`scrollY + innerHeight >= document.body.scrollHeight - 100`), fetch more posts.

✅ **Scroll‑Activated Animations**:  
  Add CSS classes when elements enter viewport to trigger reveal animations.

6️⃣ Interview Tips:
--------------------
❓ Q: How to implement smooth scrolling in JS?  
✅ A: Use `window.scrollTo({ top, behavior: "smooth" })`.

❓ Q: How to detect when user reaches bottom of page?  
✅ A: Compare `window.scrollY + window.innerHeight` to `document.body.scrollHeight`.

❓ Q: Why throttle or debounce scroll handlers?  
✅ A: Prevent performance issues due to high frequency of scroll events.

🔥 Bonus: Use IntersectionObserver for better performance over scroll events when detecting element visibility.
*/
