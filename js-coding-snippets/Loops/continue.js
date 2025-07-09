// ======================================================
// 📌 Topic: Skipping Iterations — Using `continue` in JavaScript Loops
// ======================================================

/**
 * ✅ What is `continue`?
 * The `continue` statement **skips the current iteration** of a loop  
 * and moves on to the **next one**.
 * 
 * ✅ Why is it useful?
 * - Cleanly skip unwanted values
 * - Avoid unnecessary nesting (no `if` wrapping)
 * - Makes your loops easier to read
 * 
 * ✅ Where can we use it?
 * - Inside `for`, `while`, `do...while`, `for...of`, and `for...in` loops
 */

// ✅ Basic Example — Skip Even Numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}
// Output: 1, 3, 5

// ✅ Use Case: Filter Out Unverified Users
const users = [
  { name: "Alice", verified: true },
  { name: "Bob", verified: false },
  { name: "Charlie", verified: true }
];
for (const user of users) {
  if (!user.verified) continue;
  console.log("Send email to:", user.name);
}
// Output: Alice, Charlie

// ✅ `while` Loop Example
let count = 0;
while (count < 5) {
  count++;
  if (count === 3) continue;
  console.log("Count:", count);
}
// Output: 1, 2, 4, 5 (skips 3)

// ====================================================== //

// ✅ Real-life Example: Ignore Empty Form Fields
const formFields = ["Rohit", "", "rohit@purecravve.com", ""];
for (const field of formFields) {
  if (field === "") continue;
  console.log("Valid input:", field);
}
// Output: "Rohit", "rohit@purecravve.com"



// 🗣️ Layman Interview Explanation — continue
// "Imagine you're tasting cookies on a tray. If one has raisins and you hate raisins, you skip that cookie and move on — that’s what continue does in a loop."

// 💬 In interviews, say: “I use continue when I want to skip certain cases inside a loop without exiting the whole loop — like ignoring empty values, unverified users, or invalid inputs.”