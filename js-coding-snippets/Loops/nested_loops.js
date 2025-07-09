// ======================================================
// 📌 Topic: Nested Loops in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **nested loop** is a loop that runs inside another loop.
 * 
 * ✅ Why is it useful?
 * - Handle grids, tables, and matrices
 * - Compare each item with every other item
 * - Create combinations or patterns
 * 
 * ✅ Syntax:
 * for (let i = 0; i < outerLimit; i++) {
 *    for (let j = 0; j < innerLimit; j++) {
 *       // Inner loop code
 *    }
 * }
 */

// ✅ Basic Example — 2D Grid
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row: ${row}, Column: ${col}`);
  }
}
// Output:
// Row: 1, Column: 1
// Row: 1, Column: 2
// Row: 1, Column: 3
// Row: 2, Column: 1
// Row: 2, Column: 2
// Row: 2, Column: 3

// ✅ Nested Loop with `break`
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) break;
    console.log(`i=${i}, j=${j}`);
  }
}

// ✅ Nested Loop with `continue`
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) continue;
    console.log(`i=${i}, j=${j}`);
  }
}


// ====================================================== //

// ✅ Real-life Example: Multiplication Table
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j).toString().padStart(4, " ");
  }
  console.log(row);
}

// ✅ Real-life Example: Comparing Every Pair
const items = ["Cake", "Cookie", "Brownie"];
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items.length; j++) {
    if (i !== j) {
      console.log(`${items[i]} vs ${items[j]}`);
    }
  }
}



// 🗣️ Layman Interview Explanation — Nested Loops
// "Imagine rows of bakery boxes, and inside each box are rows of cookies. You need two layers of loops to go through every cookie in every box. That’s what nested loops do."

// 💬 In interviews, say: “I use nested loops when working with 2D arrays, generating combinations, or when I need to compare every item with every other item. They’re super handy but should be used carefully to avoid performance issues.”