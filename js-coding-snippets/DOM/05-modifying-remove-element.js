// ======================================================
// 📌 Topic: Modifying & Removing Elements
// dom-basics/08-modify-remove-elements.js
// ======================================================

/**
 * ✅ What will you learn?
 * - Change element content and attributes
 * - Update inline styles and classes
 * - Remove elements safely from the DOM
 */

// 🔹 Modifying Content
const header = document.querySelector('h1');
header.textContent = 'PureCravve Home Bakery';
header.innerHTML = 'PureCravve <em>Home</em> Bakery';

// 🔹 Modifying Attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://purecravve.com');
console.log(link.getAttribute('href'));
link.removeAttribute('title');

// 🔹 Modifying Styles
const card = document.querySelector('.card');
card.style.border = '2px solid #333';
card.style.padding = '1rem';
card.classList.add('highlight');
card.classList.remove('hidden');

// 🔹 Removing Elements
const obsolete = document.getElementById('old-item');
// Method 1: remove() (modern)
obsolete.remove();

// Method 2: removeChild() (older)
const list = document.getElementById('item-list');
const firstChild = list.firstElementChild;
if (firstChild) list.removeChild(firstChild);

// 🔹 Cloning & Clearing
const clone = card.cloneNode(true);
list.appendChild(clone);
// Clear all children
while (list.firstChild) {
  list.removeChild(list.firstChild);
}

// 🗣️ Interview Tip:
// "Use `remove()` for quick element removal. For broader browser support or older code, `parent.removeChild(child)` is reliable."
