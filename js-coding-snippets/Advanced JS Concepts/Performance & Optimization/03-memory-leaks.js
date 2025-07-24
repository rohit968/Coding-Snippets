// 🧠 MEMORY LEAKS IN JAVASCRIPT
// A memory leak occurs when your app holds onto memory it no longer needs,
// preventing the JS engine's garbage collector from reclaiming it.

// 🔍 Common Causes & Real Examples:

// 1. ❌ Global Variables (unintended or excessive)
let leaks = [];
function bad() {
  // 'leaks' keeps growing every call without being cleared
  leaks.push(new Array(1000000).fill('*'));
}
setInterval(bad, 1000); // Memory will keep increasing

// ✅ Fix: Clear or limit usage; avoid polluting the global scope

// 2. ❌ Forgotten Timers or Intervals
function setupTimer() {
  setInterval(() => {
    console.log('Still running...');
    // Leaks memory if associated data is not cleaned up
  }, 1000);
}
// Even if the element using this is removed, interval runs forever

// ✅ Fix: Clear timers on cleanup
function cleanupTimer(timerId) {
  clearInterval(timerId);
}

// 3. ❌ Detached DOM Nodes
const removedNode = document.createElement('div');
removedNode.textContent = 'Leaky';
document.body.appendChild(removedNode);

// Later removed from DOM...
document.body.removeChild(removedNode);

// But still referenced in JS
const memoryLeak = removedNode;

// ✅ Fix: Set `removedNode = null;` if not needed

// 4. ❌ Closures holding references
function createHeavyClosure() {
  const largeData = new Array(1000000).fill('🔒');
  return function () {
    console.log('Still using largeData!');
  };
}
const closure = createHeavyClosure(); // largeData is still in memory

// ✅ Fix: Only close over what's necessary

// 5. ❌ Event Listeners not removed
function leakyHandler() {
  console.log('clicked');
}
const btn = document.getElementById('leaky-btn');
btn.addEventListener('click', leakyHandler);

// Even after removing the button from DOM, listener is still active
btn.remove(); // ❌ Listener still in memory

// ✅ Fix: Always remove listeners when removing DOM
btn.removeEventListener('click', leakyHandler);

// 6. ❌ Caches That Grow Unbounded
const cache = {};
function addToCache(key, value) {
  cache[key] = value;
  // Without a limit, memory can grow endlessly
}

// ✅ Fix: Implement LRU cache or limit cache size

// 📌 How to Detect Memory Leaks
// - Chrome DevTools > Performance or Memory tabs
// - Use heap snapshots to check retained objects
// - Look for detached DOM trees

// 🧹 Garbage Collection in JS:
// JavaScript automatically frees up memory if:
// - An object is unreachable (no references pointing to it)

// Avoid keeping unnecessary references!
