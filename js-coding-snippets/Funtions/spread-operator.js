// ======================================================
// 📌 Topic: Spread Operator (`...`) in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The **Spread Operator (`...`)** expands arrays, objects, or iterables into individual elements.
 * 
 * ✅ Why is it useful?
 * - Copies arrays or objects (shallow copy)
 * - Combines or merges arrays
 * - Passes array items as function arguments
 * - Simplifies working with collections
 * 
 * ✅ How to use it?
 * - Arrays: `[...array]`
 * - Objects: `{...object}`
 * - Function calls: `fn(...args)`
 * 
 * ✅ Real-life examples:
 * - Cloning arrays/objects safely
 * - Merging configurations
 * - Passing multiple arguments dynamically
 */

// 🧠 Expanding Arrays
const fruits = ["Apple", "Banana"];
const moreFruits = ["Mango", "Orange"];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);
// Output: ["Apple", "Banana", "Mango", "Orange"]

// ✅ Copying Arrays
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]

// ✅ Using Spread with Functions
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
console.log(sum(...numbers));
// Output: 60

// ✅ Spread Operator with Objects
const user = { name: "Rohit", role: "Baker" };
const updatedUser = { ...user, location: "India" };
console.log(updatedUser);
// Output: { name: "Rohit", role: "Baker", location: "India" }


// ✅  Adding Elements to an Array (Non-Mutating)
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]
console.log(originalArray); // Output: [1, 2, 3] (original is unchanged)

// ✅  Concatenating Arrays (Alternative to concat())
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: ["a", "b", "c", "d"]

// ✅  Object Destructuring with Rest Properties (Spread for the rest)
const { name, ...restOfUser } = updatedUser; // using updatedUser from earlier example
console.log(name);        // Output: Rohit
console.log(restOfUser);  // Output: { role: "Baker", location: "India" }

// ✅ Using Spread with Math Functions
const numericValues = [10, 5, 20, 8, 15];
console.log(Math.max(...numericValues)); // Output: 20
console.log(Math.min(...numericValues)); // Output: 5

// ✅ Passing Arguments to a Constructor
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const coordinates = [100, 200];
const p = new Point(...coordinates);
console.log(p); // Output: Point { x: 100, y: 200 }

// ✅ Emoji/Unicode Consideration with Spread
const emojis = ["🚀", "❤️"];
const moreEmojis = ["😀", "🎂"];
const allEmojis = [...emojis, ...moreEmojis];
console.log(allEmojis);
// Output: ["🚀", "❤️", "😀", "🎂"]

// ================================================== //


// ✅ Real-world Example: Merging Configurations
const defaultConfig = { theme: "light", showNav: true };
const userConfig = { theme: "dark" };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);
// Output: { theme: "dark", showNav: true }

// ✅ Real-world Examples: Spread Strings into Arrays of Characters
const word = "PureCravve";
console.log([...word]);
// Output: ["P", "u", "r", "e", "C", "r", "a", "v", "v", "e"]
