// ======================================================
// 📌 Topic: Labeled Loops in JavaScript
// ======================================================

/**
 * ✅ What is a labeled loop?
 * A **labeled loop** lets you give a name (label) to a loop,
 * which allows you to use `break` or `continue` to control **outer loops** from inside **nested loops**.
 * 
 * ✅ Why is it useful?
 * - Cleanly break out of outer loops
 * - Avoids using flags or messy nested `if`s
 * - Improves readability in complex logic
 * 
 * ✅ Syntax:
 * labelName:
 * for (...) {
 *   for (...) {
 *     break labelName;
 *   }
 * }
 */

// ✅ Basic Example — break outer loop using label
outerLoop:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`Checking i=${i}, j=${j}`);
    if (i === 2 && j === 2) {
      console.log("Breaking outer loop");
      break outerLoop;
    }
  }
}
// Output: Loops stop when i=2, j=2

// ✅ Labeled `continue` — skip outer loop iteration
outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`Skipping rest of i=${i} when j=2`);
      continue outer;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// ====================================================== //


// ✅ Real-life Example — Search Product, Exit Both Loops
const categories = [
  ["Cake", "Cookie"],
  ["Brownie", "Muffin"],
  ["Donut", "Croissant"]
];
let found = false;
searchLoop:
for (let i = 0; i < categories.length; i++) {
  for (let j = 0; j < categories[i].length; j++) {
    const item = categories[i][j];
    console.log("Checking:", item);
    if (item === "Brownie") {
      console.log("Found Brownie! Stop searching.");
      found = true;
      break searchLoop;
    }
  }
}



// 🗣️ Layman Interview Explanation — Labeled Loops
// "Imagine you're browsing shelves (outer loop) and boxes on each shelf (inner loop). If you find the exact item in one box, you can exit the entire shelf section immediately — that's what a labeled break does."

// 💬 In interviews, say: “I use labeled loops when I want to break or continue outer loops from within nested loops. It avoids flags or complex conditions and keeps the logic clear — especially useful in searching or filtering across multiple levels.”