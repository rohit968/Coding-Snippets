// ======================================================
// 📌 Topic: DOMContentLoaded vs load event
// dom-basics/19-dom-content-loaded.js
// ======================================================

/**
 * ✅ What are these?
 * - `DOMContentLoaded`: Fires when the initial HTML is fully loaded and parsed.
 * - `load`: Fires when the whole page is loaded, including all images, scripts, styles, etc.
 *
 * ✅ Why use them?
 * - To ensure your DOM-related JavaScript runs only after the page is ready.
 */

// 🔹 DOMContentLoaded – Best for most scripts
document.addEventListener('DOMContentLoaded', () => {
  const msg = document.createElement('p');
  msg.textContent = '✅ DOM fully loaded and parsed!';
  msg.style.color = 'green';
  document.body.appendChild(msg);
  console.log('[DOMContentLoaded] DOM is ready!');
});

// 🔹 load – Waits for everything (images/styles too)
window.addEventListener('load', () => {
  const msg = document.createElement('p');
  msg.textContent = '✅ All assets (images, scripts, etc.) are fully loaded!';
  msg.style.color = 'blue';
  document.body.appendChild(msg);
  console.log('[load] Full page is loaded!');
});

// 🔹 Real-Life Example: Spinner until everything loads
const loader = document.createElement('div');
loader.textContent = '⏳ Loading...';
loader.style.padding = '15px';
loader.style.background = '#eee';
loader.style.textAlign = 'center';
document.body.prepend(loader);

window.addEventListener('load', () => {
  loader.remove();
});

// 🧠 Interview Tip:
// "Use DOMContentLoaded for DOM manipulation logic. Use load if your logic depends on images/videos/styles being ready."
