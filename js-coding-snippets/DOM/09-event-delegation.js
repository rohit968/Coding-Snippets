// ======================================================
// 📌 Topic: Event Delegation in JavaScript
// dom-basics/12-event-delegation.js
// ======================================================

/**
 * ✅ What is Event Delegation?
 * Instead of attaching event listeners to multiple child elements,
 * attach a single listener to a parent and handle events via bubbling.
 *
 * ✅ Why is it useful?
 * - Improves performance by reducing number of listeners
 * - Works for dynamically added elements
 * - Simplifies code maintenance
 */

// 🔹 HTML structure assumed:
// <ul id="item-list">
//   <li class="item">Item 1</li>
//   <li class="item">Item 2</li>
//   <!-- more items... -->
// </ul>

// 🔹 Event delegation on parent
const list = document.getElementById('item-list');

list.addEventListener('click', function (e) {
  // Check if the clicked element matches the selector
  if (e.target && e.target.matches('li.item')) {
    console.log('Clicked item:', e.target.textContent);
    e.target.classList.toggle('selected');
  }
});

// 🔹 Dynamically adding a new item (still handled by parent listener)
const newItem = document.createElement('li');
newItem.textContent = 'Item 3';
newItem.classList.add('item');
list.appendChild(newItem);

// 🗣️ Interview Tip:
// "Event delegation leverages event bubbling — listen on a common ancestor and filter events
// by target. It's perfect for lists, tables, and dynamic content."

