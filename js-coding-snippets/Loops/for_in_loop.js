// ======================================================
// 📌 Topic: Looping Over Object Keys — `for...in`
// ======================================================

/**
 * ✅ What is it?
 * `for...in` loops through **enumerable properties (keys)** of an object.
 *
 * ✅ Why is it useful?
 * - Ideal for working with object keys
 * - Can also be (cautiously) used with arrays
 * 
 * ✅ Syntax:
 * for (const key in object) {
 *    // use key and object[key]
 * }
 * 
 * 📦 Use for objects (not arrays!)
 * 🚫 Loops over keys, not values
 * ✅ Supports break, continue
 */

// ✅ Basic Example — Looping Through Object
const user = {
  name: "Rohit",
  age: 25,
  role: "Developer"
};
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Rohit
// age: 25
// role: Developer

// ⚠️ Using `for...in` on arrays is not recommended
const fruits = ["Apple", "Banana", "Mango"];
for (const index in fruits) {
  console.log(fruits[index]); // works, but `for...of` is better for arrays
}

// ✅ To avoid inherited properties
const obj = Object.create({ inheritedKey: "value" });
obj.ownKey = "Own value";
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`); // only own properties
  }
}

// ====================================================== //

// ✅ Real-life Example: Display User Details
const userInfo = {
  username: "purecravve",
  email: "bake@purecravve.com",
  verified: true
};
for (const key in userInfo) {
  console.log(`🔎 ${key.toUpperCase()}: ${userInfo[key]}`);
}

// ✅ Real-life Example: Log Environment Configs
const env = {
  DB_HOST: "localhost",
  DB_USER: "admin",
  DB_PASS: "secret"
};
for (const variable in env) {
  console.log(`${variable} = ${env[variable]}`);
}



// 🗣️ Layman Interview Explanation — for...in
// "Imagine checking all the labels on jars in your kitchen. You’re not tasting what's inside — you're just reading the key names like 'Sugar', 'Salt', 'Coffee'. That’s what for...in does — reads keys."

