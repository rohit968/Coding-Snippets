/*
📌 What is IndexedDB?
A low-level NoSQL database for storing large, structured data (objects, arrays, blobs) in the browser.

💡 Why use it?
- Store complex data like chat messages, offline blog drafts, files
- Enables **offline-first** apps and PWAs
- Unlike localStorage, it's **asynchronous**, powerful, and scalable

📚 Key Concepts:
- `indexedDB.open()` opens or creates a database
- `onupgradeneeded` creates object stores (like tables)
- `transaction` is used to read/write
*/

// ✅ 1. Open/Create a database
const request = indexedDB.open("PureCravveDB", 1);

// ✅ 2. Handle setup (only called on new version)
request.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Create object store (like a table) with keyPath
  const store = db.createObjectStore("orders", { keyPath: "id" });

  // Optional: create indexes
  store.createIndex("customerName", "name", { unique: false });
};

// ✅ 3. On success
request.onsuccess = function (event) {
  const db = event.target.result;

  // ✅ Add data
  const tx = db.transaction("orders", "readwrite");
  const store = tx.objectStore("orders");

  store.add({ id: 1, name: "Rohit", item: "Red Velvet Cupcake", qty: 2 });

  tx.oncomplete = () => db.close();
};

// ❌ Handle errors
request.onerror = function () {
  console.error("Failed to open IndexedDB");
};

/*
📦 Real-world Example:
- Offline shopping carts
- Local drafts for blogs/comments
- Chat apps storing local messages

🧠 Interview Tips:
- IndexedDB is event-based and async
- Not supported in legacy browsers (IE)
- Use `idb` wrapper library for simpler code
- Can store Blobs, Files, Arrays — not just strings

🔄 Bonus:
For simplified usage, you can use the `idb` library:
https://github.com/jakearchibald/idb
*/

// Optional: Read data from store
/*
const tx = db.transaction("orders", "readonly");
const store = tx.objectStore("orders");
const request = store.get(1);

request.onsuccess = () => {
  console.log("Order:", request.result);
};
*/
