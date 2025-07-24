// Real-Time Search & Filtering

// HTML File

/*
<!-- search-filter.html -->
<input type="text" id="searchInput" placeholder="Search users..." />
<ul id="resultsList"></ul>
*/

// 05-search-filter.js

// Sample dataset
const users = [
  "Rohit Tiwari",
  "Anjali Mehra",
  "Karan Patel",
  "Sonal Verma",
  "Vivek Singh",
  "Tanya Joshi",
  "Ramesh Kumar",
  "Neha Sharma",
  "Priya Yadav",
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Render list items
function renderList(filteredUsers) {
  resultsList.innerHTML = "";

  if (filteredUsers.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found.";
    resultsList.appendChild(li);
    return;
  }

  filteredUsers.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    resultsList.appendChild(li);
  });
}

// Filter logic
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = users.filter((name) =>
    name.toLowerCase().includes(keyword)
  );
  renderList(filtered);
});

// Initial render
renderList(users);

/*
✅ Concepts Covered
      Listening to input events
      Case-insensitive filtering
      Updating DOM in real time
      Gracefully handling no matches

💡 Real-World Use Case Used in:
      User directories
      Product/category search
      Dashboard filtering
      Live table filtering
*/