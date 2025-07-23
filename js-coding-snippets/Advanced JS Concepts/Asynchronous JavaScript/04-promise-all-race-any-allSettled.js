// 📦 Working with Multiple Promises Together
const delay = (time, value, shouldFail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (shouldFail ? reject(value) : resolve(value)), time)
  );

// 1️⃣ Promise.all
// → Resolves when all succeed, rejects if any fails
async function testPromiseAll() {
  try {
    const results = await Promise.all([
      delay(1000, "🍰 Cake"),
      delay(1500, "🍪 Cookie"),
      delay(500, "🍩 Donut"),
    ]);
    console.log("✅ All done:", results); // ["🍰 Cake", "🍪 Cookie", "🍩 Donut"]
  } catch (err) {
    console.error("❌ One failed in Promise.all:", err);
  }
}

// 2️⃣ Promise.race
// → Resolves/rejects with first settled promise (success or failure)
async function testPromiseRace() {
  const result = await Promise.race([
    delay(2000, "🐢 Slow"),
    delay(1000, "🐇 Fast"),
  ]);
  console.log("🏁 Race result:", result); // "🐇 Fast"
}

// 3️⃣ Promise.any (ES2021)
// → Resolves with first successful one; ignores rejections
// → Fails only if *all* reject
async function testPromiseAny() {
  try {
    const result = await Promise.any([
      delay(1000, "✅ Success"),
      delay(500, "❌", true), // fail
      delay(1500, "✅ Another success"),
    ]);
    console.log("🎯 First success:", result); // "✅ Success"
  } catch (err) {
    console.error("❌ All failed:", err);
  }
}

// 4️⃣ Promise.allSettled
// → Always resolves, gives status + value/error for all
async function testPromiseAllSettled() {
  const results = await Promise.allSettled([
    delay(1000, "✅ Cake"),
    delay(1200, "❌ Cookie", true),
    delay(500, "✅ Brownie"),
  ]);

  results.forEach((res, i) => {
    if (res.status === "fulfilled") {
      console.log(`Result ${i + 1}: ✅`, res.value);
    } else {
      console.log(`Result ${i + 1}: ❌`, res.reason);
    }
  });
}

/* 🔍 Summary:

Promise.all        → Wait all succeed → Fails if any fail
Promise.race       → First settled wins (resolve or reject)
Promise.any        → First success wins → Fails only if all fail
Promise.allSettled → Always succeeds → Gives status of all

*/

// Uncomment to run one-by-one:
testPromiseAll();
testPromiseRace();
testPromiseAny();
testPromiseAllSettled();

// 🧠 Interview Tip:
// Use `Promise.allSettled` for APIs where partial data is okay
// Use `Promise.any` when at least 1 success is enough
