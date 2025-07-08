// ======================================================
// 📌 Topic: Object Creation in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Objects in JavaScript store key-value pairs and are used to group related data.
 * 
 * ✅ Why is it useful?
 * - Organizes complex data  
 * - Represents real-world entities (users, products, orders, etc.)  
 * - Backbone of most JavaScript code (APIs, configurations, etc.)  
 * 
 * ✅ How to create Objects?
 * There are multiple ways to create objects:
 */

// ✅ 1. Object Literal (Most Common)
const user = {
  name: "Rohit",
  age: 25,
  isMember: true
};
console.log(user);

// ✅ 2. Using `new Object()` (Less preferred, but valid)
const product = new Object();
product.name = "Cake";
product.price = 499;
console.log(product);

// ✅ 3. Using Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 30);
console.log(person1);

// ✅ 4. Using Class Syntax (Modern OOP Style)
class Order {
  constructor(item, quantity) {
      this.item = item;
      this.quantity = quantity;
  }
}
const order1 = new Order("Cookie", 3);
console.log(order1);

// ✅ 5. Dynamic Object Creation with Computed Properties
const key = "city";
const address = {
  [key]: "Gwalior",
  country: "India"
};
console.log(address);

// ✅ 6. Factory Functions for Reusable Object Creation
function createProduct(name, price) {
  return {
      name,
      price,
      available: true
  };
}
const prod1 = createProduct("Brownie", 199);
console.log(prod1);

// 🗣️ Layman Interview Explanation — Object Creation
// "Think of objects like bakery order slips — they neatly group details like customer name, items ordered, and price, all in one place. In JavaScript, objects help you organize information just like that — keeping related data together so it’s easy to work with."

