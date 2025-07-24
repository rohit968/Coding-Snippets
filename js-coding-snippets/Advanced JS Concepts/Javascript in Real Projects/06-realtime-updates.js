/* 
Real-time Updates with fetch() + WebSocket
This snippet shows two approaches:
1. Polling with fetch() (simpler)
2. Using WebSocket (for true real-time)


✅ Option 1: Real-time Polling with fetch() (every few seconds)
<!-- realtime-fetch.html -->
<div id="notificationArea">Loading notifications...</div>
*/

//(Option 1: Polling)
const notificationArea = document.getElementById("notificationArea");

// Simulate server endpoint
async function fetchNotifications() {
  // You can replace this with an actual API endpoint
  const fakeServerData = [
    `🔔 New order from Anjali – ${new Date().toLocaleTimeString()}`,
    `📦 Order #123 ready to dispatch – ${new Date().toLocaleTimeString()}`
  ];

  // Simulate delay
  return new Promise((res) => {
    setTimeout(() => res(fakeServerData), 300);
  });
}

// Poll every 5 seconds
setInterval(async () => {
  const data = await fetchNotifications();
  notificationArea.innerHTML = data.map(d => `<p>${d}</p>`).join("");
}, 5000);


// ✅ Option 2: Real-time with WebSocket
// 06-realtime-updates.js (Option 2: WebSocket)
const socket = new WebSocket("wss://your-server.com/updates");

socket.onopen = () => {
  console.log("Connected to WebSocket");
};

socket.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  const p = document.createElement("p");
  p.textContent = `🔔 ${notification.message}`;
  document.getElementById("notificationArea").appendChild(p);
};

socket.onerror = (err) => {
  console.error("WebSocket error:", err);
};

//⚠️ You'll need a running WebSocket server for real implementation. Use libraries like Socket.io, ws, or platforms like Firebase, Supabase, or Pusher for ease.

/*
🧠 Where You Use Real-Time Updates
      New orders on dashboards (restaraunt)
      Chat messages
      Stock tickers
      Notification alerts
      Live sports scores
*/
