/*
📌 What is getUserMedia()?

🔹 Part of MediaDevices API
🔹 Allows web apps to access camera and microphone
🔹 Requires user permission (browser popup)

🎯 Used in: video calls, live previews, voice recording, etc.
*/

const video = document.createElement("video");
video.autoplay = true;
video.style.width = "300px";
video.style.border = "2px solid #ccc";
document.body.appendChild(video);

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    video.srcObject = stream;
    console.log("📹 Live camera stream started!");
  })
  .catch((err) => {
    console.error("❌ Access denied or device not found:", err);
  });

/*
📌 What is MediaRecorder?

🔹 Lets you record camera/mic streams
🔹 Can save audio/video as file blobs (e.g., .webm)

🎯 Useful in: screen recorders, voice memos, video messages
*/

let recorder;
let recordedChunks = [];

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded-video.webm";
      a.textContent = "📥 Download recording";
      document.body.appendChild(a);
    };

    recorder.start();
    console.log("🔴 Recording started...");

    // Stop after 5 seconds
    setTimeout(() => {
      recorder.stop();
      console.log("🛑 Recording stopped.");
    }, 5000);
  });

/*
📌 What is Screen Capture API?

🔹 Lets user share screen (desktop, tab, window)
🔹 Returns a MediaStream just like camera

🎯 Used in: screen sharing, tutorials, screen recorders
*/

const screenBtn = document.createElement("button");
screenBtn.textContent = "🎥 Share Screen";
document.body.appendChild(screenBtn);

screenBtn.addEventListener("click", async () => {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    const screenVideo = document.createElement("video");
    screenVideo.srcObject = screenStream;
    screenVideo.autoplay = true;
    screenVideo.style.border = "2px solid blue";
    screenVideo.style.width = "300px";
    document.body.appendChild(screenVideo);
    console.log("🖥️ Screen capture started");
  } catch (err) {
    console.error("❌ Screen capture failed:", err);
  }
});

/*
📦 Real-World Use Cases:
- Zoom, Google Meet, Loom
- Webcam preview before joining call
- Screen recorders and live stream tools

🧠 Interview Tips:
- Media access always requires user permission
- Use `MediaRecorder.ondataavailable` to collect chunks
- `getUserMedia()` can request either audio or video or both
- Screen capture needs `{ video: true }` in getDisplayMedia

💡 Bonus:
You can combine camera + screen + mic together using multiple MediaStreams!
*/
