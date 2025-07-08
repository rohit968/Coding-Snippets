// ======================================================
// 📌 Topic: Function Scope vs Block Scope in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * - **Function Scope**: Variables declared with `var` inside a function are accessible only within that function.
 * - **Block Scope**: Variables declared with `let` or `const` inside `{ }` are only accessible within that block.
 * 
 * ✅ Why is it useful?
 * - Controls variable visibility and accessibility
 * - Prevents accidental overwriting of variables
 * - Encourages clean, bug-free code
 * 
 * ✅ How to use it?
 * - Use `let` and `const` for modern, block-scoped variables
 * - Understand where your variables live to avoid conflicts
 * 
 * ✅ Real-life examples:
 * - Creating temporary values inside functions or conditions
 * - Avoiding global variable pollution
 * - Writing modular, maintainable code
 */

// 🧠 Function Scope Example
function exampleFunctionScope() {
  var message = "Inside Function";
  console.log(message);
}
exampleFunctionScope();
// console.log(message); // ❌ Error: message is not defined (function scope)

// ✅ Block Scope Example with let/const
if (true) {
  let blockLet = "Block Scoped with let";
  const blockConst = "Block Scoped with const";
  console.log(blockLet);
  console.log(blockConst);
}
// console.log(blockLet); // ❌ Error: blockLet is not defined
// console.log(blockConst); // ❌ Error: blockConst is not defined

// ✅ var ignores Block Scope (Legacy Behavior)
if (true) {
  var legacyVar = "Not Block Scoped (var)";
}
console.log(legacyVar); // ✅ Accessible outside the block

// ✅ Real-world Example: Avoiding Conflicts
function bakeCake() {
  const temperature = 180; // only inside bakeCake
  console.log(`Baking at ${temperature}°C`);
}
bakeCake();
// console.log(temperature); // ❌ Error: temperature is not defined


// ✅ Emoji/Unicode Consideration with Scope
function emojiScope() {
  const emoji = "🎂";
  console.log(`Cake Emoji Inside Function: ${emoji}`);
}
emojiScope();
// console.log(emoji); // ❌ Error: emoji is not defined

// ================================================== //


// ✅ Real-world Example: Block Scope for Temporary Values
for (let i = 0; i < 3; i++) {
  console.log(`Counter inside loop: ${i}`);
}
// console.log(i); // ❌ Error: i is not defined