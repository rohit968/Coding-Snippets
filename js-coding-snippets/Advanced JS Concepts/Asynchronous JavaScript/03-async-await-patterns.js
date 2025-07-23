// 📦 Async/Await Basics
// async function always returns a Promise

async function sayHello() {
  return "Hello Rohit!";
}

sayHello().then(console.log); // Output: Hello Rohit!

// ✅ Await pauses execution inside async function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadData() {
  console.log("⏳ Loading...");
  await delay(1000); // Wait for 1 second
  console.log("✅ Loaded!");
}

loadData();

// 🔄 Example: Rewriting Promise chain as Async/Await
function getUser(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: "Rohit" }), 1000)
  );
}

function getOrders(user) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(["Cake", "Brownie"]), 1000)
  );
}

async function showUserOrders() {
  try {
    const user = await getUser(101);
    console.log("User:", user);

    const orders = await getOrders(user);
    console.log("Orders:", orders);
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    console.log("✅ Done");
  }
}

showUserOrders();

// 📌 Parallel Execution with await
async function runInParallel() {
  const p1 = delay(1000).then(() => "🍫");
  const p2 = delay(1000).then(() => "🍪");

  const [choco, cookie] = await Promise.all([p1, p2]);
  console.log("Both ready:", choco, cookie);
}
runInParallel();

// ❗ Common Mistake: Forgetting `await`
async function wrongExample() {
  const user = getUser(101); // ❌ Missing await → returns Promise
  console.log("User?", user);
}
wrongExample();

// ✅ Good Practice: Use try...catch to handle async errors
async function riskyOperation() {
  try {
    const data = await Promise.reject("🔥 Fail");
    console.log("Will not run", data);
  } catch (err) {
    console.error("Caught:", err); // 🔥 Fail
  }
}

// 🧠 Async/Await = clean, readable async flow
// You can use it in loops, conditions, and with APIs like fetch()

async function fetchCake() {
  try {
    const res = await fetch("https://api.example.com/cakes");
    const data = await res.json();
    console.log("🎂 Cake data:", data);
  } catch (err) {
    console.error("🚨 Network error:", err);
  }
}

// 🎓 Interview Tip:
// Async/Await = syntactic sugar over Promises
// Helps eliminate nested `.then()` chains and makes logic cleaner

