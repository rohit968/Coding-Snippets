/*
📌 What is the Notification API?

🔹 Allows web apps to show system-level (OS/browser) notifications to users
🔹 Often used in chat apps, reminders, background services

📌 What is the Permissions API?

🔹 Lets you check the permission status (granted, denied, prompt) for sensitive APIs like:
  - Notifications
  - Geolocation
  - Clipboard
  - Camera & Mic
*/

/*
🔔 Show Notification (After asking permission)
*/

function showNotification() {
  if (!("Notification" in window)) {
    alert("❌ This browser does not support notifications.");
    return;
  }

  // Check permission
  if (Notification.permission === "granted") {
    new Notification("🎂 Order Confirmed!", {
      body: "Your PureCravve cake will be delivered shortly!",
      icon: "https://i.imgur.com/1XqW2fz.png" // Replace with your logo
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        showNotification(); // Retry showing
      }
    });
  }
}

/*
✅ Trigger notification via button
*/

const notifyBtn = document.createElement("button");
notifyBtn.textContent = "🔔 Notify Me";
notifyBtn.onclick = showNotification;
document.body.appendChild(notifyBtn);

/*
🔐 Permissions API — Check status of any sensitive permission
*/

navigator.permissions.query({ name: "notifications" }).then((status) => {
  console.log("🔍 Notification permission status:", status.state);
  status.onchange = () => {
    console.log("🔁 Permission changed to:", status.state);
  };
});

/*
📦 Real-World Use Cases:
- Push alerts for new messages/orders
- Reminder for scheduled delivery
- Silent tracking of user permission state

🧠 Interview Tips:
- Notifications require HTTPS or localhost
- Always request permission with user intent (e.g. via a button)
- Use `Permissions API` to avoid unnecessary prompts
- Pair with Service Workers for background notifications
*/
