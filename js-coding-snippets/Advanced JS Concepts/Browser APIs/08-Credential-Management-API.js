/*
📌 What is the Credential Management API?

🔐 It allows websites to handle user credentials more securely and integrate with the browser's password manager.

🎯 Enables:
- Automatic sign-in
- Manual credential storing
- Securely requesting saved credentials

✨ Works with two types:
1. PasswordCredential – for username/password
2. FederatedCredential – for Google, Facebook logins (OAuth-based)

🌐 Only works on HTTPS or localhost
*/

/*
🔑 Request stored credentials
(used to auto-login user if they allowed it previously)
*/

async function getSavedCredentials() {
  try {
    const creds = await navigator.credentials.get({
      password: true,
      federated: {
        providers: [
          'https://accounts.google.com'
        ]
      },
      mediation: 'optional' // 'optional', 'required', or 'silent'
    });

    if (creds) {
      console.log("🔐 Credentials fetched:", creds);
      // Auto-login logic here
    } else {
      console.log("🙅 No credentials available");
    }
  } catch (err) {
    console.error("❌ Error fetching credentials:", err);
  }
}

/*
📥 Save new credentials (after login/signup)
*/

async function storeCredentials(username, password) {
  const creds = new PasswordCredential({
    id: username,
    password: password,
    name: 'PureCravve User'
  });

  try {
    await navigator.credentials.store(creds);
    console.log("✅ Credentials stored in browser");
  } catch (err) {
    console.error("❌ Failed to store credentials:", err);
  }
}

/*
📦 Real-World Use Cases:
- Auto-login to user dashboard
- Remember user's account after checkout
- Integrate with Google login (FederatedCredential)

🧠 Interview Tips:
- Credential API works with `<form>` elements and `PasswordCredential`
- Only works on HTTPS
- Can improve UX for returning users
- Supported in modern browsers, but not universally (fallback needed)
*/
