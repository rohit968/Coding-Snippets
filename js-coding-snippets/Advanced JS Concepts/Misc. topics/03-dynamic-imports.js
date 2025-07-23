/* 
============================================
🧠 Dynamic Imports in JavaScript (ES2020+)
============================================

1️⃣ What is this?
------------------
Dynamic imports let you load modules **on demand** using the `import()` function.  
Unlike static `import`, it returns a **Promise**, allowing conditional or asynchronous loading.

2️⃣ Why does it matter?
------------------------
✅ Reduces initial bundle size (great for performance).  
✅ Enables **code splitting**, **lazy loading**, and **feature flags**.  
✅ Useful when loading modules only if/when needed.

3️⃣ Why and when to use?
-------------------------
✅ On route change in SPAs (e.g. load admin panel only when visited).  
✅ For optional features (e.g. charts, modals, payment gateways).  
✅ In conditionally loaded logic based on user role or device type.

4️⃣ Snippets:
--------------

*/

// 🔄 Basic Dynamic Import
import('./mathUtils.js')
  .then(module => {
    console.log(module.add(2, 3));  // use exported function
  })
  .catch(err => console.error('Module failed to load', err));

// ✅ Async/await syntax
async function loadMath() {
  const math = await import('./mathUtils.js');
  console.log(math.PI);
}
loadMath();

// 📦 Conditional import
if (window.innerWidth > 768) {
  import('./desktop-ui.js').then(ui => ui.init());
} else {
  import('./mobile-ui.js').then(ui => ui.init());
}

// 🧠 Named vs. default import in dynamic context
// mathUtils.js
// export const add = () => {}; export default function () {}

const { default: defFunc, add } = await import('./mathUtils.js');
defFunc(); add();


//5️⃣ Real-World Examples:
//-------------------------

//✅ **Lazy Load a Chart Library**:
const showChart = async () => {
  const Chart = await import('chart.js');
  new Chart.Chart(ctx, config);
};

// ✅ Feature Flag Based Imports:
if (flags.newFeature) {
  const { NewComponent } = await import('./NewComponent.js');
  render(<NewComponent />);
}

// ✅ Internationalization (i18n):
// Load translation files based on user locale:
const { default: strings } = await import(`./locales/${userLang}.js`);

/*
6️⃣ Interview Tips:
❓ Q: What’s the difference between static and dynamic import?
✅ A: Static imports are hoisted and evaluated at parse time; dynamic imports are async and evaluated at runtime.

❓ Q: Can dynamic imports be used outside of modules?
✅ A: Yes, dynamic import() works in both modules and scripts.

❓ Q: What does import() return?
✅ A: A Promise that resolves to the module object.

🔥 Bonus:

Dynamic imports enable code splitting with bundlers like Webpack or Vite.

Use webpackChunkName magic comment to name the chunk:
  import(/* webpackChunkName: "admin-chunk" "./AdminPanel.js");


*/