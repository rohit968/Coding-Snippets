/*
👀 What are ResizeObserver & IntersectionObserver?

They are modern browser APIs to efficiently observe changes:
- ResizeObserver → Watch size changes of elements.
- IntersectionObserver → Detect when elements enter/exit viewport.

📦 Use Cases:
- Lazy loading images
- Trigger animations on scroll
- Auto-adjusting UI layouts
- Tracking visibility for ads or analytics
*/

/* 🟦 ResizeObserver — Tracks element's dimension changes */
const resizableBox = document.querySelector('.resizable');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('🔄 Element resized:');
    console.log('New width:', entry.contentRect.width);
    console.log('New height:', entry.contentRect.height);
  }
});

resizeObserver.observe(resizableBox); // Start watching

// HTML: <div class="resizable" style="resize: both; overflow: auto;">Resize me!</div>

/* 🟩 IntersectionObserver — Tracks visibility relative to viewport */
const observedSection = document.querySelector('.section');

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("✅ Element is in view!");
      entry.target.classList.add("in-view");

      // Optional: Stop observing after first trigger
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3 // Fire callback when 30% of element is visible
});

intersectionObserver.observe(observedSection);

// HTML: <div class="section" style="height: 300px; margin-top: 100vh;">Scroll to reveal me</div>

/* 🧠 Real-World Examples:
- Reveal animations on scroll (AOS-like effects)
- Infinite scroll (load more when scrolled to bottom)
- Responsive components reacting to size changes
*/

/* 💬 Interview Tips:
Q: Why are IntersectionObserver & ResizeObserver preferred over scroll/resize events?
A: They are more efficient — don't fire continuously and avoid layout thrashing.

Q: How does IntersectionObserver help performance?
A: It eliminates manual scroll math and batching logic.
*/

