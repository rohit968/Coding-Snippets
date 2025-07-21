// ======================================================
// 📌 Topic: Classes & Inheritance in JavaScript (ES6+)
// es6-modern/10-classes-inheritance.js
// ======================================================

/**
 * ✅ What is it?
 * ES6 `class` syntax provides a cleaner way to create constructor functions
 * and handle inheritance using `extends` and `super`.
 *
 * ✅ Why is it useful?
 * - More intuitive OOP-style code
 * - Clear syntax for constructor and methods
 * - Easy subclassing and method overriding
 *
 * ✅ Syntax:
 * class Parent { constructor() {} method() {} }
 * class Child extends Parent { constructor() { super(); } }
 */

// 🔹 Basic Class Definition
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const cat = new Animal('Whiskers');
cat.speak(); // Whiskers makes a noise.

// 🔹 Inheritance with `extends` & `super`
class Dog extends Animal {
  constructor(name, breed) {
    super(name);       // call parent constructor
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak();            // Rex barks.
console.log(dog.breed); // German Shepherd

// 🔹 Inherited Method Access
class Cat extends Animal {
  purr() {
    console.log(`${this.name} purrs.`);
  }
}
const kitty = new Cat('Mittens');
kitty.speak(); // Mittens makes a noise.
kitty.purr();  // Mittens purrs.

// 🔹 Static Methods
class MathUtil {
  static square(x) {
    return x * x;
  }
}
console.log(MathUtil.square(5)); // 25

// 🔹 Real-life Example: UI Component Classes
class Component {
  constructor(id) {
    this.id = id;
  }
  render() {
    console.log(`Rendering component #${this.id}`);
  }
}
class Button extends Component {
  constructor(id, label) {
    super(id);
    this.label = label;
  }
  click() {
    console.log(`${this.label} button clicked`);
  }
}
const btn = new Button('btn1', 'Submit');
btn.render(); // Rendering component #btn1
btn.click();  // Submit button clicked

// 🗣️ Interview Tip:
// "Use `class` syntax for cleaner OOP patterns—`extends` for inheritance,
// `super` to call parent constructors/methods, and `static` for utility functions."