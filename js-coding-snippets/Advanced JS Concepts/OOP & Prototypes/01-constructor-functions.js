/* 
🧱 What are Constructor Functions in JavaScript?
------------------------------------------------
Constructor functions are special functions used to create multiple similar objects.
They work like blueprints for creating instances (objects) with the same structure and behavior.
They are used before the ES6 `class` syntax became common.
*/


// ✅ Why Use Constructor Functions?
// - To avoid repeating object creation logic
// - To create multiple objects with shared structure
// - Used heavily in classic OOP-style JavaScript

// 💡 Syntax: Constructor function names start with a capital letter by convention.

function User(name, email) {
  // 'this' refers to the new object being created
  this.name = name;
  this.email = email;
  this.login = function () {
    console.log(`${this.name} logged in.`);
  };
}

// ✅ Creating new instances using `new` keyword
const user1 = new User("Rohit", "rohit@example.com");
const user2 = new User("Anjali", "anjali@example.com");

user1.login(); // Rohit logged in.
user2.login(); // Anjali logged in.

/*
🧠 Behind the scenes:
  - A new empty object is created: {}
  - The function is called with `this` pointing to that new object
  - The object gets linked to the prototype of the constructor
  - That object is returned automatically by `new`
*/

// -----------------------------------------
// 🛠 Real World Example: Bank Account System

function BankAccount(customerName, balance) {
  this.customerName = customerName;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`${this.customerName} deposited ₹${amount}. New balance: ₹${this.balance}`);
  };

  this.withdraw = function (amount) {
    if (amount > this.balance) {
      console.log("❌ Insufficient funds");
      return;
    }
    this.balance -= amount;
    console.log(`${this.customerName} withdrew ₹${amount}. New balance: ₹${this.balance}`);
  };
}

const acc1 = new BankAccount("Rohit", 1000);
acc1.deposit(500);
acc1.withdraw(400);

// -----------------------------------------
// 🧠 Interview Tip:
// Q: How is a constructor function different from a regular function?
// A: When called with `new`, a constructor function creates a new object,
// assigns `this` to it, and links the prototype. Regular functions don’t do this.

// ❗Pitfall:
const user3 = User("Sneha", "sneha@example.com"); // 🚫 Forgot 'new'
console.log(user3); // undefined
console.log(name); // Sneha — because 'this' was the global object!

// ✔ Always use 'new' with constructor functions!

// -----------------------------------------
// 📌 Bonus: Adding methods to prototype to avoid duplication

User.prototype.logout = function () {
  console.log(`${this.name} logged out.`);
};

user1.logout(); // Rohit logged out.
user2.logout(); // Anjali logged out.

// -----------------------------------------
/*
📝 Summary:
✔ Constructor functions are used to create multiple similar objects.
✔ They work with the `new` keyword.
✔ Methods can be added via prototype for memory efficiency.
✔ Constructor functions are foundational for understanding classes in JS.
*/
