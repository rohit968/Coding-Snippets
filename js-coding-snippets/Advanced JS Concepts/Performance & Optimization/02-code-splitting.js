// 📦 What is Code Splitting?
// Code Splitting is a technique to break a large JavaScript bundle into smaller chunks.
// These chunks are loaded on-demand to improve performance, especially in SPAs.

// ✅ When do you need it?
// - Large apps with multiple routes/pages
// - Some features or components used conditionally (e.g. modals, charts)
// - To speed up initial page load by deferring less-critical JS

// ✅ Technique 1: Native Dynamic Imports (works in modern browsers)

const loadHeavyFeature = async () => {
  const module = await import('./heavyFeature.js');
  module.runHeavyFeature();
};

// Could be used on a button click
document.querySelector('#loadFeatureBtn').addEventListener('click', loadHeavyFeature);

// ✅ Technique 2: Framework Example – React Code Splitting

/*
import React, { Suspense, lazy } from 'react';

const ChatComponent = lazy(() => import('./ChatComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatComponent />
    </Suspense>
  );
}
*/

// ✅ Webpack Example (behind the scenes):
// Using dynamic import tells Webpack to split the code into chunks:
// import() creates separate chunk files that are lazy-loaded

/*
Webpack config:
output: {
  filename: '[name].bundle.js',
  chunkFilename: '[name].chunk.js',
}
*/

// ✅ Benefits of Code Splitting:
// - Faster initial load
// - Smaller JS to parse + execute
// - Better user experience (especially mobile)
// - More control over when/what to load

// ⚠️ Considerations:
// - Don't over-split (can lead to too many requests)
// - Use cache-busting strategies for chunk files
// - Always show a fallback while loading chunks (loader/spinner)
