// ======================================================
// 📌 Topic: Making Objects Immutable — `Object.freeze()`
// ======================================================

/**
 * ✅ What is it?
 * `Object.freeze(obj)` prevents any changes to the object:  
 * ❌ No new properties  
 * ❌ No property removal  
 * ❌ No updates to existing values
 * 
 * ✅ Why is it useful?
 * - Prevents accidental mutations  
 * - Secures config or constant objects  
 * - Helps enforce immutability in large codebases
 * 
 * ✅ How to use it?
 * Syntax:
 * ```js
 * Object.freeze(object)
 * ```
 * Returns the same object but frozen
 */

// ✅ Basic Example
const settings = {
  theme: "light",
  layout: "grid"
};
Object.freeze(settings);
settings.theme = "dark"; // ❌ Will NOT change
settings.newProp = "test"; // ❌ Will NOT be added
delete settings.layout; // ❌ Will NOT be deleted
console.log(settings);
// Output: { theme: "light", layout: "grid" }

// ✅ Checking if an Object is Frozen
console.log(Object.isFrozen(settings)); // true

// ✅ Limitation: Shallow Freeze Only
const inventory = {
  items: ["Cake", "Cookie"]
};
Object.freeze(inventory);
inventory.items.push("Brownie"); // ✅ Still works ❗
console.log(inventory.items); // ["Cake", "Cookie", "Brownie"]
// To deep freeze (advanced): you need a recursive freeze utility

// ====================================================== //

// ✅ Real-life Example: Freezing Config
const bakeryConfig = {
  name: "PureCravve",
  location: "Gwalior",
  deliveryEnabled: true
};
Object.freeze(bakeryConfig);
function updateConfig(key, value) {
  bakeryConfig[key] = value;
}
updateConfig("deliveryEnabled", false); // ❌ No change will occur
console.log(bakeryConfig); // Still original values


// 🗣️ Layman Interview Explanation — Object.freeze()
// "It’s like laminating your bakery menu — once it’s printed and frozen, no one can scratch out prices or add extra pastries. It stays exactly how you made it."

