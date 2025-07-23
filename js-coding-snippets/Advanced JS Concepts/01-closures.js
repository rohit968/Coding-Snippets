/*
🔍 What is a Closure?
A closure is a function that remembers its lexical scope even when the function is executed outside that scope.
In simple terms: "An inner function has access to the variables of its outer function even after the outer function has returned."
*/

/*
🧠 Why use Closures?
- To create private variables
- For data encapsulation
- To maintain state in async callbacks or loops
- For cleaner and more modular code
*/

/* 📦 Basic Example */
function outer() {
  let count = 0; // This variable will be remembered
  return function inner() {
    count++;
    console.log("Count is:", count);
  };
}

const counter = outer(); // outer() is executed and returns inner
counter(); // Count is: 1
counter(); // Count is: 2

/*
Even though outer() has finished execution, `count` still exists in memory because the returned function `inner` has closed over it — that's a closure!
*/

/* 🔐 Real-world Use Case: Private Counter */
function createCounter() {
  let value = 0;
  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
}

const myCounter = createCounter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.getValue());  // 2
console.log(myCounter.decrement()); // 1

/*
🎯 This pattern is used for creating private variables (encapsulation) in JavaScript — useful in library design or component state.
*/

/* 🔁 Closures inside loops (Common Interview Pitfall) */
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("var loop:", i); // prints 4 three times
  }, 1000);
}

for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log("let loop:", j); // prints 1, 2, 3
  }, 1000);
}

/*
🧪 Why? Because `var` is function-scoped, so all timeouts share the same `i`.
`let` is block-scoped, so each iteration gets a new `j`.
Closures remember the reference to the outer variable.
*/

/* 🛠️ Interview Tip:
Q: Can you explain closures with an example?
A: Yes. Closures allow inner functions to access outer variables even after the outer function returns. Useful for encapsulation, private state, and callback patterns. (Then give the outer-inner counter example)
*/

/* ✅ Mini Challenge:
Create a `multiplier(factor)` function that returns another function which multiplies input with that factor.
*/

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15
