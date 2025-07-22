// ======================================================
// 📌 Topic: IntersectionObserver in JavaScript
// dom-basics/22-intersection-observer.js
// ======================================================

/**
 * ✅ What is it?
 * `IntersectionObserver` lets you monitor when an element enters/exits the viewport.
 *
 * ✅ Why use it?
 * - Lazy load images
 * - Animate elements when scrolled into view
 * - Infinite scrolling
 */

// 🔹 Create a target element to observe
const box = document.createElement('div');
box.textContent = '👋 I appear when visible!';
box.style.height = '100px';
box.style.marginTop = '150vh'; // Push it way down
box.style.background = '#f2f2f2';
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';
box.style.fontSize = '20px';
document.body.appendChild(box);

// 🔹 Define the observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('✅ Element is in view!');
      entry.target.style.background = '#b2f2bb'; // Highlight when visible
      observer.unobserve(entry.target); // Optional: stop observing after trigger
    }
  });
};

// 🔹 Create the IntersectionObserver
const observerOptions = {
  root: null, // use viewport
  threshold: 0.5, // 50% must be visible
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// 🔹 Start observing
observer.observe(box);

// 🧠 Interview Tip:
// "IntersectionObserver is more performant than scroll events for detecting visibility."
