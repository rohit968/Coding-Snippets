/*
📌 What are Device APIs?

🔍 These APIs provide insights or interaction with device-level features like:
- User agent info (browser/device type)
- Battery status
- Triggering vibration (on supported devices)

Mostly used in mobile web apps or progressive web apps (PWAs).
*/

// ✅ 1. Device Info - `navigator.userAgent`
console.log("📱 User Agent:", navigator.userAgent);

// 📌 Why use it?
// To detect browser/device type and adjust behavior/styles accordingly

// ⚠️ Avoid strict userAgent-based browser detection for compatibility reasons.

// ✅ 2. Battery API (Limited Support: mostly Chrome/Android)
if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    console.log(`🔋 Battery Level: ${battery.level * 100}%`);
    console.log(`🔌 Charging: ${battery.charging ? "Yes" : "No"}`);

    battery.addEventListener("levelchange", () => {
      console.log("Battery level changed:", battery.level);
    });
  });
} else {
  console.log("⚠️ Battery API not supported on this browser.");
}

// 📌 Why use it?
// For progressive features like reducing background tasks on low battery

// ✅ 3. Vibration API
if ("vibrate" in navigator) {
  // Vibrate pattern: vibrate 200ms, pause 100ms, vibrate 300ms
  const didVibrate = navigator.vibrate([200, 100, 300]);
  console.log("🎯 Vibration triggered:", didVibrate);
} else {
  console.log("⚠️ Vibration API not supported.");
}

// 📌 Why use it?
// Feedback on mobile actions (like clicking a button in a PWA or game)

// 🧠 Interview Tips:
// - Battery API is mostly for Chrome & Android — mention limited support
// - Vibration API is great for mobile-first UX
// - `navigator.userAgent` can help tailor experience, but use with care

// ⚠️ Gotchas:
// - Vibration may not work if triggered without user interaction
// - User agent strings can be spoofed or change over time
// - Battery API deprecated in some contexts for privacy concerns
