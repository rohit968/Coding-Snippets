// 🔍 A real-world scenario — fetching user, then their posts.

// ❌ 1. Callback Hell (Pyramid of Doom)
// Simulate API calls
function getUser(id, callback) {
  setTimeout(() => {
    console.log("👤 Fetched user");
    callback(null, { id, name: "Rohit" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("📝 Fetched posts");
    callback(null, ["Post 1", "Post 2"]);
  }, 1000);
}

// Using nested callbacks
getUser(1, (err, user) => {
  if (err) return console.error(err);
  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log("📦 Data:", { user, posts });
  });
});

/*
😵‍💫 Hard to read, debug, and maintain as nesting increases.
*/

// ✅ 2. Promises – Flattened Flow
function getUserP(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("👤 [P] User fetched");
      resolve({ id, name: "Rohit" });
    }, 1000);
  });
}

function getPostsP(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📝 [P] Posts fetched");
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

// Promise chaining
getUserP(1)
  .then((user) => {
    return getPostsP(user.id).then((posts) => ({ user, posts }));
  })
  .then((data) => {
    console.log("📦 [P] Data:", data);
  })
  .catch((err) => console.error("❌ [P] Error:", err));

/*
✅ Flat and manageable but still chaining.
*/

// ✅✅ 3. Async/Await – Cleanest Style
async function fetchData() {
  try {
    const user = await getUserP(1);
    const posts = await getPostsP(user.id);
    console.log("📦 [A] Data:", { user, posts });
  } catch (err) {
    console.error("❌ [A] Error:", err);
  }
}

fetchData();

/*
✅ Most readable
✅ Looks synchronous
✅ Easy error handling with try/catch

🔄 Summary

| Style       | Pros                                          | Cons                            |
| ----------- | --------------------------------------------- | ------------------------------- |
| Callbacks   | Basic, widely supported                       | Hellish nesting, hard to manage |
| Promises    | Flat, chainable                               | Can still get verbose chaining  |
| Async/Await | Clean, readable, error handling via try/catch | Requires modern JS support      |

*/
