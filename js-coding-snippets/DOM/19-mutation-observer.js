// ======================================================
// 📌 Topic: MutationObserver in JavaScript
// dom-basics/21-mutation-observer.js
// ======================================================

/**
 * ✅ What is it?
 * `MutationObserver` is a built-in API to watch for changes in the DOM tree.
 *
 * ✅ Why use it?
 * - Detect when elements are added/removed
 * - Monitor attribute or content changes
 * - Build reactive UI without polling
 */

// 🔹 Setup a target node
const target = document.createElement('div');
target.id = 'observeMe';
target.textContent = '👀 Watching this element...';
target.style.margin = '20px';
target.style.padding = '10px';
target.style.border = '2px dashed #aaa';
document.body.appendChild(target);

// 🔹 Define a mutation observer
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    console.log('🔄 Mutation detected:', mutation);
    if (mutation.type === 'childList') {
      console.log('🔹 Child added or removed');
    }
    if (mutation.type === 'attributes') {
      console.log(`🔹 Attribute changed: ${mutation.attributeName}`);
    }
    if (mutation.type === 'characterData') {
      console.log('🔹 Text content changed');
    }
  }
});

// 🔹 Configure what to observe
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true, // watches children as well
};

// 🔹 Start observing
observer.observe(target, config);

// 🔹 Simulate some DOM changes
setTimeout(() => {
  target.textContent = '✍️ Text changed!';
}, 1000);

setTimeout(() => {
  target.setAttribute('data-status', 'updated');
}, 2000);

setTimeout(() => {
  const newChild = document.createElement('p');
  newChild.textContent = '👶 New child added';
  target.appendChild(newChild);
}, 3000);

// 🧠 Interview Tip:
// "MutationObserver helps you respond to DOM changes without performance-heavy loops."
