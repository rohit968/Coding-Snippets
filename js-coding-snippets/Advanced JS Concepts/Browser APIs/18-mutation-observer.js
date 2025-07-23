/*
🧬 What is MutationObserver?

A DOM API that observes changes in the DOM tree:
- Add/remove elements
- Change text, attributes, structure

🔍 Why use it?
It lets you react automatically to DOM changes without polling (e.g. checking every second).
*/

/* 🧪 Basic Usage: Watch for changes in a target node */
const targetNode = document.querySelector('#watch-me');

const config = {
  childList: true,      // watch for addition/removal of children
  attributes: true,     // watch attribute changes
  subtree: true,        // watch entire subtree
  characterData: true   // track text content changes
};

const callback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    console.log('🧬 Mutation Type:', mutation.type);
    if (mutation.type === 'childList') {
      console.log('➕ or ❌ Child added/removed:', mutation.addedNodes, mutation.removedNodes);
    } else if (mutation.type === 'attributes') {
      console.log('🔧 Attribute changed:', mutation.attributeName);
    } else if (mutation.type === 'characterData') {
      console.log('📝 Text changed:', mutation.target.textContent);
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

// HTML Example:
// <div id="watch-me">Watch this text</div>
// Later in JS: targetNode.textContent = "New text!";

/*
🎯 Real World Use Cases:
- Monitor dynamic content (chat apps, dashboards)
- Auto-update UI on backend changes
- Validate or auto-adjust DOM injected by third-party scripts
*/

/*
💬 Interview Tips:
Q: What’s the difference between MutationObserver and event listeners?
A: MutationObserver observes *any* DOM mutation (even programmatic), while event listeners only capture user interactions.

Q: Is MutationObserver async or sync?
A: It’s async — changes are batched and fired after the current execution completes.

Q: Why not use `setInterval` to watch DOM?
A: Polling is inefficient and error-prone compared to MutationObserver’s event-driven nature.
*/
