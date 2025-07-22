// ======================================================
// 📌 Topic: Dataset Attributes (data-*)
// dom-basics/17-dataset-attributes.js
// ======================================================

/**
 * ✅ What is it?
 * HTML allows us to add custom attributes to elements using `data-*` syntax.
 * These attributes are accessible via JavaScript using the `dataset` property.
 *
 * ✅ Why is it useful?
 * - Great for attaching extra data to DOM elements without using classes or IDs
 * - Keeps HTML clean and semantic
 * - Helps manage dynamic data in JavaScript (like IDs, categories, flags)
 */

// 📄 HTML Example:
// <button data-product-id="456" data-product-name="Nutty Brownie">Add to Cart</button>

// 🔹 Select the button element
const btn = document.querySelector('button[data-product-id]');

// 🔹 Access dataset attributes
console.log(btn.dataset); // DOMStringMap: {productId: "456", productName: "Nutty Brownie"}

console.log('Product ID:', btn.dataset.productId);   // "456"
console.log('Product Name:', btn.dataset.productName); // "Nutty Brownie"

// 🔹 Modify dataset attributes dynamically
btn.dataset.productId = "999";
btn.dataset.productCategory = "cakes"; // creates a new data-product-category attribute

// 🧠 Behind the scenes:
// JS: productCategory  => HTML: data-product-category
// JS: productId        => HTML: data-product-id

// 🔹 Using data-* in logic
btn.addEventListener('click', () => {
  const id = btn.dataset.productId;
  const name = btn.dataset.productName;
  console.log(`Added ${name} (ID: ${id}) to cart`);
});

// ✅ Interview Tip:
// "Use `data-*` when you need custom info on elements without polluting your class names or needing JS-specific attributes."
