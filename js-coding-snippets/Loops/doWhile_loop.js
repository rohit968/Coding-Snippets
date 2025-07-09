// ======================================================
// 📌 Topic: Run At Least Once — `do...while` Loop
// ======================================================

/**
 * ✅ What is it?
 * A `do...while` loop **executes the code block once**,  
 * **then checks the condition** — and repeats as long as it's true.
 * 
 * ✅ Why is it useful?
 * - Guarantees the code runs **at least once**  
 * - Good for prompting, retrying, or reading input  
 * - Safer for loops where condition is evaluated **after** the first run
 * 
 * ✅ Syntax:
 * do {
 *    // code runs once initially
 * } while (condition);
 */

// ✅ Basic Example
let count = 0;
do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 3);
// Output: 0, 1, 2

// ✅ One-Time Action Example
let alreadyRun = true;
do {
  console.log("🎯 This runs at least once!");
} while (!alreadyRun);

// ====================================================== //

// ✅ Real-life Example: Simulate User Prompt Until Valid Input
const simulatedInputs = ["", "", "Rohit"];
let name = "";
let attempt = 0;
do {
  name = simulatedInputs[attempt];
  attempt++;
  console.log(`Input attempt: "${name}"`);
} while (!name);

console.log(`✅ Final Input: ${name}`);

// ✅ Real-life Example: Ask for Password Until Correct
const passwords = ["wrong", "nope", "admin123"];
let password = "";
let index = 0;

do {
  password = passwords[index];
  console.log(`🔒 Trying password: ${password}`);
  index++;
} while (password !== "admin123");

console.log("✅ Access granted");


// 🗣️ Layman Interview Explanation — do...while
// "Think of do...while like trying cake samples at a food stall. Even if you’re unsure, you’ll still be given one piece to try first, then asked if you want more. It guarantees one round."

