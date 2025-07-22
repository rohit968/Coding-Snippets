// ======================================================
// 📌 Topic: document object & DOM tree (DOM Basics)
// dom-basics/01-document-and-dom-tree.js
// ======================================================

/**
 * ✅ What is the DOM?
 * DOM (Document Object Model) is a tree-like structure
 * that represents the HTML document in JavaScript.
 * The `document` object is the root of this tree.
 *
 * ✅ Why is it important?
 * It allows JavaScript to read, traverse, and manipulate the web page.
 */

// 🔹 Access the document root:
console.log(document); // Entire HTML document
console.dir(document); // Interactive object representation

// 🔹 Access parts of the document:
console.log(document.head);      // <head> element
console.log(document.body);      // <body> element
console.log(document.title);     // Page title
console.log(document.URL);       // Current page URL

// 🔹 DOM Tree Navigation:
console.log(document.documentElement);       // <html> element
console.log(document.documentElement.childNodes); // NodeList of children (incl. text nodes)

// 🗣️ Interview Tip:
// "DOM is like a live map of your webpage. If HTML is the structure,
// DOM is the interactive, scriptable version of it."