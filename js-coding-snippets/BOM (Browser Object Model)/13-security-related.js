/* 
===============================================
🛡️ BOM - Security-Related Properties (isSecureContext & crypto)
===============================================

1️⃣ What is this?
------------------
Security‑related properties on the `window` object help you determine if the context is secure and provide cryptographic functions:
- `window.isSecureContext`: boolean indicating if the page is loaded in a secure context (HTTPS or localhost).
- `window.crypto` / `window.crypto.subtle`: Web Crypto API for secure random values, hashing, encryption, and decryption.

2️⃣ Why does it matter?
------------------------
✅ Ensures sensitive operations run only over secure protocols  
✅ Provides native, high‑performance cryptography without external libraries  
✅ Helps protect data integrity and confidentiality in web apps

3️⃣ Why and when to use?
-------------------------
✅ Check `isSecureContext` before storing or transmitting sensitive data  
✅ Generate cryptographically secure random values (e.g., tokens, nonces)  
✅ Perform hashing, signing, encrypt/decrypt operations in-browser  

4️⃣ Snippets:
--------------

*/

// Check if running in a secure context
if (window.isSecureContext) {
  console.log("Secure context ✔️");
} else {
  console.warn("Not a secure context! ⚠️");
}

// Generate a cryptographically secure random value (Uint8Array of 16 bytes)
const randomBytes = new Uint8Array(16);
window.crypto.getRandomValues(randomBytes);
console.log("Random bytes:", randomBytes);

// Simple SHA-256 hash of a string using SubtleCrypto
async function sha256(message) {
  const enc = new TextEncoder();
  const data = enc.encode(message);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
sha256("PureCravve123").then(hash => console.log("SHA-256 Hash:", hash));

// Generate an AES‑GCM key, then encrypt and decrypt data
async function aesGcmDemo() {
  // Key generation
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV

  // Encrypt
  const encoder = new TextEncoder();
  const data = encoder.encode("Sensitive Data");
  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  console.log("Encrypted buffer:", new Uint8Array(encrypted));

  // Decrypt
  const decryptedBuffer = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encrypted
  );
  const decoder = new TextDecoder();
  console.log("Decrypted text:", decoder.decode(decryptedBuffer));
}
aesGcmDemo();

/*
5️⃣ Real-World Examples:
-------------------------
✅ **Token Generation**: Create CSRF tokens or session nonces using `crypto.getRandomValues()`.  
✅ **Password Hashing**: Hash passwords client‑side (in combination with server salts) via `subtle.digest()`.  
✅ **End‑to‑End Encryption**: Encrypt user messages in chat apps before sending over the network.  

6️⃣ Interview Tips:
--------------------
❓ Q: What does `isSecureContext` tell you?  
✅ A: Whether the page is served over HTTPS (or localhost), which is required for many secure APIs.

❓ Q: How to get cryptographically secure random numbers in JS?  
✅ A: Use `window.crypto.getRandomValues()` rather than `Math.random()`.

❓ Q: Why use Web Crypto API over JS libraries?  
✅ A: Native API is faster, more secure, and protected against timing attacks.

🔥 Bonus: Always handle SubtleCrypto promises with try/catch to gracefully handle errors in crypto operations.
*/
