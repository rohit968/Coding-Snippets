// ======================================================
// 📌 Topic: Asynchronous Loops — `for await...of` in JavaScript
// ======================================================

/**
 * ✅ What is `for await...of`?
 * A special loop that **waits for each promise to resolve one-by-one**.
 * 
 * ✅ Why is it useful?
 * - Safely loop over async operations
 * - Especially helpful when using `fetch`, DB calls, file reads
 * - Avoids the mess of `.then()` or `Promise.all()` misuse
 * 
 * ✅ Requirements:
 * - Must be inside an `async` function
 * - The iterable must return **promises**
 */

// ✅ Simulated async fetch
const fakeFetch = (url) => new Promise((resolve) => {
  setTimeout(() => resolve(`Response from ${url}`), 1000);
});
const urls = ["url1", "url2", "url3"];
async function fetchSequentially() {
  for await (const url of urls.map(fakeFetch)) {
    console.log("✅ Got:", url);
  }
}
fetchSequentially();

// ⚠️ Common Mistake — using regular `forEach` with async
users.forEach(async (user) => {
  await sendEmail(user); // ❌ won't wait properly
});
// Instead: use `for...of` inside async

// ✅ Correct: use `for...of` + `await`
async function notifyUsersProperly() {
  for (const user of users) {
    await sendEmail(user); // ✅ waits for each one
  }
}
notifyUsersProperly();

// ====================================================== //


// ✅ Real-life Example: Email users one by one
const users = ["alice@example.com", "bob@example.com", "carol@example.com"];
const sendEmail = (email) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log(`📧 Sent email to ${email}`);
      res();
    }, 500)
  );
async function notifyUsers() {
  for await (const user of users.map(sendEmail)) {
    // emails sent one by one
  }
}
notifyUsers();



// 🗣️ Layman Interview Explanation — for await...of
// "Imagine you’re baking cakes, one at a time. Each cake needs 30 minutes. You don’t want to start the next until the first one is done — for await...of ensures you wait before moving to the next."

// 💬 In interviews, say: “When looping over async tasks — like API calls — I avoid forEach, because it won’t wait. Instead, I use for await...of or a for...of loop with await inside an async function to run them sequentially and safely.”