/* 
🏛️ JavaScript Classes, `extends`, and `super`
-----------------------------------------------
ES6 introduced the `class` syntax as a cleaner and more intuitive way to create objects and implement inheritance.
Under the hood, it still uses prototypal inheritance.

This file covers:
1. Creating a class
2. Constructor and methods
3. Inheritance using `extends`
4. Using `super` to call parent constructor
*/


// ✅ 1. Basic Class Syntax

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }
}

const user1 = new User("Rohit", "rohit@example.com");
user1.login(); // Rohit logged in.


// ✅ 2. Inheritance Using `extends`

class Admin extends User {
  constructor(name, email, role) {
    super(name, email); // 🧠 Call parent class constructor
    this.role = role;
  }

  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`);
  }
}

const admin1 = new Admin("AdminRohit", "admin@purecravve.in", "superadmin");
admin1.login();           // AdminRohit logged in.
admin1.deleteUser(user1); // AdminRohit deleted Rohit


// ✅ 3. Why use `super()`?
// It calls the constructor of the parent class (User), so `this` is initialized correctly.

// ❌ Without `super()` in constructor, you'll get:
// ReferenceError: Must call super constructor in derived class before accessing 'this'


// ✅ 4. Method Overriding

class PremiumUser extends User {
  login() {
    console.log(`🌟 ${this.name} (Premium) just logged in.`);
  }
}

const premiumUser = new PremiumUser("Anjali", "anjali@pro.in");
premiumUser.login(); // 🌟 Anjali (Premium) just logged in.


// ✅ 5. You can still use prototype if needed
console.log(Object.getPrototypeOf(premiumUser)); // User {}
console.log(premiumUser instanceof User);        // true
console.log(premiumUser instanceof PremiumUser); // true


// 🧠 Real-World Use Case

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} - ₹${this.price}`;
  }
}

class FoodProduct extends Product {
  constructor(name, price, ingredients) {
    super(name, price);
    this.ingredients = ingredients;
  }

  getDetails() {
    return `${super.getDetails()} [Ingredients: ${this.ingredients.join(', ')}]`;
  }
}

const biscotti = new FoodProduct("Kaju Pista Biscotti", 249, ["Kaju", "Pista", "Flour"]);
console.log(biscotti.getDetails());
// Kaju Pista Biscotti - ₹249 [Ingredients: Kaju, Pista, Flour]


/*
🧠 Interview Tip:
- `class` and `extends` are syntactic sugar over prototype-based inheritance.
- `super()` must be called before using `this` in subclass constructors.
- You can override methods and still call the parent’s version with `super.methodName()`.

🧪 Quiz:
Q: What does `extends` do?
A: It sets up the prototype chain so the child class inherits from the parent class.

Q: What if you forget `super()` in the subclass constructor?
A: It throws a ReferenceError when trying to access `this`.

📌 Summary:
✔ `class` simplifies constructor functions.
✔ `extends` allows inheritance.
✔ `super` gives access to parent class constructor and methods.
✔ Cleaner, readable, and widely used in modern JS.
*/
