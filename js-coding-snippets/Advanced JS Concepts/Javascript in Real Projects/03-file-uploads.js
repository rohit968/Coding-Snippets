// HTML File

/*
<!-- file-upload.html -->
<form id="uploadForm">
  <label>
    Upload Profile Picture:
    <input type="file" name="profilePic" accept="image/*" />
  </label>
  <button type="submit">Upload</button>
</form>

<div id="preview"></div>
<div id="statusMsg"></div>
*/

// 03-file-uploads.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uploadForm");
  const fileInput = form.profilePic;
  const preview = document.getElementById("preview");
  const statusMsg = document.getElementById("statusMsg");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    if (file) {
      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        preview.innerHTML = `<img src="${reader.result}" width="150" height="150" alt="Preview"/>`;
      };
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = "";
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      statusMsg.textContent = "⚠️ Please choose a file to upload.";
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      statusMsg.textContent = "Uploading...";
      // Simulate upload (in real case, replace URL with your API endpoint)
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      statusMsg.textContent = "✅ Upload successful!";
    } catch (err) {
      console.error(err);
      statusMsg.textContent = "❌ Upload failed. Try again.";
    }
  });
});

/*

✅ Concepts Covered
      File input handling with input[type="file"]
      Previewing images using FileReader
      Uploading using FormData and fetch
      Simulated POST request to a public test API (httpbin.org)

💡 Real-World Use Case Used in:
      Profile picture uploads
      Product image uploads in e-commerce
      Portfolio and resume upload forms

*/