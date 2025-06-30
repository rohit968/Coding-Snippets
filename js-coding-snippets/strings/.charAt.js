// ======================================================
// 📌 Topic: Getting a Character at a Specific Position — `.charAt()`
// ======================================================

/**
 * ✅ What is it?
 * The `.charAt(index)` method returns the character at the specified index of a string.
 * 
 * ✅ Why is it useful?
 * - Helps in processing individual characters in strings
 * - Common in algorithms, validations, and formatting tasks
 * 
 * ✅ How to use it?
 * Syntax: `string.charAt(index)`
 * Index starts at 0 (first character)
 * If index is out of bounds, returns an empty string `""`
 * 
 * ✅ Real-life example:
 * - Checking the first character of a username
 * - Formatting input based on first/last letter
 * - Character-by-character processing (e.g., initials)
 */

// 🧠 Basic Example
const word = "Programming in JavaScript";

console.log(word.charAt(0));  // Output: "P"
console.log(word.charAt(4));  // Output: "g"
console.log(word.charAt(30)); // Output: "" (out of bounds)

// ✅ Common shortcut (but can cause issues with empty strings)
console.log(word[0]); // Output: "P"


const emoji = "😀";
console.log(emoji.charAt(0)); // "�" — incomplete character
console.log([...emoji][0]);   // "😀" — correct

// ✅ Using `.charAt()` with complex strings
const complexString = "Rohit😀🚀";
console.log(complexString.charAt(0)); // "R"
console.log(complexString.charAt(5)); // "�" — incomplete character 
console.log([...complexString][5]); // "😀" — correct

// ✅ Using `.charAt()` with empty strings
const emptyString = "";
console.log(emptyString.charAt(0)); // "" (returns empty string)
console.log(emptyString[0]); // undefined (no character at index 0) 

// ✅ Using `.charAt()` with non-string values
const num = 12345;
console.log(num.charAt(0)); // "1" (implicitly converts number to string)
console.log(String(num).charAt(0)); // "1" (explicit conversion to string

// ✅ Using `.charAt()` with non-string values
const bool = true;
console.log(bool.charAt(0)); // "t" (implicitly converts boolean to string)
console.log(String(bool).charAt(0)); // "t" (explicit conversion to string)

// ✅ Using `.charAt()` with template literals
const name = "Alice";
console.log(`Hello, ${name.charAt(0)}!`); // Output: "Hello, A!"

// ✅ Using `.charAt()` in a loop
const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // Outputs each character: H, e, l, l, o
}

