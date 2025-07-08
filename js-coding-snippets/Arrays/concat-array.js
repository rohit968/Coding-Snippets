// ======================================================
// 📌 Topic: Merging Arrays — `.concat()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.concat()` method merges two or more arrays and returns a **new array**, without modifying the originals.
 * 
 * ✅ Why is it useful?
 * - Combining arrays dynamically
 * - Keeping existing arrays unchanged (non-destructive)
 * - Useful in data manipulation, merging lists, etc.
 * 
 * ✅ How to use it?
 * Syntax: `array1.concat(array2, array3, ...)`
 * Returns a new merged array.
 * 
 * ✅ Real-life example:
 * - Combining product lists
 * - Merging user data from different sources
 * - Generating large arrays from smaller ones
 */

// 🧠 Basic Example
const fruits = ["Apple", "Banana"];
const moreFruits = ["Mango", "Orange"];

const combined = fruits.concat(moreFruits);
console.log(combined);
// Output: ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits);
// Original array remains unchanged: ["Apple", "Banana"]

// ✅ Concatenating Multiple Arrays
const even = [2, 4, 6];
const odd = [1, 3, 5];
const primes = [2, 3, 5, 7];
const numbers = even.concat(odd, primes);
console.log(numbers);
// Output: [2, 4, 6, 1, 3, 5, 2, 3, 5, 7]

// ✅ Concatenating with Non-Array Values
const mixed = ["Start"].concat("Middle", ["End"]);
console.log(mixed);
// Output: ["Start", "Middle", "End"]

// ✅ Concatenating Nested Arrays
const nested1 = [[1, 2], [3, 4]];
const nested2 = [[5, 6], [7, 8]];
const nestedCombined = nested1.concat(nested2);
console.log(nestedCombined);
// Output: [[1, 2], [3, 4], [5, 6], [7, 8]]

// ✅ Concatenating Objects in Arrays
const users1 = [{ name: "Alice" }, { name: "Bob" }];
const users2 = [{ name: "Charlie" }, { name: "David" }];
const allUsers = users1.concat(users2);
console.log(allUsers);
// Output: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }, { name: "David" }]

// ✅ Concatenating Functions in Arrays
const functions1 = [function () { console.log("Hello!"); }];
const functions2 = [() => console.log("World!")];
const allFunctions = functions1.concat(functions2);
console.log(allFunctions);
// Output: [ƒ, ƒ] (two functions)

// ✅ Concatenating with Different Data Types
const mixedArray1 = [1, "Hello"];
const mixedArray2 = [true, null];
const allMixed = mixedArray1.concat(mixedArray2);
console.log(allMixed);
// Output: [1, "Hello", true, null]

// ✅ Emoji/Unicode Consideration
const emojis1 = ["😀", "🚀"];
const emojis2 = ["❤️"];
const allEmojis = emojis1.concat(emojis2);
console.log(allEmojis);
// Output: ["😀", "🚀", "❤️"]

// ====================================================== //

// ✅ Real-world Example: Combining Carts
const cart1 = ["Cake", "Cookies"];
const cart2 = ["Brownie", "Muffin"];
const fullCart = cart1.concat(cart2);
console.log(fullCart);
// Output: ["Cake", "Cookies", "Brownie", "Muffin"]

// ✅ Real-life Example: Merging User Lists
const usersA = ["Alice", "Bob"];
const usersB = ["Charlie", "David"];
const allUsersList = usersA.concat(usersB);
console.log(allUsersList);
// Output: ["Alice", "Bob", "Charlie", "David"]

// ✅ Real-life Example: Merging Product Lists
const productsA = ["Laptop", "Phone"];
const productsB = ["Tablet", "Smartwatch"];
const allProducts = productsA.concat(productsB);
console.log(allProducts);
// Output: ["Laptop", "Phone", "Tablet", "Smartwatch"]
