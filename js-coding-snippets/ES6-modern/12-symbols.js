// ======================================================
// 📌 Topic: Symbols in JavaScript (ES6+)
// es6-modern/12-symbols.js
// ======================================================

/**
 * ✅ What is it?
 * A `Symbol` is a unique and immutable primitive value, ideal for creating
 * unique object property keys that won’t collide with other keys.
 *
 * ✅ Why is it useful?
 * - Avoid property name clashes, especially in large codebases or libraries
 * - Create hidden or internal properties
 * - Implement well-known behaviors via built-in symbols (e.g., iteration)
 *
 * ✅ How to use it?
 * - Use `Symbol(description)` to create a new unique symbol
 * - Use as object keys or for meta-programming
 */

// 🔹 Creating Symbols
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false (each symbol is unique)

// 🔹 Using Symbols as Object Keys
const user = {
  name: 'Rohit',
  [sym1]: 12345
};
console.log(user.name);     // 'Rohit'
console.log(user[sym1]);    // 12345

// 🔹 Symbols are non-enumerable by default
for (let key in user) {
  console.log(key);         // only 'name' (symbol keys skipped)
}
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]

// 🔹 Well-known Symbol: Symbol.iterator
const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};
for (const num of iterable) {
  console.log(num); // 1, 2, 3
}

// 🔹 Real-life Example: Private Properties
class BankAccount {
  #balance = 0; // Private via symbol-like behavior
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError (private)

// 🗣️ Interview Tip:
// "Symbols let you add truly unique keys to objects—perfect for private or
// library-internal properties—without risk of name collisions."