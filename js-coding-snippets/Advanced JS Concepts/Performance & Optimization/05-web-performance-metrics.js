// 📊 WEB PERFORMANCE METRICS (Core Web Vitals)
// These metrics help measure real user experience and performance on the web

// 🚀 1. First Contentful Paint (FCP)
// Time it takes for the first piece of DOM content (text/image) to appear
// Ideal: < 1.8 seconds

// 🚀 2. Largest Contentful Paint (LCP)
// Time it takes for the largest visible content to load (image/heading/etc.)
// Measures loading performance
// Ideal: < 2.5 seconds

// 🚀 3. Time to Interactive (TTI)
// When the page becomes fully interactive (responds to input/events)
// Ideal: < 5 seconds

// 🚀 4. First Input Delay (FID)
// Measures input responsiveness — time from user input to browser processing
// Ideal: < 100ms

// 🚀 5. Cumulative Layout Shift (CLS)
// Measures visual stability — unexpected layout movements (e.g. buttons jumping around)
// Ideal: < 0.1

// 🧰 How to Measure These?

// ✅ Using the Performance API (built-in):
window.addEventListener('load', () => {
  const perfEntries = performance.getEntriesByType('navigation')[0];
  console.log('Page Load Time:', perfEntries.loadEventEnd - perfEntries.startTime);
  console.log('DOM Content Loaded:', perfEntries.domContentLoadedEventEnd - perfEntries.startTime);
});

// ✅ Using Google Lighthouse
// - Run in Chrome DevTools > Lighthouse
// - Provides a full audit of performance, SEO, accessibility, etc.

// ✅ Using Web Vitals library (for production apps):
// npm install web-vitals

import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

// 📦 Can send this data to Google Analytics or your own monitoring system

// 🧠 Optimization Tips Based on Metrics:
// - FCP: Optimize HTML/CSS delivery, preload fonts
// - LCP: Lazy load images, compress media, reduce JS blocking
// - CLS: Set fixed size for images, avoid dynamic content above-the-fold
// - FID: Reduce JavaScript execution time, avoid heavy synchronous scripts
// - TTI: Code splitting, defer non-critical JS

// 💡 Note: Google considers these metrics for SEO ranking too
