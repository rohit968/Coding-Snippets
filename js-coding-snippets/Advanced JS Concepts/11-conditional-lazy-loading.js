/* 
=========================================================
🕹️ Conditional & 💤 Lazy Loading in JavaScript Modules
=========================================================

1️⃣ What is Conditional Loading?
-------------------------------
✅ Loading a module **only if** a certain condition is met (like user action or environment).
✅ Useful for:
  - Feature flags
  - Platform/browser-specific logic
  - Environment-specific code (e.g., dev vs prod)

💡 Uses dynamic `import()` — returns a promise.

```js
if (window.innerWidth > 768) {
  import('./desktopFeatures.js').then(module => {
    module.initDesktopUI();
  });
}

2️⃣ What is Lazy Loading?
✅ Loading a module on demand, rather than at the initial load.
✅ Helps reduce initial bundle size, speeds up performance.
✅ Common in:

Routes in SPAs (React, Vue, etc.)

Heavy features (charts, maps, analytics)

Modals or rarely used UI
*/

// Lazy load chart only when user clicks a button
document.getElementById('loadChart').addEventListener('click', async () => {
  const { drawChart } = await import('./chart.js');
  drawChart();
});

//3️⃣ Real-World Usage in React:
// React lazy + Suspense
import React, { Suspense } from 'react';
const ProfilePage = React.lazy(() => import('./ProfilePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePage />
    </Suspense>
  );
}

/*
4️⃣ Benefits of Lazy/Conditional Loading:
✅ Faster initial load
✅ Efficient resource usage
✅ Improves user-perceived performance
✅ Great for mobile optimization

5️⃣ Interview Tips:
❓ Q: What’s the difference between static import and dynamic import?
✅ A: Static imports load at the start, dynamic imports load at runtime and return a promise.

❓ Q: Why would you use lazy loading?
✅ A: To reduce initial bundle size and load code only when needed.

❓ Q: Can dynamic import work with await?
✅ A: Yes, it's a promise — you can use await import('./module.js').

6️⃣ Advanced Example — Condition Based on Device:
*/
const isMobile = /Mobi/.test(navigator.userAgent);
if (isMobile) {
  import('./mobile.js').then(({ initMobile }) => initMobile());
} else {
  import('./desktop.js').then(({ initDesktop }) => initDesktop());
}

/*
🎯 Summary:
✅ Conditional loading: Load based on logic
✅ Lazy loading: Load only when needed
✅ Improves performance and UX
✅ Uses import() which returns a Promise

*/