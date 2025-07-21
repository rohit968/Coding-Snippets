// ======================================================
// 📉 Topic: ES6 Modules in JavaScript
// es6-modern/11-modules.js
// ======================================================

/**
 * ✅ What are Modules?
 * JavaScript modules allow you to split code into separate files and reuse it across projects.
 * ES6 introduced native module support using `export` and `import`.
 *
 * ✅ Why use Modules?
 * - Organize code better
 * - Reuse logic
 * - Avoid global namespace pollution
 * - Enable lazy loading in modern apps
 */

// ------------------------------------------------------
// ✨ Exporting (in another file: say utils.js)
// ------------------------------------------------------

export const greet = (name) => `Hello, ${name}`;
export const add = (a, b) => a + b;

// You can also do:
const greet = () => { };
const add = () => { };
export { greet, add };

// Default export:
export default function log(message) {
  console.log('LOG:', message);
}

// ------------------------------------------------------
// 👀 Importing
// ------------------------------------------------------

// Named imports:
import { greet, add } from './utils.js';
console.log(greet('Rohit')); // Hello, Rohit

// Default import:
import log from './utils.js';
log('App started');

// Rename imports:
import { greet as welcome } from './utils.js';
welcome('PureCravve');

// ------------------------------------------------------
// 📊 Real-Life Example: Bakery Utilities
// ------------------------------------------------------

// utils/bakery.js
export const getDiscount = price => price * 0.1;
export const applyGST = price => price * 1.18;

// index.js
import { getDiscount, applyGST } from './utils/bakery.js';
const basePrice = 100;
console.log(applyGST(basePrice - getDiscount(basePrice)));

// 🔊 Interview Tip:
// "Using modules reflects modern JS skills. Always modularize utilities and business logic."