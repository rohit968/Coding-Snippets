// ======================================================
// 📌 Topic: Comparing Strings — `.localeCompare()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.localeCompare(otherString)` method compares two strings based on the current locale (language settings).
 * 
 * It returns:
 * - `-1` if reference string comes before `otherString`
 * - `1` if reference string comes after `otherString`
 * - `0` if both strings are considered equal
 * 
 * ✅ Why is it useful?
 * - Alphabetical sorting of strings
 * - Locale-sensitive, respects accents and casing
 * - Essential for multi-language apps, sorting lists, or search features
 * 
 * ✅ How to use it?
 * Syntax: `string.localeCompare(otherString, [locales], [options])`
 * - `locales` (optional): Language codes like `"en"`, `"fr"`, etc.
 * - `options` (optional): Customize sensitivity, case, or numeric sorting
 * 
 * ✅ Real-life example:
 * - Sorting names alphabetically
 * - Building language-aware search features
 * - Comparing strings with accents or special characters
 */

// 🧠 Basic Example
const nameA = "Apple";
const nameB = "Banana";
console.log(nameA.localeCompare(nameB));
// Output: -1 (Apple comes before Banana)

// ✅ Reverse Comparison
console.log(nameB.localeCompare(nameA));
// Output: 1 (Banana comes after Apple)

// ✅ Case-Insensitive, Locale-Specific Comparison
const cityA = "mumbai";
const cityB = "Mumbai";
console.log(cityA.localeCompare(cityB, "en", { sensitivity: "base" }));
// Output: 0 (considered equal ignoring case)

// ✅ Sorting an Array Alphabetically
const fruits = ["Banana", "Apple", "Mango"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);
// Output: ["Apple", "Banana", "Mango"]

// ✅ Accented Characters Comparison
const accented = "café";
const plain = "cafe";
console.log(accented.localeCompare(plain, "en", { sensitivity: "base" }));
// Output: 0 (treated as equal ignoring accents)

// ✅ Numeric Comparison
const numA = "10";
const numB = "2";
console.log(numA.localeCompare(numB, "en", { numeric: true }));
// Output: 1 (10 is greater than 2 when compared numerically)

// ✅ Real-world Example: Sorting Usernames
const usernames = ["user1", "User2", "user10", "user3"];
usernames.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
console.log(usernames);
// Output: ["user1", "user10", "User2", "user3"] (sorted ignoring case)

// ✅ Emoji/Unicode Consideration
const emojiA = "😀";
const emojiB = "😃";
console.log(emojiA.localeCompare(emojiB));
// Output: -1 (😀 comes before 😃 in Unicode order)

// ✅ Use in Conditions
const strA = "Hello";
const strB = "hello";
if (strA.localeCompare(strB, "en", { sensitivity: "base" }) === 0) {
  console.log("Strings are equal ignoring case!");
} // Output: Strings are equal ignoring case!
