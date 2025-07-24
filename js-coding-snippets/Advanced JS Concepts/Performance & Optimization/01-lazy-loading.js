// 💡 What is Lazy Loading?
// Lazy loading is a design pattern that delays the loading of resources (like images, components, or data) until they're actually needed.
// This improves performance, especially for large pages or applications.

// ✅ Example 1: Lazy Loading Images with IntersectionObserver

// Step 1: In HTML, use data-src instead of src
// <img data-src="actual-image.jpg" class="lazy" alt="Lazy Image">

const lazyImages = document.querySelectorAll('img.lazy');

const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Load real image
      img.classList.remove('lazy');
      observer.unobserve(img); // Stop observing once loaded
    }
  });
});

lazyImages.forEach(img => {
  lazyObserver.observe(img);
});

// ✅ Example 2: Lazy Loading JavaScript Modules with Dynamic import()

// Click a button to load a heavy module only when needed
const button = document.querySelector('#loadChart');

button.addEventListener('click', async () => {
  const { drawChart } = await import('./chartModule.js');
  drawChart(); // Use the module function
});

// ✅ Example 3: Lazy Loading Routes (in SPA frameworks like React, Vue)

// React-style dynamic import with Suspense (simplified)
/*
import React, { Suspense, lazy } from 'react';
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
*/

// 📈 Benefits of Lazy Loading:
// - Reduces initial page load time
// - Minimizes memory usage
// - Improves user experience
// - Reduces unnecessary bandwidth consumption

// ⚠️ Things to Watch Out For:
// - Lazy load only what’s not needed initially
// - Always include a loading indicator (like a spinner)
// - Don’t break SEO-critical content (e.g. use <noscript> fallback for images)
