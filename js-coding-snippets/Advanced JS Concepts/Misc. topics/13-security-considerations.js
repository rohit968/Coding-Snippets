/* 
===============================================
🔐 Security Considerations in JavaScript Modules
===============================================

✅ JavaScript modules bring structure and reusability…
❗ But they can introduce **security risks** if misused or misconfigured.

---

1️⃣ Module Leakage (Global Scope Pollution)
---------------------------------------------
🛑 DON'T attach module exports to `window` or global scope — it exposes internal logic.

```js
// BAD
window.secretKey = '12345';  // Easily accessible via dev tools

✅ Instead:
// Use closures or modules to encapsulate sensitive values
const secret = (() => {
  const key = '12345';
  return {
    getKey: () => key
  };
})();

2️⃣ Remote/Dynamic Import Risks
❌ Don't blindly import external code at runtime — can lead to XSS or malicious injections.
// ⚠️ Dangerous
import(location.href).then(module => module.run());

✅ Always validate and restrict dynamic import paths:
const safeModules = {
  analytics: () => import('./analytics.js'),
  charts: () => import('./charts.js')
};

if (userChoice in safeModules) {
  safeModules[userChoice]();
}

3️⃣ CORS & Module Scripts
✅ <script type="module"> enforces CORS, improving security.
<!-- Enforces same-origin or correct CORS headers -->
<script type="module" src="/app.js"></script>

🧠 Benefit:
  No accidental global leaks
  No auto-execution of cross-origin scripts

4️⃣ Using Subresource Integrity (SRI)
✅ When using CDN-hosted modules, add integrity + crossorigin:
<script type="module" src="https://cdn.example.com/app.js"
  integrity="sha384-abc123==" crossorigin="anonymous"></script>

5️⃣ Trusted Types (Prevent DOM-based XSS)
✅ Enforce secure DOM updates when loading modules dynamically

// BAD
element.innerHTML = userInput; // 🚨 DOM XSS

// BETTER
element.textContent = userInput;

6️⃣ Node.js Module Security
✅ Avoid dynamic require() of user input
✅ Use import.meta.resolve only with verified paths
✅ Keep dependencies up to date (audit with npm audit)

// BAD (Server-side)
const lib = require(userSuppliedValue);  // Arbitrary code exec risk!

✅ Safer pattern:
const libs = { lodash: require('lodash'), dayjs: require('dayjs') };
const chosen = libs[userInput];

7️⃣ Interview Tips:
❓ Q: Why is <script type="module"> safer than traditional scripts?
✅ A: Module scripts are deferred, scoped, CORS-enforced, and don't pollute global scope.

❓ Q: How can dynamic imports be dangerous?
✅ A: If the path is user-controlled, it could load malicious code at runtime.

❓ Q: What’s Subresource Integrity (SRI)?
✅ A: A browser feature to verify that loaded module scripts haven’t been tampered with.

🎯 Summary:
✅ Never expose sensitive data in global scope
✅ Validate all dynamic imports
✅ Use type="module" with SRI for external scripts
✅ Use trusted types and CORS-aware loading
✅ Review dependencies for known vulnerabilities

*/
