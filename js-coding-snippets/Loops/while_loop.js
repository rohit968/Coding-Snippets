// ======================================================
// 📌 Topic: Repeating with Conditions — `while` Loop
// ======================================================

/**
 * ✅ What is it?
 * A `while` loop runs **as long as a condition is true**.  
 * It checks the condition **before** every iteration.
 *
 * ✅ Why is it useful?
 * - You don't always know how many times to loop
 * - Great for waiting, retrying, or reading until a condition is met
 * - More flexible than `for`, but risk of infinite loop if not careful
 * 
 * ✅ Syntax:
 * while (condition) {
 *     // code runs repeatedly while condition is true
 * }
 */

// ✅ Basic Example — Count up
let i = 0;
while (i < 5) {
  console.log(`Count: ${i}`);
  i++;
}

// ✅ Infinite Loop Danger ⚠️
let loop = 0;
while (true) {
  console.log("Running forever...");
  break; // Always use an exit condition!
}

// ====================================================== //

// ✅ Real-life Example: Check Stock Until Found
const stock = [0, 0, 2, 4];
let stockIndex = 0;
while (stock[stockIndex] === 0) {
  console.log(`Product ${stockIndex} is out of stock`);
  stockIndex++;
}
console.log(`✅ Product ${stockIndex} is in stock!`);

// ✅ Real-life Example: Retry Until Success
let isConnected = false;
let attempts = 0;
while (!isConnected && attempts < 3) {
  attempts++;
  console.log(`🔌 Attempting connection... Try #${attempts}`);
  if (attempts === 3) isConnected = true;
}

// ✅ Real-life Example: Read User Input Until Valid (simplified)
const inputs = ["", "", "Cake"];
let index = 0;
let userInput = "";
while (!userInput) {
  userInput = inputs[index];
  index++;
}
console.log(`✅ Got input: ${userInput}`);



// 🗣️ Layman Interview Explanation — while Loop
// "Think of a while loop like checking your bakery door until the delivery arrives. You keep checking again and again — until the condition (delivery arrives) becomes true."

