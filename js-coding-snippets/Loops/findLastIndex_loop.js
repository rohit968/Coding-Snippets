// ======================================================
// 📌 Topic: Find Last Index — `.findLastIndex()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.findLastIndex()` method returns the **index** of the last element  
 * in the array that satisfies the condition.  
 * Returns `-1` if no match is found.
 * 
 * ✅ Why is it useful?
 * - Lets you update or delete the last match using its index
 * - Cleaner than reversing or looping backwards
 * - Part of ES2023 (modern JS)
 * 
 * ✅ Syntax:
 * const index = array.findLastIndex((element, index, array) => {
 *   return condition;
 * });
 */

// ✅ Basic Example — Last Even Number Index
const numbers = [1, 3, 4, 6, 5, 2];
const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(lastEvenIndex); // 5 (2 is at index 5)

// ✅ Use Case: Remove Last Duplicate Item
const names = ["Rohit", "Alice", "Rohit", "Bob"];
const lastRohitIndex = names.findLastIndex(n => n === "Rohit");
if (lastRohitIndex !== -1) {
  names.splice(lastRohitIndex, 1);
}
console.log(names); // ["Rohit", "Alice", "Bob"]

// ✅ Edge Case: No Match Found
const result = numbers.findLastIndex(num => num > 100);
console.log(result); // -1

// ====================================================== //

// ✅ Real-life Example: Last Out-of-Stock Product Index
const products = [
  { name: "Cake", stock: 5 },
  { name: "Cookie", stock: 0 },
  { name: "Muffin", stock: 0 }
];
const lastOutIndex = products.findLastIndex(p => p.stock === 0);
console.log(lastOutIndex); // 2

// ✅ Real-life Example: Update Last Empty Field
const formFields = [
  { name: "email", value: "rohit@purecravve.com" },
  { name: "phone", value: "" },
  { name: "message", value: "" }
];
const lastEmptyIndex = formFields.findLastIndex(f => f.value === "");
if (lastEmptyIndex !== -1) {
  formFields[lastEmptyIndex].value = "Filled by default";
}
console.log(formFields);



// 🗣️ Layman Interview Explanation — .findLastIndex()
// "It’s like checking the last burnt cookie on a tray and marking its position — not the cookie itself, but where it is. .findLastIndex() gives you that position."

// 💬 In interviews, say: “I use .findLastIndex() when I need the position of the most recent match — like removing the last duplicate, filling the last empty form field, or tracking the last stock issue.”