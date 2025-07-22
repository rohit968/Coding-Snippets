// ======================================================
// 📌 Topic: Selecting Elements in DOM
// dom-basics/02-selecting-elements.js
// ======================================================

/**
 * ✅ Why this matters:
 * To manipulate or read anything from the DOM (text, classes, styles),
 * we need to **select** the elements first.
 *
 * ✅ Methods to Select:
 * - getElementById()
 * - getElementsByClassName()
 * - getElementsByTagName()
 * - querySelector()
 * - querySelectorAll()
 */

// 🔹 getElementById – returns a single element
const heading = document.getElementById('main-heading');
console.log(heading);

// 🔹 getElementsByClassName – returns HTMLCollection
const cards = document.getElementsByClassName('card');
console.log(cards); // Live HTMLCollection (like array but not fully)

// 🔹 getElementsByTagName – returns HTMLCollection
const allDivs = document.getElementsByTagName('div');
console.log(allDivs);

// 🔹 querySelector – returns the FIRST match
const firstPara = document.querySelector('p');
const firstCard = document.querySelector('.card');
console.log(firstPara, firstCard);

// 🔹 querySelectorAll – returns NodeList of ALL matches
const allParas = document.querySelectorAll('p');
console.log(allParas); // NodeList – static (not live)

// 🔸 Looping over NodeList
allParas.forEach((p) => console.log(p.textContent));

// 🧠 Tip: Prefer querySelector/querySelectorAll in modern code (flexible & powerful)
