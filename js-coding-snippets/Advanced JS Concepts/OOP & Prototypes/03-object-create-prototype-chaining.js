/* 
🔗 Object.create & Prototype Chaining in JavaScript
----------------------------------------------------
JavaScript uses prototypal inheritance — objects inherit from other objects.
The `Object.create()` method allows you to set the prototype of a new object.

This file covers:
1. Using Object.create()
2. Manual prototype chaining
3. Inheritance through prototypes
4. Real-world use cases and interview tips
*/


// ✅ 1. Basic Object.create()

const userMethods = {
  login() {
    console.log(`${this.name} logged in.`);
  },
  logout() {
    console.log(`${this.name} logged out.`);
  }
};

const user1 = Object.create(userMethods); // user1.__proto__ === userMethods
user1.name = "Rohit";
user1.login();  // Rohit logged in.


// ✅ 2. Manual Prototype Chaining

const baseHuman = {
  species: "Homo sapiens",
  walk() {
    console.log(`${this.name} is walking.`);
  }
};

const developer = Object.create(baseHuman);
developer.name = "Anjali";
developer.walk();             // Anjali is walking.
console.log(developer.species); // Homo sapiens


// ✅ 3. Multi-Level Prototype Chain

const frontendDev = Object.create(developer);
frontendDev.name = "Rishi";
frontendDev.skills = ["HTML", "CSS", "JS"];

console.log(frontendDev.species); // Homo sapiens (from baseHuman)
frontendDev.walk();              // Rishi is walking.


// ✅ 4. Custom Constructor + Prototype Methods

function User(name) {
  this.name = name;
}
User.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const u1 = new User("Riya");
u1.sayHello(); // Hello, I'm Riya

// Internally:
// u1.__proto__ === User.prototype
// User.prototype.__proto__ === Object.prototype


// ✅ 5. Extending Prototypes for Inheritance

function Admin(name, power) {
  User.call(this, name); // Inherit properties
  this.power = power;
}
Admin.prototype = Object.create(User.prototype); // Inherit methods
Admin.prototype.constructor = Admin; // Fix constructor reference

Admin.prototype.deleteUser = function () {
  console.log(`${this.name} deleted a user with ${this.power} power.`);
};

const a1 = new Admin("AdminRohit", "all-access");
a1.sayHello(); // Hello, I'm AdminRohit
a1.deleteUser(); // AdminRohit deleted a user with all-access power


// ✅ 6. Prototype Chain Summary

console.log(Object.getPrototypeOf(a1) === Admin.prototype); // true
console.log(Object.getPrototypeOf(Admin.prototype) === User.prototype); // true


// 🧠 Real-World Use Case

const biscuit = {
  name: "Biscotti",
  describe() {
    return `This is a ${this.name}.`;
  }
};

const kajuBiscuit = Object.create(biscuit);
kajuBiscuit.name = "Kaju Biscotti";
console.log(kajuBiscuit.describe()); // This is a Kaju Biscotti.


/*

 🧪 Quiz Time:
Q: What does Object.create() do?
  A : It creates a new object with its`__proto__` pointing to the passed object.

    Q: What's the difference between `__proto__` and `prototype`?
A:
- `__proto__`: Actual prototype reference of an object(used internally).
- `prototype`: Property on constructor functions used to create the `__proto__` chain.



📌 Summary:
- `Object.create()` sets up the prototype link explicitly.
- Prototype chaining allows multi-level inheritance.
- You can build inheritance manually without using `class`.
- Useful for optimizing memory: methods shared via prototype, not recreated per instance.

🔍 Inspect:
console.dir(Object.getPrototypeOf(frontendDev));  // developer → baseHuman

This is how JS inheritance really works under the hood!
*/
