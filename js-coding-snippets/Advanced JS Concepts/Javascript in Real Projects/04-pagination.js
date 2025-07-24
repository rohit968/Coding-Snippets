// Client-Side Pagination with Vanilla JS

// HTML File
/*
<!-- pagination.html -->
<div id="userList"></div>
<div id="paginationControls"></div>
*/


// 04-pagination.js

// Dummy data (simulate fetched data)
const users = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

const ITEMS_PER_PAGE = 10;
let currentPage = 1;

const userList = document.getElementById("userList");
const paginationControls = document.getElementById("paginationControls");

// Display users for the current page
function renderUsers() {
  userList.innerHTML = "";

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentUsers = users.slice(start, end);

  currentUsers.forEach((user) => {
    const div = document.createElement("div");
    div.textContent = `${user.id}. ${user.name}`;
    userList.appendChild(div);
  });
}

// Create pagination buttons
function renderPagination() {
  paginationControls.innerHTML = "";
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.disabled = true;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderUsers();
      renderPagination();
    });
    paginationControls.appendChild(btn);
  }
}

// Initial render
renderUsers();
renderPagination();

/*
✅ Concepts Covered
      Slicing arrays for pagination
      Dynamic rendering of list items
      Generating page navigation buttons
      Handling state changes (currentPage)

💡 Real-World Use Case Used in:
      Admin dashboards (users, orders)
      Blog post listings
      E-commerce product catalogs
*/