/*
📌 What are Web Workers?

🧵 Web Workers run scripts in background threads. They allow you to perform heavy computations (like image processing, parsing large files, etc.) without blocking the main UI thread.

💡 Why use?
- Keeps UI responsive
- Offloads CPU-intensive work
- Improves performance in complex web apps

🔧 How it works:
- Create a separate JS file (worker script)
- Use `postMessage()` to communicate with the main thread
*/

// ✅ main.js
const worker = new Worker("worker.js");

worker.postMessage("Start heavy calculation...");

worker.onmessage = function (e) {
  console.log("Message from worker:", e.data);
};

// 🧠 Interview tip: The main thread continues without freezing UI

/* 
✅ worker.js 
Note: This is a separate JS file!
*/
self.onmessage = function (e) {
  console.log("Worker received:", e.data);

  // Simulate a heavy operation
  let sum = 0;
  for (let i = 0; i < 1e8; i++) sum += i;

  self.postMessage(`Calculation done! Sum = ${sum}`);
};

/*
🧠 Real World Use Cases:
- Parsing large JSON or CSV
- Image filters and processing (e.g., resize, blur)
- Data compression / decompression
- Web-based code editors (e.g., syntax checking)
- Scientific simulations or visualizations

⚠️ Limitations:
- No direct DOM access
- Must use postMessage for communication
- CORS restrictions if loaded from another domain

🚀 Bonus: You can also use Shared Workers or Service Workers for specialized scenarios
*/
