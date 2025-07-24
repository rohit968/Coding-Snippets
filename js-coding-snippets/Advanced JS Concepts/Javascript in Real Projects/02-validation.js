// HTML file

/*
<!-- validation-form.html -->
<form id="signupForm">
  <label>
    Username:
    <input type="text" name="username" required />
  </label>
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Password:
    <input type="password" name="password" required minlength="6" />
  </label>
  <button type="submit">Register</button>
</form>

<div id="errorBox"></div>
*/

// 02-validation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const errorBox = document.getElementById("errorBox");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const errors = [];

    // Custom validations
    if (username.length < 3) {
      errors.push("⚠️ Username must be at least 3 characters.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      errors.push("⚠️ Please enter a valid email.");
    }

    if (password.length < 6) {
      errors.push("⚠️ Password must be at least 6 characters.");
    }

    // Display or clear errors
    if (errors.length > 0) {
      errorBox.innerHTML = errors.map(e => `<p>${e}</p>`).join("");
      errorBox.style.color = "red";
    } else {
      errorBox.innerHTML = "<p>✅ All inputs valid!</p>";
      errorBox.style.color = "green";

      // Proceed with backend logic or form reset
      setTimeout(() => {
        alert("User registered successfully!");
        form.reset();
        errorBox.innerHTML = "";
      }, 1000);
    }
  });
});


/*

✅ Concepts Covered
      Client-side form validation
      Manual error collection and display
      .trim() to sanitize input
      Simple pattern checks for email and password
      innerHTML for showing errors dynamically


💡 Real-World Use Case Used in:
      Signup / login / checkout flows
      Preventing empty or invalid data submissions
      Creating responsive UI without page reloads

*/
