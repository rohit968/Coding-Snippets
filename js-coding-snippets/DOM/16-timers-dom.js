// ======================================================
// 📌 Topic: Timers with DOM (setTimeout & setInterval)
// dom-basics/18-timers-dom.js
// ======================================================

/**
 * ✅ What is it?
 * - `setTimeout`: runs code once *after* a delay
 * - `setInterval`: runs code *repeatedly* after a delay
 * - We can combine these with DOM manipulation for animations, loaders, clocks, etc.
 */

// 🔹 setTimeout Example: Show a banner after 2s
const banner = document.createElement('div');
banner.textContent = '🎉 Welcome to PureCravve!';
banner.style.background = '#ffc107';
banner.style.padding = '10px';
banner.style.marginTop = '10px';
banner.style.textAlign = 'center';
banner.style.display = 'none';

document.body.appendChild(banner);

setTimeout(() => {
  banner.style.display = 'block';
}, 2000); // show after 2 seconds

// 🔹 setInterval Example: Countdown Timer
const timerBox = document.createElement('div');
timerBox.style.fontSize = '24px';
timerBox.style.margin = '20px';
document.body.appendChild(timerBox);

let timeLeft = 5;

const countdown = setInterval(() => {
  timerBox.textContent = `⏳ Time Left: ${timeLeft}s`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdown);
    timerBox.textContent = '✅ Time’s up!';
  }
}, 1000);

// 🔹 Repeating Animation: Color toggle every 500ms
const pulseBox = document.createElement('div');
pulseBox.textContent = '💓 Pulse Box';
pulseBox.style.padding = '20px';
pulseBox.style.textAlign = 'center';
pulseBox.style.marginTop = '20px';
pulseBox.style.background = 'lightblue';

document.body.appendChild(pulseBox);

let isPink = false;
const pulse = setInterval(() => {
  pulseBox.style.background = isPink ? 'lightblue' : 'hotpink';
  isPink = !isPink;
}, 500);

// 🔹 Clear interval after 5 seconds
setTimeout(() => {
  clearInterval(pulse);
  pulseBox.textContent = '🛑 Animation Stopped';
}, 5000);

// 🧠 Interview Tip:
// "Timers are essential for real-time DOM updates like spinners, loaders, clocks, or delayed modals."
