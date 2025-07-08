// ======================================================
// 📌 Topic: Immediately Invoked Function Expressions (IIFE) in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * IIFE = Function that runs immediately after being defined.
 * `(function() { ... })();`
 * 
 * ✅ Why is it useful?
 * - Avoids polluting global scope
 * - Creates private variables (encapsulation)
 * - Runs setup or logic instantly
 * 
 * ✅ How to use it?
 * Syntax:
 * 
 * (function() {
 *    // code
 * })();
 * 
 * ✅ Real-life example:
 * - Setup configurations
 * - Private logic in modules
 * - Quick one-time operations
 */

// 🧠 Basic Example — IIFE
(function () {
  console.log("IIFE executed immediately!");
})();

// ✅ IIFE with Parameters
(function (name) {
  console.log(`Hello, ${name}`);
})("Rohit");

// ✅ IIFE with Arrow Function (Modern Style)
(() => {
  console.log("Arrow Function IIFE executed!");
})();

// ✅ Using IIFE to Create Private Variables
const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log("Counter reset");
    }
  };
})();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.reset();     // Output: Counter reset

// ✅ IIFE for Module Pattern
const calculator = (function () {
  // Private variables
  let history = [];

  // Private helper function
  function addToHistory(operation, result) {
    history.push({ operation, result, timestamp: new Date() });
  }

  // Public API
  return {
    add: function (a, b) {
      const result = a + b;
      addToHistory(`add(${a}, ${b})`, result);
      return result;
    },
    multiply: function (a, b) {
      const result = a * b;
      addToHistory(`multiply(${a}, ${b})`, result);
      return result;
    },
    getHistory: function () {
      return [...history]; // Return copy to prevent external modification
    },
    clearHistory: function () {
      history = [];
    }
  };
})();
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.multiply(4, 2)); // Output: 8
console.log(calculator.getHistory());   // Output: Array with operations

// ✅ IIFE for Configuration Management
const config = (function () {
  const defaultSettings = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
  };
  let currentConfig = { ...defaultSettings };
  return {
    get: function (key) {
      return currentConfig[key];
    },
    set: function (key, value) {
      if (key in defaultSettings) {
        currentConfig[key] = value;
        console.log(`Config updated: ${key} = ${value}`);
      } else {
        console.warn(`Unknown config key: ${key}`);
      }
    },
    reset: function () {
      currentConfig = { ...defaultSettings };
      console.log("Config reset to defaults");
    },
    getAll: function () {
      return { ...currentConfig };
    }
  };
})();
config.set('timeout', 10000);
console.log(config.get('timeout')); // Output: 10000

// ✅ IIFE for Event Handler Setup
(function () {
  let clickCount = 0;
  const maxClicks = 5;
  function handleClick() {
    clickCount++;
    console.log(`Click ${clickCount}/${maxClicks}`);
    if (clickCount >= maxClicks) {
      console.log("Maximum clicks reached!");
      // Remove event listener
      document.removeEventListener('click', handleClick);
    }
  }
  // Simulate adding event listener (in real browser environment)
  console.log("Event handler setup complete");
  // document.addEventListener('click', handleClick);
})();

// ✅ IIFE for Utility Functions
const utils = (function () {
  // Private cache
  const cache = new Map();
  // Private helper
  function generateKey(...args) {
    return args.join('|');
  }
  return {
    // Memoized factorial
    factorial: function (n) {
      const key = generateKey('factorial', n);
      if (cache.has(key)) {
        console.log(`Cache hit for factorial(${n})`);
        return cache.get(key);
      }
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      cache.set(key, result);
      console.log(`Calculated factorial(${n}) = ${result}`);
      return result;
    },
    // Debounced function
    debounce: function (func, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    },
    // Clear cache
    clearCache: function () {
      cache.clear();
      console.log("Cache cleared");
    }
  };
})();
console.log(utils.factorial(5)); // Output: 120
console.log(utils.factorial(5)); // Output: Cache hit for factorial(5) 120

// ✅ IIFE for Data Validation
const validator = (function () {
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s\-\(\)]{10,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  };
  const messages = {
    email: "Invalid email format",
    phone: "Invalid phone number",
    password: "Password must be at least 8 characters with letters and numbers"
  };
  return {
    validate: function (type, value) {
      if (!patterns[type]) {
        throw new Error(`Unknown validation type: ${type}`);
      }
      const isValid = patterns[type].test(value);
      return {
        isValid,
        message: isValid ? null : messages[type]
      };
    },
    addPattern: function (type, pattern, message) {
      patterns[type] = pattern;
      messages[type] = message;
      console.log(`Added validation pattern for: ${type}`);
    }
  };
})();
console.log(validator.validate('email', 'test@example.com')); // Output: { isValid: true, message: null }
console.log(validator.validate('email', 'invalid-email'));    // Output: { isValid: false, message: "Invalid email format" }

// ✅ IIFE for State Management
const stateManager = (function () {
  let state = {};
  const listeners = new Map();
  return {
    setState: function (key, value) {
      const oldValue = state[key];
      state[key] = value;
      // Notify listeners
      if (listeners.has(key)) {
        listeners.get(key).forEach(callback => {
          callback(value, oldValue);
        });
      }
      console.log(`State updated: ${key} = ${value}`);
    },
    getState: function (key) {
      return state[key];
    },
    subscribe: function (key, callback) {
      if (!listeners.has(key)) {
        listeners.set(key, []);
      }
      listeners.get(key).push(callback);
      return function unsubscribe() {
        const callbacks = listeners.get(key);
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      };
    }
  };
})();
// Subscribe to state changes
const unsubscribe = stateManager.subscribe('user', (newValue, oldValue) => {
  console.log(`User changed from ${oldValue} to ${newValue}`);
});
stateManager.setState('user', 'John');
stateManager.setState('user', 'Jane');
unsubscribe(); // Stop listening

// ✅ Emoji/Unicode Example
(() => {
  console.log("🚀 IIFE with Emoji!");
})();

// ===================================================== //

// ✅ Real-world Example: Quick Setup
(function () {
  const settings = {
    theme: "dark",
    language: "en"
  };
  console.log("App initialized with:", settings);
})();