// ======================================================
// 📌 Topic: Modifying Content — innerHTML, textContent, innerText
// dom-basics/03-modify-content.js
// ======================================================

/**
 * ✅ What are they?
 * - `innerHTML`: gets/sets HTML markup inside an element (parses HTML)
 * - `textContent`: gets/sets plain text of an element and its descendants
 * - `innerText`: gets/sets rendered text (aware of CSS) and triggers reflow
 *
 * ✅ Why use each?
 * - `innerHTML` for injecting HTML structures
 * - `textContent` for safe, fast text updates (no HTML parsing)
 * - `innerText` for text as rendered (excludes hidden text, respects styling)
 */

// 🔹 Selecting the element
const box = document.getElementById('content-box');

// ======================================================
// 1) innerHTML
// ======================================================
// Reading HTML
console.log('innerHTML before:', box.innerHTML);

// Writing HTML (be cautious of XSS)
box.innerHTML = `
  <h2>New Title</h2>
  <p>This <strong>HTML</strong> content was injected.</p>
`;
console.log('innerHTML after:', box.innerHTML);

// ======================================================
// 2) textContent
// ======================================================
// Reading plain text
console.log('textContent:', box.textContent);

// Writing plain text (escapes HTML)
box.textContent = '<script>alert(1)</script> Safe text only';
console.log('textContent after:', box.textContent);

// ======================================================
// 3) innerText
// ======================================================
// Reading rendered text (ignores hidden via CSS)
console.log('innerText:', box.innerText);

// Writing text (behaves like textContent but slower)
box.innerText = 'Visible\nText with line break';
console.log('innerText after:', box.innerText);

// 🔹 Performance & Safety:
// - `textContent` is fastest and safe (no HTML parsing)
// - `innerHTML` is powerful but can be slow and vulnerable
// - `innerText` reflects CSS and layout (may cause reflow)

// 🗣️ Interview Tip:
// “Prefer `textContent` for text‑only changes. Use `innerHTML` when you need to inject HTML, but always sanitize inputs. `innerText` is useful when you need the text exactly as rendered by the browser.”
