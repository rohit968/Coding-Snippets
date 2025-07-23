/* 
🔒 IMMUTABILITY in JavaScript
------------------------------------
Immutability = "unchangeable"

➡️ An immutable value or object cannot be changed after it’s created.
➡️ Instead of modifying, we create *new* versions.

🧠 Benefits:
- Fewer bugs due to no side effects
- Easier to debug (no surprises!)
- Useful for functional programming & state management (e.g. React, Redux)
- Great with versioning/history (undo/redo)

*/

const originalArray = [1, 2, 3];

// ❌ MUTABLE (modifies original)
originalArray.push(4); // [1, 2, 3, 4]
console.log("After push (mutable):", originalArray);

// ✅ IMMUTABLE (create new)
const newArray = [...originalArray, 5];
console.log("New array (immutable):", newArray); // [1, 2, 3, 4, 5]
console.log("Original unchanged:", originalArray); // [1, 2, 3, 4]

/*
------------------------------------
📦 Object immutability
------------------------------------
*/

const user = {
  name: "Rohit",
  role: "Baker"
};

// ❌ Mutating the object
user.role = "Developer";
console.log("User mutated:", user);

// ✅ Immutable update (new object)
const updatedUser = {
  ...user,
  role: "Full Stack Dev"
};
console.log("Updated user (immutable):", updatedUser);
console.log("Original user still:", user);

/*
🧊 Object.freeze(obj) — prevent changes (shallow freeze)
*/

const config = Object.freeze({
  theme: "dark",
  version: 1
});

config.theme = "light"; // Won’t work in strict mode
console.log("Frozen config:", config); // { theme: "dark", version: 1 }

/*
📌 In Functional JS or React:
- Treat all data as immutable
- Avoid mutating state directly
*/

/*
🎯 Summary:
- Avoid mutating arrays/objects directly
- Use spread syntax, map/filter/reduce, or utility libs like lodash/fp
- Helps build bug-free, predictable code
*/


