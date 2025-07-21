// ======================================================
// 📌 Topic: Understanding `this` Keyword in JavaScript
// core-concepts/04-this-keyword.js
// ======================================================

/**
 * ✅ What is it?
 * The `this` keyword refers to the **execution context** of a function—
 * the object on which the function is called.
 *
 * JavaScript binding rules (order of precedence):
 * 1. New Binding (constructor functions)
 * 2. Explicit Binding (`call`/`apply`/`bind`)
 * 3. Implicit Binding (object method invocation)
 * 4. Default Binding (global or undefined in strict mode)
 *
 * ✅ Why is it useful?
 * - Controls object context
 * - Enables method reuse across objects
 * - Essential for event handlers and OOP patterns
 *
 * ✅ How to use it?
 * - Understand invocation patterns
 * - Use arrow functions for lexical `this`
 */

// 🔹 Default Binding (global scope)
function showThis() {
  console.log(this);
}
showThis(); // In browser: Window; in strict: undefined

// 🔹 Implicit Binding (object method)
const user = {
  name: 'Rohit',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
user.greet(); // Hello, I'm Rohit

// 🔹 Explicit Binding (call, apply, bind)
function introduce(city) {
  console.log(`${this.name} lives in ${city}`);
}
const person = { name: 'Alice' };
introduce.call(person, 'Delhi');  // Alice lives in Delhi
introduce.apply(person, ['Mumbai']);  // Alice lives in Mumbai
const boundIntro = introduce.bind(person, 'Kolkata');
boundIntro(); // Alice lives in Kolkata

// 🔹 New Binding (constructor)
function Person(name) {
  this.name = name;
}
const p = new Person('Bob');
console.log(p.name); // Bob

// 🔹 Arrow Functions (lexical this)
const team = {
  name: 'PureCravve',
  members: ['Rohit', 'Alice'],
  showTeam() {
    this.members.forEach(member => {
      console.log(`${member} is part of ${this.name}`);
    });
  }
};
team.showTeam();
// Rohit is part of PureCravve
// Alice is part of PureCravve

//✅ Real - life Example: Event Handler Context
const button = document.getElementById('submit');
button.addEventListener('click', function () {
  console.log(this.id); // 'submit'
});

// ✅ Interview Tip:
// "`this` depends on how you call a function—remember the four binding rules,
// and use arrow functions when you need the surrounding context."