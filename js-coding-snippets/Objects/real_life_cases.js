// ======================================================
// 📌 Topic: Real-Life Use Cases of Objects in JavaScript
// ======================================================

/**
 * ✅ What is it?
 * Objects are key-value pair structures and one of the **most fundamental** data types in JS.
 * They’re used to represent **everything**: from users, config, products, API data, form inputs, etc.
 * 
 * ✅ Why is it important?
 * - JS is object-based  
 * - Most real-world data is structured using objects  
 * - Helps you build, fetch, store, and pass data
 */

// ✅ 1. API Payloads
const newUserPayload = {
  name: "Rohit",
  email: "rohit@example.com",
  role: "admin",
  isVerified: true
};

// ✅ 2. Configuration Objects
const serverConfig = {
  port: 3000,
  dbURL: "mongodb://localhost:27017",
  useCache: true
};

// ✅ 3. Form Data Handling
const signupForm = {
  username: "purecravve",
  password: "abc123",
  confirmPassword: "abc123"
};

// ✅ 4. Error Response Format
const error = {
  code: 400,
  message: "Bad Request",
  timestamp: new Date().toISOString()
};

// ✅ 5. UI State Objects
const uiState = {
  loading: false,
  theme: "dark",
  isLoggedIn: true
};

// ✅ 6. Mapping Data (Like a Lookup)
const statusMap = {
  200: "OK",
  404: "Not Found",
  500: "Server Error"
};

console.log(statusMap[404]); // "Not Found"

// ✅ 7. Reusable Constants
const ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest"
};

// ✅ 8. Reusable Bakery Product Template (your real-life case)
const product = {
  name: "Red Velvet Cake",
  price: 499,
  tags: ["cake", "red velvet", "eggless"],
  available: true
};
