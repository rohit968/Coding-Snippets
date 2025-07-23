/*
📌 What is the Visual Viewport API?

📱 It provides details about the *visual* part of the viewport — especially important on mobile devices when zooming or virtual keyboards shift the visible screen.

🧩 Useful when:
- Managing overlays/modals during zoom
- Adjusting input fields or sticky elements during on-screen keyboard
- Handling mobile-safe layouts

🚫 Not the same as window.innerHeight (which doesn't account for zoom or keyboard shifts)

🔍 Provided by: window.visualViewport
*/

/*
🔎 Get viewport info and listen to changes
*/

function logVisualViewport() {
  const vvp = window.visualViewport;

  if (!vvp) {
    console.log("❌ Visual Viewport API not supported");
    return;
  }

  console.log("📏 Visual viewport dimensions:");
  console.log("🔹 Width:", vvp.width);
  console.log("🔹 Height:", vvp.height);
  console.log("🔹 Scale:", vvp.scale);
  console.log("🔹 Offset Left:", vvp.offsetLeft);
  console.log("🔹 Offset Top:", vvp.offsetTop);

  // Listen to viewport changes (zoom, scroll, keyboard)
  vvp.addEventListener("resize", () => {
    console.log("📐 Viewport resized:", vvp.width, "x", vvp.height);
  });

  vvp.addEventListener("scroll", () => {
    console.log("📦 Viewport scrolled: offset", vvp.offsetTop, vvp.offsetLeft);
  });
}

logVisualViewport();

/*
📦 Real-World Use Cases:
- Fix modals/input fields when keyboard appears
- Prevent UI breakage on mobile zoom
- Smooth floating CTA buttons with zoom/keyboard

🧠 Interview Tips:
- Works alongside ResizeObserver and layout strategies
- Ideal for mobile web apps or PWAs
- Not widely supported in older browsers (mostly Chromium-based)

*/
