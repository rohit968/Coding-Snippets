/* 
📘 Object.freeze, Object.seal, Object.assign, Object.defineProperty
------------------------------------------------------------------
These methods help control, extend, or protect object behavior in JavaScript.
Let’s explore them with practical examples.
*/

// 🔐 1. Object.freeze(obj) → Completely makes object immutable

const user1 = {
  name: "Rohit",
  age: 25,
};

Object.freeze(user1);

user1.age = 30;         // ❌ won't change
user1.city = "Indore";  // ❌ won't add
delete user1.name;      // ❌ won't delete

console.log(user1); // { name: 'Rohit', age: 25 }


// 🔒 2. Object.seal(obj) → Can update existing values but can't add/delete keys

const user2 = {
  name: "Tiwari",
  role: "Baker",
};

Object.seal(user2);

user2.role = "Founder"; // ✅ allowed
user2.city = "Bhopal";  // ❌ can't add
delete user2.name;      // ❌ can't delete

console.log(user2); // { name: 'Tiwari', role: 'Founder' }


// 🔁 3. Object.assign(target, source1, source2, ...) → Merge objects

const defaults = { theme: "light", layout: "grid" };
const userPrefs = { theme: "dark" };

const finalSettings = Object.assign({}, defaults, userPrefs);
console.log(finalSettings); // { theme: 'dark', layout: 'grid' }

// ⚠️ Shallow copy — nested objects still share reference
const a = { info: { name: "Rohit" } };
const b = Object.assign({}, a);
b.info.name = "Tiwari";
console.log(a.info.name); // "Tiwari" (still affected)


// 🛠️ 4. Object.defineProperty(obj, key, descriptor) → Full control over individual properties

const bakeryItem = {};

Object.defineProperty(bakeryItem, "price", {
  value: 150,
  writable: false,     // Cannot be changed
  enumerable: true,    // Will show in for...in / Object.keys
  configurable: false  // Cannot delete or redefine
});

console.log(bakeryItem.price); // 150
bakeryItem.price = 250;        // ❌ silently fails in non-strict mode
delete bakeryItem.price;       // ❌ cannot delete
console.log(bakeryItem);       // { price: 150 }


// 🔍 More control: make non-enumerable
Object.defineProperty(bakeryItem, "secretIngredient", {
  value: "Cardamom",
  enumerable: false,
});

console.log(Object.keys(bakeryItem)); // ['price'] (secretIngredient hidden)


// 📌 Summary Table:

/*
| Method             | Can Modify | Can Add/Delete Keys | Notes                         |
|--------------------|------------|----------------------|-------------------------------|
| Object.freeze      | ❌         | ❌                   | Fully immutable object        |
| Object.seal        | ✅ (modify)| ❌                   | Can update, but not add/delete|
| Object.assign      | ✅         | ✅                   | Merges multiple objects       |
| Object.defineProperty | ✅     | ✅                   | Fine-grained control          |
*/


// 🧪 Interview Tip:
// Q: What’s the difference between Object.freeze() and Object.seal()?
// A: `freeze()` locks everything (no changes at all), while `seal()` allows modifying existing values.

