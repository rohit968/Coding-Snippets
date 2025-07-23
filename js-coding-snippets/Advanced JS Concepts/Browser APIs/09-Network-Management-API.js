/*
📌 What is the Network Information API?

📶 It lets you access information about the user’s current network connection.
You can tailor your app behavior (like loading low-res images) based on network conditions.

🧩 Available via: navigator.connection (or navigator.mozConnection / webkitConnection in some browsers)

📋 Common properties:
- effectiveType: '4g', '3g', '2g', 'slow-2g'
- downlink: estimated Mbps
- rtt: estimated round-trip time in ms
- saveData: user enabled data-saving mode?

⚠️ Experimental API – not supported in all browsers
*/

/*
📡 Example: Log network stats and react to changes
*/

function checkNetworkStats() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (!connection) {
    console.log("❌ Network Information API not supported in this browser");
    return;
  }

  console.log("📶 Effective Connection Type:", connection.effectiveType);
  console.log("⬇️ Estimated Downlink:", connection.downlink, "Mbps");
  console.log("⏱️ Estimated RTT:", connection.rtt, "ms");
  console.log("🪙 Data Saver Mode:", connection.saveData);

  // React to changes in network type
  connection.addEventListener("change", () => {
    console.log("🔁 Network connection changed:", connection.effectiveType);
    // e.g., downgrade image quality or pause video streaming
  });
}

// Run it on page load
checkNetworkStats();

/*
📦 Real-World Use Cases:
- Switch to low-quality video/images on slow connections
- Reduce data-heavy API calls on poor networks
- Warn users when switching to mobile data

🧠 Interview Tips:
- Ideal for progressive enhancement
- Combine with lazy loading strategies
- Remember it's experimental: check browser support
*/
