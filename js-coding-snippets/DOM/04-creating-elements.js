// ====================================================
// 📌 Topic: Creating Elements in the DOM
// dom-basics/07-creating-elements.js
// ====================================================

/**
 * ✅ Why create elements dynamically?
 * - Add new content on the fly
 * - Great for rendering data from APIs or form inputs
 * - Enables dynamic UI components like cards, lists, modals
 */

// 🔹 document.createElement()
const newHeading = document.createElement('h2');
newHeading.textContent = 'Welcome to PureCravve!';
newHeading.classList.add('main-heading');

// 🔹 appendChild()
const container = document.getElementById('container');
container.appendChild(newHeading);

// 🔹 append() - allows text and multiple nodes
const para = document.createElement('p');
para.textContent = 'Freshly baked goodness delivered to you!';
container.append(' ', para); // inserts space and paragraph

// 🔹 prepend() - adds at the beginning
const badge = document.createElement('span');
badge.textContent = '🌟';
badge.classList.add('highlight');
container.prepend(badge);

// 🔹 insertBefore() - insert before specific node
const referenceNode = document.querySelector('.main-heading');
const notice = document.createElement('div');
notice.textContent = '🎉 New items just added!';
container.insertBefore(notice, referenceNode);

// 🔹 replaceChild() - replace an existing node
const altHeading = document.createElement('h2');
altHeading.textContent = 'Try Our Eggless Specials!';
container.replaceChild(altHeading, newHeading);

// 🔹 cloneNode()
const clonedNotice = notice.cloneNode(true);
container.appendChild(clonedNotice);

// 🗣️ Interview Tip:
// "You can dynamically build UIs in JavaScript using createElement, set attributes, and append to the DOM tree."
