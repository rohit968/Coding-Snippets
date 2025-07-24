// html file

/* 
<form id="contactForm">
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Send</button>
  <button type="reset">Clear</button>
</form>

<div id="status"></div>
*/

// 01-forms.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("status");

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form action (page reload)

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.trim();
    });

    console.log("Form Data:", data);

    // Simulate sending to backend
    setTimeout(() => {
      statusDiv.textContent = `✅ Message sent successfully by ${data.name}`;
      statusDiv.style.color = "green";
      form.reset(); // Reset form after submission
    }, 1000);
  });

  // Reset handler
  form.addEventListener("reset", () => {
    statusDiv.textContent = "🗑️ Form cleared.";
    statusDiv.style.color = "gray";
  });
});

/*
🧪 Real-World Use Case Used in:
      Contact forms
      Feedback or review submissions
      Signup/login interfaces
      Admin dashboards

*/