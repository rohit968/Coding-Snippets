// 🔁 map(), filter(), reduce() – JavaScript's Functional Superpowers

const numbers = [1, 2, 3, 4, 5, 6];

/* 
-----------------------------------
🗺️ map() – Transform each element
-----------------------------------
- Returns a new array with the same length.
- Applies the callback function to each item.
*/

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10, 12]

const toStrings = numbers.map(num => `#${num}`);
console.log("Strings:", toStrings); // ['#1', '#2', ..., '#6']

/* 
-----------------------------------
🔍 filter() – Select elements
-----------------------------------
- Returns a new array with elements that pass the test.
*/

const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6]

const greaterThanThree = numbers.filter(num => num > 3);
console.log("Greater than 3:", greaterThanThree); // [4, 5, 6]

/* 
-----------------------------------
📦 reduce() – Reduce to a single value
-----------------------------------
- Accepts a callback and initial value.
- Callback has: accumulator, currentValue, index (optional), array (optional)
*/

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 21

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 720

// 🧠 With detailed logging
const reduceLog = numbers.reduce((acc, curr, idx) => {
  console.log(`Step ${idx}: acc=${acc}, curr=${curr}`);
  return acc + curr;
}, 0);

// 🧪 reduce() – transform array into object
const names = ["rohit", "tiwari", "purecravve"];

const nameLengths = names.reduce((acc, name) => {
  acc[name] = name.length;
  return acc;
}, {});
console.log("Name lengths object:", nameLengths);
// { rohit: 5, tiwari: 6, purecravve: 10 }

/* 
✅ Summary:
- Use `.map()` when you want to *transform* values.
- Use `.filter()` when you want to *select* certain values.
- Use `.reduce()` when you want to *combine* all values into one (sum, product, object, string, etc.)
*/

/*
📌 Bonus:
- All 3 are non-mutating (original array remains unchanged).
- Can be chained: numbers.map(...).filter(...).reduce(...)
*/

