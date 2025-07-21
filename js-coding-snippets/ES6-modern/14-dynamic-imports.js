// ======================================================
// 📌 Topic: Dynamic Imports in JavaScript (ES2020+)
// es6-modern/14-dynamic-imports.js
// ======================================================

/**
 * ✅ What is it?
 * Dynamic `import()` lets you load modules *only when needed* instead of at the top of the file.
 * It's asynchronous and returns a promise.
 *
 * ✅ Why is it useful?
 * - Reduces initial bundle size
 * - Speeds up page load by loading code on demand
 * - Helpful in conditional or event-based loading
 *
 * ✅ Syntax:
 * import(modulePath).then(module => { ... })
 * // or
 * const module = await import(modulePath)
 */

// 🔹 Example: Conditional Import
async function loadUtilsIfNeeded(shouldLoad) {
  if (shouldLoad) {
    const utils = await import('./utils.js');
    utils.sayHello();
  } else {
    console.log("Skipping utils import");
  }
}

loadUtilsIfNeeded(true); // Conditionally loads utils

// 🔹 Example: Load on Button Click
const btn = document.getElementById('loadBtn');
btn.addEventListener('click', async () => {
  const { formatDate } = await import('./date-utils.js');
  console.log('Formatted:', formatDate(new Date()));
});

// 💡 Best Practices:
// - Group dynamic modules logically (e.g., per feature)
// - Use webpack's magic comments for chunk names (if using bundlers)
// - Avoid overusing; use when there's a clear perf or UX win

// 🔊 Interview Tip:
// "Dynamic import gives JS a plugin-like capability. Think of it as loading tools *only when* you open the toolbox."
