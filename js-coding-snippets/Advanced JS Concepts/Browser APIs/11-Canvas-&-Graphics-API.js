/*
📌 What is the Canvas API?

🖼️ HTML5 Canvas provides a low-level, pixel-based drawing surface. You can draw shapes, images, animations, and even build games directly in the browser.

🧠 Core Interface: CanvasRenderingContext2D

🧱 Key methods:
- fillRect(), strokeRect()
- beginPath(), moveTo(), lineTo(), arc()
- fillText(), strokeText()
- drawImage()
*/

/*
🎨 Basic Drawing Example
*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 🟥 Draw a filled red rectangle
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 60);

// ⬛ Draw an outlined rectangle
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 100, 60);

// 🟦 Draw a circle
ctx.beginPath();
ctx.arc(200, 40, 30, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// ✍️ Write text
ctx.fillStyle = "green";
ctx.font = "20px Arial";
ctx.fillText("Hello Canvas!", 10, 100);

// 🖼️ Draw an image (make sure it's loaded)
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 10, 120, 100, 100);
};
img.src = "https://via.placeholder.com/100";

/*
📦 Real-World Use Cases:
- Game development (e.g., Flappy Bird)
- Data visualizations (custom charts)
- Photo editors, whiteboards
- Signature pads or animation tools

🧠 Interview Tips:
- Canvas is immediate-mode (doesn’t retain object state)
- Performance depends on how often you redraw
- Can be combined with requestAnimationFrame for animations

⚠️ Accessibility: Canvas alone is not semantic. Provide fallbacks.
*/
