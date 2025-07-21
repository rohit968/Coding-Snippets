// ======================================================
// 📌 Topic: Array Destructuring (ES6+)
// es6-modern/02-array-destructuring.js
// ======================================================

/**
 * ✅ What is it?
 * Array destructuring allows unpacking values from arrays
 * into distinct variables using a concise syntax.
 *
 * ✅ Why is it useful?
 * - Cleaner assignment from arrays
 * - Easy to swap variables, skip items, set defaults
 * - Great for function returns and tuple-like structures
 *
 * ✅ Syntax:
 * const [a, b] = array;
 */

// 🔹 Basic Destructuring
const colors = ['Red', 'Green', 'Blue'];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // Red Green

// 🔹 Skipping Items
const [, , thirdColor] = colors;
console.log(thirdColor); // Blue

// 🔹 Default Values
const [a = 1, b = 2, c = 3] = [10];
console.log(a, b, c); // 10 2 3

// 🔹 Swapping Variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// 🔹 Nested Destructuring
const nested = [1, [2, 3]];
const [one, [two, three]] = nested;
console.log(one, two, three); // 1 2 3

// 🔹 Function Returns
function getCoordinates() {
  return [100, 200];
}
const [xPos, yPos] = getCoordinates();
console.log(`X: ${xPos}, Y: ${yPos}`);

// 🔹 Real-life Example: Swap Theme and Mode
let theme = 'light';
let mode = 'day';
[theme, mode] = [mode, theme];
console.log(theme, mode); // day light

// 🔹 Real-life Example: Parse CSV Row
const row = 'Rohit,26,India'.split(',');
const [name, age, country] = row;
console.log(`${name} is ${age} and lives in ${country}`);

// 🗣️ Interview Tip:
// "Array destructuring makes your assignments concise and clear—especially when
// functions return multiple values or you need to skip or swap elements."