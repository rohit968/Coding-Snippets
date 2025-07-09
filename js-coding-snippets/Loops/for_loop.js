// ======================================================
// 📌 Topic: The Classic Loop — `for` Loop in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `for` loop is a control structure used to repeat a block of code  
 * a specific number of times — with complete control over the loop.
 * 
 * ✅ Why is it useful?
 * - Fine-grained control (start, stop, step)
 * - Works with arrays, strings, numbers
 * - Great for counting, index-based access, and iteration
 * 
 * ✅ Syntax:
 * for (initialization; condition; increment) {
 *     // code to run
 * }
 */

// ✅ Basic Example — Counting
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// ✅ Looping through an Array (by Index)
const cakes = ["Red Velvet", "Chocolate", "Vanilla"];

for (let i = 0; i < cakes.length; i++) {
  console.log(`Cake ${i + 1}: ${cakes[i]}`);
}

// ✅ Looping in Reverse
for (let i = cakes.length - 1; i >= 0; i--) {
  console.log(`Reverse Cake: ${cakes[i]}`);
}

// ✅ Breaking a Loop Early
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}

// ✅ Skipping an Iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // skips 2
}

// ✅ Nested Loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// ✅ Nested Loops with Arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}]: ${matrix[i][j]}`);
  }
}

// ====================================================== //

// ✅ Real-World Example: Validating Product Quantities
const stock = [2, 5, 0, 3];
for (let i = 0; i < stock.length; i++) {
  if (stock[i] === 0) {
    console.log(`⚠️ Product ${i} is out of stock!`);
  }
}

// ✅ Real-World Example: Print Initials from Names
const names = ["Rohit Tiwari", "Alice Smith", "Bob"];
for (let i = 0; i < names.length; i++) {
  const initials = names[i].split(" ").map(word => word[0]).join("");
  console.log(`Initials: ${initials}`);
}



// 🗣️ Layman Interview Explanation — for Loop
// "Think of a for loop like counting bakery items on shelves. You start from the first one, move step-by-step, and stop when you’re done. It’s like having full control over how many shelves you want to check and whether to skip or stop midway."