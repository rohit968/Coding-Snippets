/* 
🚀 JavaScript Performance Optimization Tips

🎯 Why?
• Improve load times
• Reduce memory usage
• Deliver smoother user experiences
• Prevent app crashes or slowdowns

📌 Key Concepts:
1. Efficient code execution
2. Minimizing blocking operations
3. Smart memory and DOM management
*/

/* 
🧠 Tip 1: Debounce and Throttle
Prevent excessive function calls (like on scroll or input)
*/

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let waiting = false;
  return (...args) => {
    if (!waiting) {
      fn(...args);
      waiting = true;
      setTimeout(() => (waiting = false), limit);
    }
  };
}

/*
🧠 Tip 2: Use requestAnimationFrame for visual updates
*/

function animate() {
  // Better than setInterval or setTimeout for animation
  requestAnimationFrame(() => {
    // perform animation step
    animate(); // loop
  });
}

/*
🧠 Tip 3: Minimize DOM Manipulation
*/

const fragment = document.createDocumentFragment();
["One", "Two", "Three"].forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  fragment.appendChild(li);
});
document.querySelector("ul").appendChild(fragment); // One paint instead of 3

/*
🧠 Tip 4: Avoid Memory Leaks
- Clear intervals, event listeners, unused references
*/

const btn = document.querySelector("#clickBtn");
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);

// Later on (clean up)
btn.removeEventListener("click", handleClick);

/*
🧠 Tip 5: Lazy load content
- Use `loading="lazy"` for images or dynamically load components
*/

<img src="product.jpg" loading="lazy" alt="Product" />

/*
🧠 Tip 6: Use efficient data structures
- Prefer Maps over Objects when keys are dynamic
- Use Sets for fast lookups
*/

const ids = new Set([1, 2, 3]);
console.log(ids.has(2)); // true

/*
🧠 Tip 7: Optimize loops
- Avoid unnecessary recalculations
*/

const list = [1, 2, 3];
const length = list.length;
for (let i = 0; i < length; i++) {
  console.log(list[i]);
}

/*
🧠 Tip 8: Avoid synchronous long tasks
- Split large tasks with setTimeout / Web Workers / async chunks
*/

/*
🧠 Tip 9: Bundle & Minify JS
- Use tools like Webpack, Vite, or esbuild
- Tree-shake unused code
*/

/*
🧠 Tip 10: Analyze with Chrome DevTools
- Performance tab: Frame drops, bottlenecks
- Memory tab: Snapshots, retained size
- Lighthouse: Automated suggestions
*/

/*
🧪 Interview Tip:
"What are ways to improve JS performance in a large app?"
→ Mention: debouncing, DOM batching, rAF, memory leaks, lazy loading, bundling
*/

