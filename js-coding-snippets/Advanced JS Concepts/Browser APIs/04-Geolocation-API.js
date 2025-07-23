/*
📌 What is the Geolocation API?

🔹 Allows web apps to get user's geographic location
🔹 Part of the `navigator` object
🔹 Requires user permission (browser prompt)
🔹 Accuracy depends on device type, network, GPS

🎯 Used in: delivery apps, maps, weather services, location-based content
*/

/*
🔹 Get Current Position (One-time)
*/

navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(`📍 Location: ${latitude}, ${longitude}`);

    const mapLink = document.createElement("a");
    mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
    mapLink.target = "_blank";
    mapLink.textContent = "🌍 Open Location in Google Maps";
    document.body.appendChild(mapLink);
  },
  (error) => {
    console.warn("❌ Location Error:", error.message);
  },
  {
    enableHighAccuracy: true,  // Try to use GPS if available
    timeout: 5000,             // Max wait time
    maximumAge: 0              // No cache
  }
);

/*
🔁 Watch Position (Live tracking)

🔹 Automatically updates whenever location changes
🔹 Returns a watch ID that you can use to stop tracking
*/

let watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log(`📡 Live Location: ${position.coords.latitude}, ${position.coords.longitude}`);
  },
  (error) => {
    console.error("❌ Watch error:", error.message);
  }
);

// ❌ Stop watching after 30 seconds
setTimeout(() => {
  navigator.geolocation.clearWatch(watchId);
  console.log("🛑 Live tracking stopped");
}, 30000);

/*
📦 Real-World Use Cases:
- Live food delivery tracking (e.g., Swiggy, Zomato)
- Ride-hailing apps (Uber, Ola)
- Weather apps based on current location
- Geo-fencing & location-based notifications

🧠 Interview Tips:
- Always handle both success & error callbacks
- Accuracy can vary based on device/network
- Use `enableHighAccuracy: true` for GPS-level precision
- Geolocation is unavailable in insecure (non-HTTPS) contexts
*/
