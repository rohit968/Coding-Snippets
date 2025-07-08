// ======================================================
// 📌 Topic: Functions as Constructors in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * In JavaScript, functions can act as **constructors** using the `new` keyword.
 * 
 * Constructor functions:
 * - Create new objects  
 * - Set properties and methods for those objects  
 * - Provide reusable "blueprints" for object creation  
 * 
 * ✅ Why is it useful?
 * - Defines object templates  
 * - Easily creates multiple similar objects  
 * - Common before ES6 `class` syntax  
 * 
 * ✅ How to use it?
 * - Capitalize constructor function names by convention  
 * - Use `this` to assign properties  
 * - Invoke with `new` keyword  
 * 
 * ✅ Real-life examples:
 * - Creating user, product, or bakery objects  
 * - Defining reusable object patterns  
 * - Building custom data structures  
 */

// 🧠 Basic Example: Basic Constructor Function
function Person(name, role) {
  this.name = name;
  this.role = role;
  this.introduce = function () {
    console.log(`Hi, I'm ${this.name}, and I am a ${this.role}`);
  };
}
const rohit = new Person("Rohit", "Baker");
rohit.introduce();
// Output: Hi, I'm Rohit, and I am a Baker


// ✅ Constructor Function with Predefined Defaults
function User(name, isAdmin = false) {
  this.name = name;
  this.isAdmin = isAdmin;
}
const admin = new User("Rohit", true);
console.log(admin);

// ✅ Using `new Function()` (Dynamic Function Creation)
const dynamicFunc = new Function("a", "b", "return a + b;");
console.log(dynamicFunc(3, 7));
// Output: 10

// ======================================================== //

// ✅ Real-world Example: Bakery Item Constructor
function BakeryItem(name, price) {
  this.name = name;
  this.price = price;
}
const cupcake = new BakeryItem("Cupcake", 80);
const cookie = new BakeryItem("Cookie", 50);
console.log(cupcake);
console.log(cookie);

// ✅ Real-world Example: Method Sharing via Prototype
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.discount = function (percent) {
  this.price -= (this.price * percent) / 100;
};
const cake = new Product("Cake", 500);
cake.discount(10);
console.log(cake.price);
// Output: 450

// 🗣️ Layman Interview Explanation — Function Constructors
//"Think of a constructor like a mold in a bakery. You design the mold once, then press it to create hundreds of identical cookies or cupcakes. In JavaScript, constructor functions work the same way to create many similar objects easily."

