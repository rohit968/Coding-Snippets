// ======================================================
// 📌 Topic: Nullish Coalescing (`??`) in JavaScript (ES2020+)
// es6-modern/06-nullish-coalescing.js
// ======================================================

/**
 * ✅ What is it?
 * The nullish coalescing operator (`??`) returns the right-hand side
 * operand when the left-hand side is `null` or `undefined`,
 * otherwise returns the left-hand side.
 *
 * ✅ Why is it useful?
 * - Differentiates between `null`/`undefined` and other falsy values (0, '', false)
 * - Provides clear default values without incorrect overrides
 *
 * ✅ Syntax:
 * const result = value ?? defaultValue;
 */

// 🔹 Basic Example
const foo = null;
const bar = foo ?? 'default';
console.log(bar); // 'default'

const baz = 0;
const qux = baz ?? 42;
console.log(qux); // 0 (because 0 is not nullish)

// 🔹 Comparison with Logical OR
console.log(null || 'default'); // 'default'
console.log(0 || 42);         // 42 (undesirable override)

// 🔹 Real-life Example: User Settings
const userSettings = {
  theme: undefined,
  fontSize: 0
};

const theme = userSettings.theme ?? 'light';
const fontSize = userSettings.fontSize ?? 14;
console.log(theme);    // 'light'
console.log(fontSize); // 0

// 🔹 Real-life Example: Function Parameter Defaults
function greet(name, greeting) {
  const userName = name ?? 'Guest';
  const msg = greeting ?? 'Welcome!';
  console.log(`${msg}, ${userName}.`);
}

greet(null, 'Hello'); // 'Hello, Guest.'
greet('Rohit', 'Hi');  // 'Hi, Rohit.'

// 🔹 Chaining Nullish Coalescing
const nested = undefined ?? null ?? 'fallback';
console.log(nested); // 'fallback'

// 🗣️ Interview Tip:
// "Use `??` when you need a default only for `null` or `undefined`,
// and you want to preserve other falsy values like 0 or ''."