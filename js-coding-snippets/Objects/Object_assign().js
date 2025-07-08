// ======================================================
// 📌 Topic: Merging and Cloning Objects — `Object.assign()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.assign(target, ...sources)` copies properties from one or more source objects
 * into a target object. It returns the updated target object.
 * 
 * ✅ Why is it useful?
 * - Merge multiple objects together  
 * - Clone objects (shallow copy)  
 * - Set default values or override properties  
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.assign(target, source1, source2, ...)
 * ```
 */

// ✅ Basic Example: Merging Objects
const userInfo = { name: "Rohit", age: 25 };
const extraInfo = { isMember: true, city: "Gwalior" };
const fullProfile = Object.assign({}, userInfo, extraInfo);
console.log(fullProfile);
// Output: { name: "Rohit", age: 25, isMember: true, city: "Gwalior" }

// ✅ Shallow Cloning an Object
const original = { a: 1, b: 2 };
const clone = Object.assign({}, original);
console.log(clone); // { a: 1, b: 2 }

// ✅ Modifying Values During Merge
const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { theme: "dark" };
const finalSettings = Object.assign({}, defaults, userPrefs);
console.log(finalSettings); // { theme: "dark", fontSize: 14 }

// ✅ Merging Multiple Objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }


// ✅ Caution: Shallow Copy
const objNested = { user: { name: "Rohit" } };
const copy = Object.assign({}, objNested);
copy.user.name = "Changed";
console.log(objNested.user.name); // "Changed" ❗ (because it's a shallow copy)


// ====================================================== //

// ✅ Real-world Example: Order Summary Merge
const order = { item: "Cake", quantity: 2 };
const delivery = { method: "Express", cost: 50 };
const payment = { paid: true, method: "UPI" }; \
const orderSummary = Object.assign({}, order, delivery, payment);
console.log(orderSummary);


// 🗣️ Layman Interview Explanation — Object.assign()
// "Think of Object.assign() like copying details from multiple sticky notes into one clean page. You can gather, override, or clone all your object data. It’s like writing a full bakery order sheet by combining notes from different staff."

