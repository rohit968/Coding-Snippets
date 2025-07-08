// ======================================================
// 📌 Topic: Reducing Arrays to a Single Value — `.reduce()` in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * The `.reduce()` method executes a reducer function on each element of the array, resulting in a **single output value**.
 * 
 * ✅ Why is it useful?
 * - Combines array values into totals, objects, strings, etc.
 * - Ideal for calculations, data summarization, restructuring
 * - Extremely powerful for complex transformations
 * 
 * ✅ How to use it?
 * Syntax: `array.reduce(callback, initialValue)`
 * The `callback` receives:
 * - `accumulator`: The running total/result
 * - `currentValue`: Current element
 * - `index` (optional)
 * - `array` (optional)
 * 
 * ✅ Real-life example:
 * - Summing numbers
 * - Flattening arrays
 * - Counting items
 * - Grouping data
 */

// 🧠 Basic Example — Sum of Numbers
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
// Output: 10

// ✅ Finding Product of Numbers
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);
// Output: 24

// ✅ Counting Occurrences in Array
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// Output: { Apple: 2, Banana: 2, Mango: 1 }

// ✅ Grouping Objects by Property
const new_users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
const new_groupedByAge = new_users.reduce((acc, user) => {
  if (!acc[user.age]) acc[user.age] = [];
  acc[user.age].push(user);
  return acc;
}
  , {});
console.log(new_groupedByAge);
// Output: { '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ], '30': [ { name: 'Bob', age: 30 } ] }

// ✅ Merging Arrays of Objects
const array1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const array2 = [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];
const merged = [...array1, ...array2].reduce((acc, obj) => {
  if (!acc.some(item => item.id === obj.id)) {
    acc.push(obj);
  }
  return acc;
}
  , []);
console.log(merged);
// Output: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]

// ✅ Converting Array of Strings to a Single String
const words = ["Hello", "World", "JavaScript"];
const sentence = words.reduce((acc, word) => acc + " " + word, "").trim();
console.log(sentence);
// Output: "Hello World JavaScript"

// ✅ Flattening Nested Arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);
// Output: [1, 2, 3, 4, 5, 6]

// ✅ Emoji/Unicode Example — Concatenate Emojis
const emojis = ["😀", "🚀", "❤️"];
const emojiString = emojis.reduce((acc, e) => acc + e, "");
console.log(emojiString);
// Output: "😀🚀❤️"

// =================================================== //

// ✅ Real-world Example: Total Price in Cart
const cart = [
  { name: "Cake", price: 500 },
  { name: "Cookies", price: 200 },
  { name: "Brownie", price: 300 }
];
const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
// Output: 1000

// ✅ Real-world Example: Grouping Users by Age
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const groupedByAge = users.reduce((acc, user) => {
  const ageGroup = user.age >= 30 ? "30+" : "Under 30";
  if (!acc[ageGroup]) acc[ageGroup] = [];
  acc[ageGroup].push(user);
  return acc;
}, {});
console.log(groupedByAge);
// Output: { 'Under 30': [ { name: 'Alice', age: 25 } ], '30+': [ { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ] }

// ✅ Real-world Example: Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const new_merged = [obj1, obj2].reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});
console.log(new_merged);
// Output: { a: 1, b: 3, c: 4 }

// ✅ Real-world Example: Converting Array of Strings to Object
const stringArray = ["name: Alice", "age: 25", "city: Wonderland"];
const stringObject = stringArray.reduce((acc, str) => {
  const [key, value] = str.split(": ");
  acc[key] = value;
  return acc;
}, {});
console.log(stringObject);
// Output: { name: 'Alice', age: '25', city: 'Wonderland' }