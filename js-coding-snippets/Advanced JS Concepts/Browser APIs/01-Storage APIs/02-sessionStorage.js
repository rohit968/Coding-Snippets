/* 
📌 What is sessionStorage?
Same API as localStorage, but data is cleared when the tab or window is closed.

💡 Use it when:
You want to store temporary session data (e.g., form progress, session token)

🧪 Syntax is identical to localStorage:
*/

sessionStorage.setItem('tempScore', '75');
console.log(sessionStorage.getItem('tempScore')); // 75

sessionStorage.removeItem('tempScore');
sessionStorage.clear();

/* 
💻 Real-world Example:
Track progress in a multi-step form:
*/
function saveFormStep(stepData) {
  sessionStorage.setItem("step1", JSON.stringify(stepData));
}

// Restore on reload
const step1Data = JSON.parse(sessionStorage.getItem("step1"));
if (step1Data) {
  console.log("Restore form step:", step1Data);
}

/*
🧠 Interview Tips:
- sessionStorage is tab-specific
- Data disappears on tab close (unlike localStorage)
- Good for auth-less form wizards
*/
