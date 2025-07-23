/*
📌 What is the WebSocket API?

🔹 Enables two-way, real-time communication between browser and server
🔹 Unlike HTTP (request/response), WebSocket stays open for ongoing messages
🔹 Ideal for chat apps, live notifications, games, stock updates, etc.

🌐 Protocol: ws:// or wss:// (secure)
Syntax: const socket = new WebSocket("wss://yourserver.com");

🧠 Key WebSocket Events:
- open: Connection established
- message: Data received
- close: Connection closed
- error: Something went wrong
*/

/*
🔌 Example: Create a WebSocket connection
(Note: This example won't fully work unless you have a WebSocket server)
*/

const socket = new WebSocket("wss://echo.websocket.org"); // Public echo server

// ✅ Connection opened
socket.addEventListener("open", () => {
  console.log("✅ WebSocket connection established");
  socket.send("Hello from PureCravve 🍰");
});

// 💬 Message received
socket.addEventListener("message", (event) => {
  console.log("📩 Received from server:", event.data);
});

// ❌ Error handling
socket.addEventListener("error", (err) => {
  console.error("⚠️ WebSocket error:", err);
});

// 🔌 Connection closed
socket.addEventListener("close", () => {
  console.log("❎ WebSocket connection closed");
});

/*
📦 Real-World Use Cases:
- Live order status updates (e.g., "Your cake is being packed 🎂")
- Chat or customer support tools
- Multiplayer baking games 😄

🧠 Interview Tips:
- WebSockets are stateful, unlike HTTP
- Use heartbeats/pings to keep long connections alive
- Prefer WSS over WS in production (encrypted)
- Pair with `socket.io` in Node.js for easier handling
*/
