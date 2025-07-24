// 🔄 EVENT DELEGATION IN JAVASCRIPT

// 🎯 What is Event Delegation?
// It's a technique where you attach a single event listener to a parent element
// instead of multiple listeners on each child. The event bubbles up from the child to the parent,
// and you can detect which child triggered it.

// 🧪 Basic Example:

// ✅ Instead of doing this (inefficient if you have many buttons):
document.querySelectorAll('.item-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log('Clicked:', e.target.textContent);
  });
});

// 🚀 Do this using delegation:
document.getElementById('items-container').addEventListener('click', (e) => {
  if (e.target.classList.contains('item-btn')) {
    console.log('Delegated Click:', e.target.textContent);
  }
});

// 🧱 HTML Example:
{/* 
<div id="items-container">
  <button class="item-btn">Item 1</button>
  <button class="item-btn">Item 2</button>
  <button class="item-btn">Item 3</button>
</div>
*/}

// 🔥 Benefits of Event Delegation:
// - Fewer event listeners = better performance
// - Works with dynamically added elements
// - Cleaner and more maintainable code

// 🆕 Handling dynamically added elements:
const container = document.getElementById('items-container');

// Add a new item dynamically
const newButton = document.createElement('button');
newButton.className = 'item-btn';
newButton.textContent = 'Item 4';
container.appendChild(newButton);

// Delegated listener already works for it!

// 🧠 Use Cases:
// - Lists of items (e.g. dropdowns, menus, to-do lists)
// - Form elements (e.g. radio buttons, checkboxes)
// - Tables (click on rows, cells)
// - Dynamic UIs (React-like behavior with Vanilla JS)

// ⚠️ Pitfall: Always check `e.target` properly
// - It may not always be the exact element you expect if there's nesting inside the child.

container.addEventListener('click', (e) => {
  const btn = e.target.closest('.item-btn'); // handles nested spans inside buttons
  if (btn) {
    console.log('Clicked:', btn.textContent);
  }
});
