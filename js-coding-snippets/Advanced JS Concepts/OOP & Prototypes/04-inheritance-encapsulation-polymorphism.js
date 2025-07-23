/* 
📘 Inheritance, Encapsulation, Polymorphism in JavaScript (OOP Concepts)
------------------------------------------------------------------------
JavaScript supports object-oriented principles using prototypal inheritance and ES6 classes.
Let's break down each concept with examples.

1. 🔁 Inheritance
2. 🔐 Encapsulation
3. 🎭 Polymorphism
*/


// 🔁 1. INHERITANCE (Code reusability using prototype or class)

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog1 = new Dog("Rocky");
dog1.eat();  // Rocky is eating.
dog1.bark(); // Rocky is barking.

// Inheritance chain:
// dog1 --> Dog --> Animal --> Object


// 🔐 2. ENCAPSULATION (Hide internal details and expose only what’s needed)

class BankAccount {
  #balance = 0; // Private field using #

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  checkBalance() {
    return `₹${this.#balance}`;
  }
}

const account = new BankAccount("Rohit");
account.deposit(5000);
account.withdraw(1200);
console.log(account.checkBalance()); // ₹3800

// ❌ account.#balance = 10000; // Error: Private field


// 🎭 3. POLYMORPHISM (Same method, different behavior based on object type)

class Shape {
  draw() {
    console.log("Drawing a shape...");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle 🟠");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square 🟥");
  }
}

function renderShapes(shapes) {
  shapes.forEach(shape => shape.draw());
}

renderShapes([new Circle(), new Square(), new Shape()]);
/*
Output:
Drawing a circle 🟠
Drawing a square 🟥
Drawing a shape...
*/


// 💡 Bonus: Using polymorphism for bakery items

class BakeryItem {
  describe() {
    console.log("This is a generic bakery item.");
  }
}

class Cookie extends BakeryItem {
  describe() {
    console.log("This is a crunchy cookie 🍪");
  }
}

class Brownie extends BakeryItem {
  describe() {
    console.log("This is a fudgy brownie 🍫");
  }
}

const box = [new Cookie(), new Brownie(), new BakeryItem()];
box.forEach(item => item.describe());


// 🧪 Interview Insight:

// Q: What's the benefit of encapsulation?
// A: Prevents unwanted access/modification of sensitive data (like balance).

// Q: Can JavaScript do multiple inheritance?
// A: Not directly. It supports single inheritance via class/prototype. But you can mix functionality using mixins.


// 🔍 Summary:
console.log(Object.getPrototypeOf(dog1)); // Dog.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dog1))); // Animal.prototype

/*
📌 Summary:
- Inheritance: Code reuse via class or prototype chain
- Encapsulation: Hiding data (via closures or private fields)
- Polymorphism: Common interface, different behavior

Mastering these concepts is crucial for real-world scalable JavaScript.
*/
