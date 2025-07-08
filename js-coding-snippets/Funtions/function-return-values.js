// ======================================================
// 📌 Topic: Function Return Values in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * A **return value** is the output produced by a function when it completes its execution, using the `return` keyword.
 * 
 * ✅ Why is it useful?
 * - Allows functions to pass results back to the calling code
 * - Makes functions reusable and modular
 * - Essential for calculations, data processing, conditional logic
 * 
 * ✅ How to use it?
 * Use `return <value>` inside a function to send a result  
 * If no `return` is used, function returns `undefined` by default  
 * 
 * ✅ Real-life examples:
 * - Calculating prices, discounts, totals  
 * - Processing form data and returning results  
 * - Conditional logic based on function output  
 */

// 🧠 Basic Function with Return Value
function add(a, b) {
  return a + b;
}
const result = add(5, 10);
console.log(result);
// Output: 15

// ✅ Return vs No Return
function noReturn() {
  console.log("This runs, but returns nothing");
}
console.log(noReturn());
// Output:
// This runs, but returns nothing
// undefined

// ✅ Returning Different Data Types
function getGreeting() {
  return "👋 Welcome to PureCravve!";
}
console.log(getGreeting());
// Output: 👋 Welcome to PureCravve!

function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(20));
// Output: true

// ✅ Returning Objects
function createUser(name, city) {
  return { name, city };
}
console.log(createUser("Rohit", "Gwalior"));
// Output: { name: "Rohit", city: "Gwalior" }

// ✅ Emoji/Unicode Consideration in Returns
function getRocket() {
  return "🚀 Launch Successful!";
}
console.log(getRocket());
// Output: 🚀 Launch Successful!

// =============================================== //

// ✅ Real-world Example 1: Discount Calculation
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  return price - discount;
}
console.log(calculateDiscount(1000, 10));
// Output: 900

// ✅ Real-world Example 2: Currency Conversion
function convertCurrency(amount, fromCurrency, toCurrency, exchangeRates) {
  if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
    return amount * exchangeRates[fromCurrency] / exchangeRates[toCurrency];
  }
  return "Unsupported currency conversion";
}
const exchangeRates = { USD: 1, EUR: 0.84, GBP: 0.76 };
console.log(convertCurrency(100, "USD", "EUR"));
// Output: 84

// ✅ Real-world Example 3: Age Calculation
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
console.log(calculateAge(1990));
// Output: 32


