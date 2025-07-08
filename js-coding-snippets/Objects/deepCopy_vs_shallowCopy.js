// ======================================================
// 📌 Topic: Deep Copy vs Shallow Copy in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Copying an object can happen in two ways:
 * 
 * 🔹 **Shallow Copy**: Only top-level properties are copied.  
 *    Nested objects are still referenced (not duplicated).
 * 
 * 🔹 **Deep Copy**: Everything is cloned — including all nested levels.
 * 
 * ✅ Why is it important?
 * - Prevent unintended side effects  
 * - Avoid bugs when mutating copies  
 * - Know when you're truly "duplicating" something
 */

// ✅ Shallow Copy with Object.assign or Spread
const original = {
  name: "Cake",
  details: {
    price: 499
  }
};
const shallowCopy = { ...original };
shallowCopy.name = "Brownie"; // Changes only in copy
shallowCopy.details.price = 599; // ❌ Also changes original!
console.log(original.details.price); // 599 — problem!

// ✅ Deep Copy — Method 1: JSON method (simple, but limited)
const deepCopy1 = JSON.parse(JSON.stringify(original));
deepCopy1.details.price = 699;
console.log(original.details.price); // ✅ Still 599 — safe

// ✅ Deep Copy — Method 2: Using structuredClone (modern way)
const deepCopy2 = structuredClone(original);
deepCopy2.details.price = 899;
console.log(original.details.price); // ✅ Still 599

// ✅ Deep Copy — Method 3: Custom function or libraries (like lodash.cloneDeep)

// ====================================================== //

// ✅ Real-life Example: Updating Cart Safely
const cart = {
  items: [{ name: "Cookie", qty: 1 }]
};
const newCart = structuredClone(cart);
newCart.items[0].qty = 2;
console.log(cart.items[0].qty); // ✅ Still 1
