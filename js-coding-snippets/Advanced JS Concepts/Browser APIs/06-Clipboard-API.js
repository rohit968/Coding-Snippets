/*
📌 What is the Clipboard API?

🔹 Lets you programmatically read from or write to the user's clipboard
🔹 Secure — only works on HTTPS or localhost
🔹 Requires user interaction (e.g. button click)

🎯 Commonly used in: copy-to-clipboard buttons, text tools, paste support
*/

/*
📋 Copy Text to Clipboard
*/

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("✅ Copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("❌ Copy failed:", err);
    });
}

// 🔘 Trigger copy via button
const copyBtn = document.createElement("button");
copyBtn.textContent = "📋 Copy Promo Code";
copyBtn.onclick = () => copyTextToClipboard("PURECRAVVE50");
document.body.appendChild(copyBtn);

/*
📥 Read Text from Clipboard
*/

function readFromClipboard() {
  navigator.clipboard.readText()
    .then((text) => {
      console.log("📥 Pasted:", text);
      alert(`You pasted: ${text}`);
    })
    .catch((err) => {
      console.error("❌ Paste failed:", err);
    });
}

// 🔘 Trigger paste via button
const pasteBtn = document.createElement("button");
pasteBtn.textContent = "📥 Paste from Clipboard";
pasteBtn.onclick = readFromClipboard;
document.body.appendChild(pasteBtn);

/*
📦 Real-World Use Cases:
- Copy referral code / coupon / order ID
- One-click copy of delivery address or tracking link
- Paste from clipboard in support chat or feedback form

🧠 Interview Tips:
- Only works on secure origins (HTTPS / localhost)
- Requires **user gesture** (click/keypress)
- `clipboard.writeText()` returns a Promise
- Use `execCommand('copy')` as a legacy fallback (not recommended now)
*/
