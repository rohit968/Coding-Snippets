// ======================================================
// 📌 Topic: Scroll Events in JavaScript
// dom-basics/20-scroll-events.js
// ======================================================

/**
 * ✅ What is it?
 * The `scroll` event fires when the user scrolls the page or an element.
 *
 * ✅ Why use it?
 * - Add sticky headers
 * - Lazy-load content/images
 * - Animate on scroll
 * - Detect scroll position (for features like infinite scroll)
 */

// 🔹 Sticky Header Example
const header = document.createElement('div');
header.textContent = '📌 I stick to the top!';
header.style.position = 'fixed';
header.style.top = '0';
header.style.left = '0';
header.style.right = '0';
header.style.background = '#222';
header.style.color = '#fff';
header.style.padding = '10px';
header.style.zIndex = '1000';
header.style.transition = 'transform 0.3s ease';
document.body.appendChild(header);

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.transform = 'translateY(0)';
  } else {
    header.style.transform = 'translateY(-100%)';
  }
});

// 🔹 Lazy Load Example (simulation)
const lazyBox = document.createElement('div');
lazyBox.textContent = '📦 Lazy Content Loading...';
lazyBox.style.marginTop = '1000px';
lazyBox.style.padding = '20px';
lazyBox.style.background = '#f9c74f';
document.body.appendChild(lazyBox);

window.addEventListener('scroll', () => {
  const boxTop = lazyBox.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (boxTop < screenHeight) {
    lazyBox.textContent = '✅ Lazy Content Loaded!';
    lazyBox.style.background = '#90be6d';
  }
});

// 🧠 Interview Tip:
// "Scroll events are powerful but can fire rapidly—use throttling or debouncing in production."
