// ======================================================
// 📌 Topic: Locking Object Structure — `Object.seal()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.seal(obj)` seals an object:
 * - ❌ You CANNOT add or delete properties  
 * - ✅ But you CAN modify existing properties
 * 
 * ✅ Why is it useful?
 * - Protects structure while allowing updates  
 * - Good for partially secure configurations  
 * - Useful for data integrity without full immutability
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.seal(object)
 * ```
 */

// ✅ Basic Example
const user = {
  name: "Rohit",
  isMember: true
};

Object.seal(user);

user.name = "Rohit Tiwari"; // ✅ Allowed
user.age = 25; // ❌ Not added
delete user.isMember; // ❌ Not deleted

console.log(user);
// Output: { name: "Rohit Tiwari", isMember: true }

// ✅ Checking if Object is Sealed
console.log(Object.isSealed(user)); // true

// ✅ Shallow Seal Example
const userProfile = {
  name: "Rohit",
  socials: {
    twitter: "@purecravve"
  }
};
Object.seal(userProfile);
userProfile.socials.twitter = "@purecravve_code"; // ✅ Allowed (nested objects are not sealed)
console.log(userProfile);

// ====================================================== //

// ✅ Real-life Example: Sealing Order Summary
const orderSummary = {
  item: "Cake",
  quantity: 2,
  paid: false
};
Object.seal(orderSummary);
// Still allowed
orderSummary.paid = true;
// Not allowed
orderSummary.discount = 10; // ❌ Ignored
delete orderSummary.quantity; // ❌ Fails silently
console.log(orderSummary);
// Output: { item: "Cake", quantity: 2, paid: true }


//🗣️ Layman Interview Explanation — Object.seal()
// "Imagine sealing a cookie box: you can't take cookies out or add new ones — but you can still rearrange the ones already inside. Object.seal() locks the structure, not the contents."

