// ======================================================
// 📌 Topic: Arrow Functions vs Regular Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * - **Regular Functions**: Traditional function syntax with their own `this`, arguments, etc.
 * - **Arrow Functions**: Shorter syntax with lexical `this` (inherits from surrounding scope)
 * 
 * ✅ Why is it important?
 * - Understanding scoping differences avoids bugs
 * - Know when to use each style
 * 
 * ✅ Key Differences:
 * 
 * 1️⃣ Syntax:
 *    Regular: `function greet() { ... }`
 *    Arrow: `const greet = () => { ... }`
 * 
 * 2️⃣ `this` Binding:
 *    Regular: Own `this` (depends on how called)  
 *    Arrow: Lexical `this` (inherits from parent)
 * 
 * 3️⃣ `arguments` object:
 *    Regular: Has `arguments`  
 *    Arrow: Does NOT have `arguments`
 * 
 * 4️⃣ Constructor Usage:
 *    Regular: Can use `new`  
 *    Arrow: Cannot use as constructor
 */

// 🧠 Example 1 — `this` Behavior
const obj = {
  name: "PureCravve",
  regularFunc: function () {
    console.log("Regular:", this.name); // Correct `this`
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // Likely undefined or global
  }
};
obj.regularFunc();
// Output: Regular: PureCravve
obj.arrowFunc();
// Output: Arrow: undefined (inherits `this` from global scope)

// ✅ Example 2 — `arguments` Keyword
function regularArgs() {
  console.log(arguments);
}
regularArgs(1, 2, 3);
// Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

const arrowArgs = () => {
  console.log(arguments);
};
arrowArgs(1, 2, 3);
// ❌ Error: arguments is not defined

// ✅ Example 3 — Constructor Difference
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john);
// Works as constructor

const ArrowPerson = (name) => {
  this.name = name;
};
// new ArrowPerson("John"); 
// ❌ TypeError: ArrowPerson is not a constructor

// ✅ Real-world Usage Recommendation
// Use Arrow Functions for:
// ✔️ Short callbacks
// ✔️ Array methods like `.map()`, `.filter()`
// ✔️ Maintaining `this` in nested scopes

// Use Regular Functions for:
// ✔️ Methods inside objects/classes
// ✔️ Constructor functions
// ✔️ Functions needing `arguments`

// ✅ Emoji/Unicode Example
const showEmoji = () => console.log("🚀");
showEmoji();
// Output: 🚀
