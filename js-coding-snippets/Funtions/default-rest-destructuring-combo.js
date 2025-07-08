// ======================================================
// 📌 Topic: Functions with Default + Rest + Destructuring Combo in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * This is the combination of:
 * - Default Parameters → Provide fallback values  
 * - Rest Parameters → Accept unlimited arguments as an array  
 * - Destructuring → Unpack object/array values easily  
 * 
 * ✅ Why is it useful?
 * - Makes functions flexible and foolproof  
 * - Handles missing values gracefully  
 * - Supports unknown number of arguments  
 * - Extracts only required properties  
 * 
 * ✅ How to use it?
 * Combine them directly in function parameters:
 * ```js
 * function example({ name = "Guest" }, ...rest) { ... }
 * ```
 * 
 * ✅ Real-life examples:
 * - Configurable components  
 * - User settings with defaults  
 * - Logging or processing variable-length data  
 */

// ✅ Combo Example: Product Order Function
function placeOrder(
  { item = "Unknown Item", quantity = 1, price = 0 },
  ...extraInstructions
) {
  console.log(`Ordered ${quantity} x ${item} for ₹${price * quantity}`);
  if (extraInstructions.length) {
    console.log("Extra Instructions:", extraInstructions.join(", "));
  }
}

placeOrder({ item: "Cookie", quantity: 2, price: 50 }, "No nuts", "Gift wrap");
// Output:
// Ordered 2 x Cookie for ₹100
// Extra Instructions: No nuts, Gift wrap

placeOrder({ price: 100 }, "Urgent delivery");
// Output:
// Ordered 1 x Unknown Item for ₹100
// Extra Instructions: Urgent delivery

// ✅ Real-life Example: Flexible Greeting
function greetUser(
  { name = "Guest", city = "Unknown" },
  ...messages
) {
  console.log(`Hello, ${name} from ${city}!`);
  if (messages.length) {
    console.log("Additional Messages:", messages);
  }
}

greetUser({ name: "Rohit" }, "Welcome aboard!", "Enjoy your stay");

// ✅ Real-life Example: Config with Defaults and Extras
function initApp(
  { theme = "light", language = "en" },
  ...plugins
) {
  console.log(`App started with ${theme} theme and ${language} language.`);
  if (plugins.length) {
    console.log("Loaded Plugins:", plugins);
  }
}

initApp({ language: "hi" }, "Analytics", "Chat Support");

// ✅ Combo with Array Destructuring
function processScores(
  [first, second = 0, ...restScores]
) {
  console.log(`Top Scores: ${first}, ${second}`);
  console.log("Other Scores:", restScores);
}

processScores([95, 88, 76, 65, 50]);
// Output:
// Top Scores: 95, 88
// Other Scores: [76, 65, 50]


// 🗣️ Layman Interview Explanation — Default + Rest + Destructuring Combo
// "Imagine someone orders from your bakery, but forgets to specify everything. You assume defaults—1 item, standard price. If they add special requests like 'no nuts' or 'gift wrap,' you handle those too. Destructuring unpacks details, defaults fill gaps, rest collects the extras."

