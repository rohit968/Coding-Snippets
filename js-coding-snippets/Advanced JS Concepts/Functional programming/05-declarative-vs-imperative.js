/*
📌 Imperative vs Declarative Programming
------------------------------------------

🧱 Imperative:
- Tells the computer *how* to do something, step by step.
- You manage control flow, variables, and loops manually.
- Focuses on *how* to achieve the result.

🎨 Declarative:
- You tell *what* you want, not how to do it.
- You abstract the logic behind simpler syntax or APIs.
- Focuses on *what* you want to achieve.

🧠 JavaScript supports both styles, and modern code often favors declarative.
*/


// ---------------------------------------------------
// 🔧 Imperative Example: Sum of even numbers
// ---------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log("Imperative Sum:", sum); // 12

// ---------------------------------------------------
// ✨ Declarative Example: Using filter + reduce
// ---------------------------------------------------

const sumOfEvens = numbers
  .filter((n) => n % 2 === 0)     // Declarative condition
  .reduce((acc, curr) => acc + curr, 0); // Declarative accumulation

console.log("Declarative Sum:", sumOfEvens); // 12

/*
🎯 What's the difference?

Imperative: You tell JS:
  ➤ Iterate over array
  ➤ Check if each number is even
  ➤ Add it to sum manually

Declarative: You tell JS:
  ➤ I want even numbers (filter)
  ➤ I want their sum (reduce)
  ➤ Done! No need to manage flow
*/


// ---------------------------------------------------
// 🧘 Another Example: DOM Manipulation
// ---------------------------------------------------

// Imperative (manual DOM handling)
const el = document.createElement("div");
el.textContent = "Hello";
el.classList.add("greeting");
document.body.appendChild(el);

// Declarative (React-style JSX)
/*
  <div className="greeting">Hello</div>
*/

// JSX tells *what* UI to show — React takes care of *how*

/*
✅ When to use what?

Use Declarative when:
- Code should be clean and readable
- You want less boilerplate (React, Array methods)

Use Imperative when:
- You need fine control over performance or state
- You’re writing low-level or procedural logic

💡 Tip:
Try to write logic declaratively where possible — it’s easier to maintain, test, and read!
*/
