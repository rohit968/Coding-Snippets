/*
🔍 Understanding `this` in JavaScript

`this` refers to the **execution context** — the object that is currently executing the function.

It behaves differently in:
1. Global context
2. Object methods
3. Arrow functions
4. Event listeners
5. Classes
6. Strict mode
7. setTimeout / callbacks
*/

// 🟢 1. Global Context
console.log(this); // 🌐 In browser: `window` | In Node.js: `{}` or `global`

function showGlobalThis() {
  console.log("Global this:", this);
}
showGlobalThis(); // 🌐 In browser: `window`, in strict mode: `undefined`

// 🟢 2. Inside Object Method
const user = {
  name: "Rohit",
  greet() {
    console.log(`Hello, ${this.name}`); // 👈 `this` refers to `user`
  },
};
user.greet(); // Hello, Rohit

// 🔴 3. Arrow Function (lexical `this`)
const arrowUser = {
  name: "Rohit",
  greet: () => {
    console.log(`Arrow Greet: ${this.name}`); // ❌ `this` is NOT `arrowUser`
  },
};
arrowUser.greet(); // Arrow Greet: undefined

/*
⚠️ Arrow functions do not have their own `this`. 
They inherit `this` from the surrounding lexical scope.
*/

// ✅ Fix using regular function
const fixedArrowUser = {
  name: "Rohit",
  greet() {
    const arrow = () => {
      console.log(`Lexical this: ${this.name}`); // ✅ Works!
    };
    arrow();
  },
};
fixedArrowUser.greet(); // Lexical this: Rohit

// 🟡 4. Event Listener: `this` refers to the element
/*
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // 👈 the button element
});
*/

// 🧊 5. In Strict Mode
"use strict";
function strictThis() {
  console.log("Strict mode this:", this); // ❌ undefined
}
strictThis();

// ⏰ 6. setTimeout and Callbacks
const timerObj = {
  msg: "Delayed Hello",
  sayLater: function () {
    setTimeout(function () {
      console.log(this.msg); // ❌ undefined — `this` refers to global
    }, 1000);
  },
};
timerObj.sayLater();

// ✅ Fix with arrow function
const timerObjFixed = {
  msg: "Delayed Hello",
  sayLater: function () {
    setTimeout(() => {
      console.log(this.msg); // ✅ "Delayed Hello"
    }, 1000);
  },
};
timerObjFixed.sayLater();

// 🏛️ 7. Class Context
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
}

const p = new Person("Rohit");
p.sayHi(); // Hi, I'm Rohit

/*
🧠 Interview Tip:

Q: What's the difference between `this` in a normal function vs an arrow function?
A: Regular functions get `this` based on the caller. Arrow functions inherit `this` from the surrounding lexical scope.

Q: How does `this` behave in strict mode?
A: In non-method functions, `this` is `undefined` in strict mode instead of `window`.

Q: How do you fix a `this` issue in a callback?
A: Use `.bind(this)` or arrow functions for lexical `this`.
*/

