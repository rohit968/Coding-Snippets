// ======================================================
// 📌 Topic: Copying Array Elements Within Itself — `.copyWithin()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.copyWithin()` method copies part of an array to another location in the same array without changing its size.
 * Modifies the original array.
 * 
 * ✅ Why is it useful?
 * - Rearranges data efficiently
 * - Useful for simulations, board setups, data manipulation
 * - Avoids creating new arrays when modifying existing ones
 * 
 * ✅ How to use it?
 * Syntax: `array.copyWithin(target, start, end)`
 * - `target`: Index to copy data to
 * - `start`: Start index to copy from
 * - `end` (optional): End index (exclusive)
 * 
 * ✅ Real-life example:
 * - Shift items within arrays
 * - Duplicate sections of data
 * - Quick layout adjustments (games, placeholders)
 */

// 🧠 Basic Example — Copy Within Array
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers);
// Output: [4, 5, 3, 4, 5]

// ✅ Copy Partial Section
const arr = [10, 20, 30, 40, 50];
arr.copyWithin(1, 3, 5);
console.log(arr);
// Output: [10, 40, 50, 40, 50]

// ✅ Using Negative Indexes
const letters = ["x", "y", "z", "a", "b"];
letters.copyWithin(-3, -2);
console.log(letters);
// Output: ["x", "y", "z", "b", "b"]

// ✅ Copying to the End of the Array
const colors = ["Red", "Green", "Blue"];
colors.copyWithin(2, 0);
console.log(colors);
// Output: ["Red", "Green", "Red"]

// ✅ Copying to the Beginning of the Array
const fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.copyWithin(0, 2);
console.log(fruits);
// Output: ["Cherry", "Date", "Cherry", "Date"]

// ✅ Copying with Overlapping Regions
const nums = [1, 2, 3, 4, 5];
nums.copyWithin(1, 2, 4);
console.log(nums);
// Output: [1, 3, 4, 3, 4]

// ✅ Emoji/Unicode Example
const emojis = ["😀", "🚀", "❤️", "🔥", "🎉"];
emojis.copyWithin(2, 0, 2);
console.log(emojis);
// Output: ["😀", "🚀", "😀", "🚀", "🎉"]

// =================================================== //

// ✅ Real-world Example: Game Layout Reset
const board = ["A", "B", "C", "D", "E", "F"];
board.copyWithin(3, 0, 2);
console.log(board);
// Output: ["A", "B", "C", "A", "B", "F"]

// ✅ Real-world Example: Placeholder Data
const placeholderData = new Array(5).fill("Loading...");
placeholderData.copyWithin(2, 0, 2);
console.log(placeholderData);
// Output: ["Loading...", "Loading...", "Loading...", "Loading...", "Loading..."]

// ✅ Real-world Example: Shifting Items in a Queue
const queue = ["Task1", "Task2", "Task3", "Task4"];
queue.copyWithin(0, 2);
console.log(queue);
// Output: ["Task3", "Task4", "Task3", "Task4"]

// ✅ Real-world Example: Adjusting Data in a Table
const tableData = ["Row1", "Row2", "Row3", "Row4"];
tableData.copyWithin(1, 0, 2);
console.log(tableData);
// Output: ["Row1", "Row2", "Row3", "Row4"]
