// ======================================================
// 📌 Topic: DOM Performance Tips – documentFragment & Batching
// dom-basics/23-dom-performance-tips.js
// ======================================================

/**
 * ✅ Problem:
 * Repeated DOM insertions trigger multiple reflows and repaints → expensive for performance.
 *
 * ✅ Solution:
 * Use `documentFragment` to group DOM operations *off-screen*, then append all at once.
 */

// 🔹 Without Optimization – Slow (Triggers DOM updates 100 times)
const list1 = document.createElement('ul');
document.body.appendChild(list1);

console.time('Without batching');
for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  list1.appendChild(li); // Triggers layout on each append
}
console.timeEnd('Without batching');

// 🔹 With documentFragment – Fast
const list2 = document.createElement('ul');
document.body.appendChild(list2);

console.time('With batching');
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li); // In-memory, no DOM impact yet
}

list2.appendChild(fragment); // Single DOM update
console.timeEnd('With batching');

/**
 * 🔹 Why use documentFragment?
 * - No reflow/repaint on each insert
 * - Much faster for creating/updating large DOM chunks
 * - It's like building on a whiteboard, then copying once to the wall
 */

// 🔹 Other DOM Performance Tips:
// ✅ Minimize DOM reads/writes in loops
// ✅ Debounce input/scroll events
// ✅ Avoid layout thrashing (reading + writing styles in same loop)

// 🧠 Interview Tip:
// "Use `documentFragment` for batching DOM updates to prevent unnecessary reflows."
