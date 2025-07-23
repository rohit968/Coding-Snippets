/*
📌 What are File, FileList, and Blob?

🔹 File: Represents a single file from the user's file system.
🔹 FileList: A list of File objects from `<input type="file">` or drag-drop.
🔹 Blob: Represents raw binary data (can be a file or just a chunk of data).

🧠 Used in uploads, previews, local processing, downloads.
*/

// ✅ Accessing FileList & File objects
const input = document.createElement("input");
input.type = "file";
input.multiple = true;

input.addEventListener("change", () => {
  const files = input.files; // FileList
  [...files].forEach(file => {
    console.log("📁 File Name:", file.name);
    console.log("📏 Size:", file.size, "bytes");
    console.log("📄 Type:", file.type);
  });
});

document.body.appendChild(input);

/*
📌 What is FileReader?
🔹 Lets you read file contents: as text, URL (for preview), binary.

🎯 Common Methods:
- readAsText(file)
- readAsDataURL(file) → base64 for images
- readAsArrayBuffer(file) → binary
*/

function previewFile(file) {
  const reader = new FileReader();

  reader.onload = () => {
    console.log("📖 File content:", reader.result);
    // If image:
    // const img = new Image(); img.src = reader.result; document.body.appendChild(img);
  };

  reader.readAsText(file);
}

// Use with file input above

/*
📌 What is DragEvent & DataTransfer?
🔹 DragEvent → represents the drag/drop interaction.
🔹 DataTransfer → carries the files or data being dragged.

Used in: custom drop zones, file uploads, image builders, etc.
*/

const dropZone = document.createElement("div");
dropZone.textContent = "📥 Drop files here";
dropZone.style.border = "2px dashed #aaa";
dropZone.style.padding = "30px";
dropZone.style.marginTop = "20px";
document.body.appendChild(dropZone);

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // Allow drop
  dropZone.style.borderColor = "green";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.borderColor = "#aaa";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#aaa";
  const files = e.dataTransfer.files;

  [...files].forEach(file => {
    console.log("📦 Dropped:", file.name);
    previewFile(file);
  });
});

/*
📦 Real-World Examples:
- Resume/image uploaders
- Preview profile pictures before upload
- Client-side CSV preview before processing

🧠 Interview Tips:
- FileReader works async → use `onload` not return values
- Use `URL.createObjectURL()` for quick image previews
- DragEvent requires `e.preventDefault()` on `dragover`
- You can drag files, text, or even custom data (via `dataTransfer.setData`)
*/

// ✅ Create a Blob manually (not from input)
const blob = new Blob(["Hello Rohit!"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
console.log("🔗 Blob preview URL:", url);

// You can use this URL in <a href=... download> or in <img src=...>
