/*
📌 What is the Fetch API?

🌐 It's a modern, promise-based API for making network requests (replacing older XMLHttpRequest).

📥 Streams (Readable/Writable) let you handle data piece-by-piece rather than loading everything at once — ideal for large files or real-time data processing.

🔧 Core features:
- Easy syntax with `fetch()`
- Supports async/await
- Streaming: read/write chunked data
- Used with blobs, files, media, etc.
*/


// ✅ Simple fetch with async/await
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("✅ JSON fetched:", data);
  } catch (err) {
    console.error("❌ Error fetching:", err);
  }
}

fetchData();


/*
✅ Using ReadableStream to stream response (e.g. large file or text)
*/

async function streamLargeText() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }

  console.log("📄 Streamed Text:", result.slice(0, 300)); // Preview
}

streamLargeText();

/*
✅ WritableStream (advanced): Writing streamed data somewhere
Note: Not available in all browsers yet — often used in service workers or for piping data
*/

// Example placeholder only (not fully usable without server piping)
const writable = new WritableStream({
  write(chunk) {
    console.log("Writing chunk:", chunk);
  },
  close() {
    console.log("✅ Stream closed");
  },
  abort(err) {
    console.error("❌ Stream aborted:", err);
  }
});

/*
🔍 Real-World Use Cases:
- Video streaming (dash/HLS)
- Chunked file uploads/downloads
- Infinite scrolling feeds
- Server-sent events / APIs sending long JSON arrays

🧠 Interview Tips:
- `fetch()` is Promise-based; supports `AbortController` for cancelling
- ReadableStream is often used in progressive loading or real-time display
- Understand difference from Axios or jQuery AJAX
- Combine with async iterators: `for await (const chunk of stream)`

⚠️ Gotchas:
- Fetch doesn't reject on HTTP error codes (must check res.ok!)
- Streams may need polyfills or feature checks
*/
