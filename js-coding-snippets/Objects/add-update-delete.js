// ======================================================
// 📌 Topic: Adding, Updating, and Deleting Object Properties in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Objects are dynamic in JavaScript — you can add, update, or remove properties at any time.
 * 
 * ✅ Why is it useful?
 * - Real-world data often changes (e.g. user details, cart items, etc.)
 * - Objects must adapt to these changes
 * - Essential for dynamic apps like forms, dashboards, APIs
 * 
 * ✅ How to do it?
 */

// ✅ Adding New Properties
const user = {};
user.name = "Rohit";             // dot notation
user["age"] = 25;                // bracket notation
console.log(user);               // { name: "Rohit", age: 25 }

// ✅ Updating Existing Properties
user.age = 26;
user["name"] = "Rohit Tiwari";
console.log(user);               // { name: "Rohit Tiwari", age: 26 }

// ✅ Dynamic Property Name
const key = "isMember";
user[key] = true;
console.log(user);               // { name: "Rohit Tiwari", age: 26, isMember: true }

// ✅ Updation of object property using spread operator
const user2 = {
  name: "Rohit",
  age: 25
};
user2.name = "Rohit Tiwari";
console.log(user2);               // { name: "Rohit Tiwari", age: 25 }


// ✅ Deleting Properties
delete user.age;
console.log(user);               // { name: "Rohit Tiwari", isMember: true }


// ====================================================== //

// ✅ Real-life Example: Updating Cart Quantity
const cart = {
  item: "Cake",
  quantity: 1
};
cart.quantity = 2;               // Customer updated quantity
console.log(cart);

// ✅ Real-life Example: Adding Coupon Code
cart.coupon = "JULY50";          // New property added
console.log(cart);

// ✅ Real-life Example: Removing Cancelled Item
delete cart.item;
console.log(cart);               // { quantity: 2, coupon: "JULY50" }




// 🗣️ Layman Interview Explanation — Add, Update, Delete in Objects
//"Think of an object like a physical notepad with labels. You can write new info (add), cross out and change values (update), or erase things (delete). JavaScript objects work exactly like that — they let you manage data like a dynamic form."

