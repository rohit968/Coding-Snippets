// ======================================================
// 📌 Topic: Traversing the DOM (Parent, Child, Sibling)
// dom-basics/03-traversing-dom.js
// ======================================================

// Let's assume the HTML structure:
<div id="parent">
  <p class="child">First Paragraph</p>
  <p class="child">Second Paragraph</p>
</div>

// 🔹 Select parent and children
const parent = document.getElementById("parent");

// ✅ Accessing child elements
console.log(parent.children);           // HTMLCollection of <p> elements
console.log(parent.firstElementChild);  // First <p>
console.log(parent.lastElementChild);   // Last <p>

// ✅ Accessing parent element
const firstChild = parent.firstElementChild;
console.log(firstChild.parentElement); // <div id="parent">

// ✅ Accessing siblings
const secondChild = parent.lastElementChild;
console.log(firstChild.nextElementSibling); // second <p>
console.log(secondChild.previousElementSibling); // first <p>

// 🔹 Bonus: text-based navigation (not recommended for precise control)
console.log(parent.childNodes); // Includes text nodes, line breaks, etc.
console.log(firstChild.nextSibling); // Might be a text node

// 🧠 Tip: Always use `.children`, `.firstElementChild`, etc. for cleaner traversal

// 🗣️ Interview Tip:
// "DOM traversal is like walking a family tree – up (parents), down (children), and sideways (siblings). Use element-specific properties to avoid unexpected whitespace or text nodes."
