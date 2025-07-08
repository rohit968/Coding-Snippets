// ======================================================
// 📌 Topic: Partial Application with Functions in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Partial application is a functional programming technique that:
 * - Pre-fills some arguments of a function  
 * - Returns a new function requiring fewer parameters  
 * 
 * ✅ Why is it useful?
 * - Reuses functions with preset values  
 * - Reduces repetitive code  
 * - Makes functions more flexible and readable  
 * 
 * ✅ How to use it?
 * You create a wrapper function that passes known arguments:
 * ```js
 * function partial(func, ...presetArgs) { ... }
 * ```
 * The returned function only needs the remaining arguments  
 * 
 * ✅ Real-life examples:
 * - Pre-filling tax rates or discounts  
 * - Creating specialized functions from generic ones  
 * - Improving code clarity with reusable utilities  
 */

// ✅ Basic Partial Application Utility
function partial(func, ...presetArgs) {
  return function (...laterArgs) {
    return func(...presetArgs, ...laterArgs);
  };
}

// ======================================================== //

// ✅ Real-life Example: Pre-filling Tax Rate
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
const withGST = partial(calculateTotal, undefined, 0.18);
console.log(withGST(1000)); // NaN (price is undefined, corrected below)

// Correction: Pre-filling tax rate only
function withTax(taxRate) {
  return function (price) {
    return price + (price * taxRate);
  };
}
const applyGST = withTax(0.18);
console.log(applyGST(1000)); // Output: 1180

// ✅ Real-life Example: Pre-filling Discount Function
function applyDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}
const bakeryDiscount = partial(applyDiscount, undefined, 10);
console.log(bakeryDiscount(500)); // Output: 450

// ✅ Real-life Example: Pre-filling Currency Formatter
function formatCurrency(amount, symbol) {
  return `${symbol}${amount.toFixed(2)}`;
}
const formatINR = partial(formatCurrency, undefined, "₹");
console.log(formatINR(199.99)); // Output: ₹199.99


// 🗣️ Layman Interview Explanation — Partial Application
// "Imagine your bakery has a fixed discount for members. Instead of calculating it from scratch every time, you create a ready-to-use function with the discount preset. Partial application lets you do this in code—preset some arguments, simplify your logic."

