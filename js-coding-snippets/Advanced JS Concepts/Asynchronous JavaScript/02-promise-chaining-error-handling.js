// 📦 Promises Recap:
// A Promise represents a value that may be available now, later, or never.
// Syntax:
const myPromise = new Promise((resolve, reject) => {
  // async operation here...
  const success = true;
  if (success) resolve("Success!");
  else reject("Something went wrong!");
});

// ✅ .then(), .catch(), .finally()
// These are Promise methods to handle success/failure.

myPromise
  .then((result) => {
    console.log("Resolved:", result);  // Resolved: Success!
  })
  .catch((error) => {
    console.log("Rejected:", error);
  })
  .finally(() => {
    console.log("Always runs");
  });

// 🔁 Promise Chaining:
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Rohit" }), 1000);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Cake", "Brownie"]), 1000);
  });
}

getUser(101)
  .then((user) => {
    console.log("User:", user);
    return getOrders(user);
  })
  .then((orders) => {
    console.log("Orders:", orders);
  })
  .catch((err) => {
    console.error("Error in chain:", err);
  });

// 🧠 Each `.then()` returns a *new* Promise → enabling chaining.

// 🧪 Error Propagation in Chaining:
Promise.resolve("Start")
  .then((res) => {
    console.log(res); // Start
    return "Next";
  })
  .then(() => {
    throw new Error("💥 Something broke");
  })
  .then(() => {
    console.log("Will NOT run");
  })
  .catch((err) => {
    console.error("Caught:", err.message); // 💥 Something broke
  });

// ✅ Catching early vs late:
// You can have .catch() at the end OR catch individual stages.

doSomething()
  .then((res) => {
    return doNextThing(res);
  })
  .catch((err) => {
    console.log("Handled mid-error:", err);
    return "Recovered";
  })
  .then((res) => {
    console.log("Continued with:", res);
  });

// ⚠️ If you throw inside `.then()` — it skips remaining `.then()` and goes to `.catch()`.

// 🧾 What not to do:
myPromise
  .then((res) => {
    console.log(res);
    throw new Error("Oops"); // This will go to .catch
  })
  .catch((err) => {
    console.error("Caught:", err.message);
  });

// ✅ Always return inside `.then()` for async chains to wait properly!

// 🎓 Interview Tip: Promise chaining helps avoid "callback hell" and makes async flow readable.

