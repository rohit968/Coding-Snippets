// ======================================================
// 📌 Topic: Control Property Behavior — `Object.defineProperty()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.defineProperty()` lets you **manually define or change the behavior**  
 * of a property in an object — like whether it’s writable, visible in loops, or configurable.
 * 
 * ✅ Why is it useful?
 * - Add hidden or read-only properties  
 * - Control property logic  
 * - Prevent accidental overwrites  
 * - Useful in libraries, security, internals
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.defineProperty(object, propertyName, descriptor)
 * ```
 * Descriptor options: `value`, `writable`, `enumerable`, `configurable`, `get`, `set`
 */

// ✅ Basic Example — Add Read-only Property
const user = {};
Object.defineProperty(user, "role", {
  value: "admin",
  writable: false, // Cannot change
  enumerable: true,
  configurable: false
});
console.log(user.role); // "admin"
user.role = "guest"; // ❌ No change
console.log(user.role); // Still "admin"


// ✅ Hide a property from loops
const bakery = {
  name: "PureCravve"
};
Object.defineProperty(bakery, "secretRecipe", {
  value: "1234-Secret-Formula",
  enumerable: false // Hidden from `for...in` or `Object.keys()`
});
console.log(bakery.secretRecipe); // ✅ Accessible directly
for (let key in bakery) {
  console.log(key); // Will only show "name", not "secretRecipe"
}

// ✅ Create Computed Property with Getter
const cart = {
  items: ["Cake", "Brownie"]
};
Object.defineProperty(cart, "count", {
  get() {
    return this.items.length;
  }
});
console.log(cart.count); // 2

// ✅ Prevent Deletion or Redefinition
Object.defineProperty(cart, "locked", {
  value: true,
  configurable: false // ❌ Cannot delete or redefine
});
delete cart.locked; // ❌ Fails silently
console.log(cart.locked); // true

// ====================================================== //

// ✅ Real-life Example: Add Timestamp to Order
const order = {
  item: "Cake",
  quantity: 2
};
Object.defineProperty(order, "createdAt", {
  value: new Date(),
  writable: false,
  enumerable: true
});
console.log(order);
// Output includes `createdAt`, but it can't be changed


// 🗣️ Layman Interview Explanation — Object.defineProperty()
// "It’s like assigning secret rules to an object property. You can say — this field can’t be changed, or don’t show this in listings, or calculate something whenever it’s called. Like a secret setting in your bakery system."


