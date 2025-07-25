// 📌 Topic: Lazy Loading + Suspense
// 📖 Description: `React.lazy()` loads components only when needed.
// Suspense shows fallback while the component loads. Useful for large apps.

import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyGreeting"));

export default function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<p>Loading component...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// 💡 Output:
// Displays "Main App"
// Then shows "Loading component..." briefly
// Finally loads LazyGreeting content

// Create a separate file: LazyGreeting.jsx
// export default function LazyGreeting() {
//   return <p>👋 Hello from lazy component!</p>;
// }
