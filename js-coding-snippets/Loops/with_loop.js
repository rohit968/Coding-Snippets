// ======================================================
// 📌 Topic: Immutable Array Update — `.with()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.with(index, newValue)` method returns a **new array**  
 * with the element at the given index replaced by `newValue`.  
 * It does **not** mutate the original array.
 * 
 * ✅ Why is it useful?
 * - Immutable updates (no side effects)
 * - Safe for state management (e.g., in React)
 * - Cleaner alternative to `slice + concat` or manual cloning
 * 
 * ✅ Syntax:
 * const newArray = array.with(index, newValue);
 */

// ✅ Basic Example — Replace Value at Index
const colors = ["Red", "Green", "Blue"];
const updatedColors = colors.with(1, "Yellow");
console.log(updatedColors); // ["Red", "Yellow", "Blue"]
console.log(colors);        // ["Red", "Green", "Blue"] (original unchanged)

// ✅ Use Case: Immutable Update in React State
const state = ["draft", "review", "approved"];

const newState = state.with(0, "in progress");
console.log(newState); // ["in progress", "review", "approved"]

// ✅ Edge Case: Invalid Index
try {
  const result = colors.with(10, "Purple"); // Index out of bounds
} catch (error) {
  console.log("Error:", error.message); // RangeError
}

// ====================================================== //

// ✅ Real-life Example: Update Item in Cart
const cart = [
  { item: "Cake", quantity: 1 },
  { item: "Cookies", quantity: 2 }
];
const updatedCart = cart.with(1, { item: "Cookies", quantity: 5 });
console.log(updatedCart);
/*
[
  { item: "Cake", quantity: 1 },
  { item: "Cookies", quantity: 5 }
]
*/

// ✅ Real-life Example: Change Day in Schedule
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const corrected = days.with(2, "Holiday");
console.log(corrected); // ["Mon", "Tue", "Holiday", "Thu", "Fri"]


//🗣️ Layman Interview Explanation — .with ()
//"Imagine a box of cookies. You want to replace the 2nd cookie without disturbing the rest. .with() lets you make a new box with the 2nd cookie replaced — the original stays untouched."

//💬 In interviews, say: “I use.with() when I want to immutably replace an item at a specific index.It's clean, readable, and ideal for frameworks like React where immutability is crucial.”