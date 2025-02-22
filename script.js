// Sample Data
let books = [];
let borrowedBooks = [];

// Load books from JSON file
fetch("books.json")
  .then((response) => response.json())
  .then((data) => {
    books = data;
    updateInventory();
  })
  .catch((error) => console.error("Error loading books:", error));

// DOM Elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");
const bookIdInput = document.getElementById("book-id");
const borrowBtn = document.getElementById("borrow-btn");
const returnBtn = document.getElementById("return-btn");
const userMessage = document.getElementById("user-message");
const addBookBtn = document.getElementById("add-book-btn");
const updateBookBtn = document.getElementById("update-book-btn");
const removeBookBtn = document.getElementById("remove-book-btn");
const inventoryList = document.getElementById("inventory-list");
const suggestionInput = document.getElementById("suggestion-input");
const submitSuggestionBtn = document.getElementById("submit-suggestion-btn");

// Search Books
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const results = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
  );
  displayResults(results);
});

function displayResults(results) {
  searchResults.innerHTML = results
    .map(
      (book) => `
      <div>
        <strong>${book.title}</strong> by ${book.author} (${book.category}) - ${book.copies} copies available <br>
        <em>Book ID: ${book.id}</em>
      </div>
    `
    )
    .join("");
}

// Borrow Book
borrowBtn.addEventListener("click", () => {
  const bookId = parseInt(bookIdInput.value);
  const book = books.find((b) => b.id === bookId);

  if (book && book.copies > 0) {
    book.copies--;
    borrowedBooks.push({ ...book, dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) }); // 14 days from now
    userMessage.textContent = `Book "${book.title}" borrowed successfully. Due date: ${borrowedBooks[borrowedBooks.length - 1].dueDate.toDateString()}`;
    updateInventory();
  } else {
    userMessage.textContent = "Book not available or invalid ID.";
  }
});

// Return Book
returnBtn.addEventListener("click", () => {
  const bookId = parseInt(bookIdInput.value);
  const borrowedBookIndex = borrowedBooks.findIndex((b) => b.id === bookId);

  if (borrowedBookIndex !== -1) {
    const returnedBook = borrowedBooks.splice(borrowedBookIndex, 1)[0];
    const book = books.find((b) => b.id === returnedBook.id);
    book.copies++;
    userMessage.textContent = `Book "${returnedBook.title}" returned successfully.`;
    updateInventory();
  } else {
    userMessage.textContent = "Invalid Book ID or not borrowed.";
  }
});

// Add Book
addBookBtn.addEventListener("click", () => {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const category = document.getElementById("book-category").value;
  const copies = parseInt(document.getElementById("book-copies").value);

  if (title && author && category && copies > 0) {
    const newBook = { id: books.length + 1, title, author, category, copies };
    books.push(newBook);
    updateInventory();
    alert(`Book "${title}" added successfully!`);
  } else {
    alert("Please fill all fields correctly.");
  }
});

// Update Book
updateBookBtn.addEventListener("click", () => {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const category = document.getElementById("book-category").value;
  const copies = parseInt(document.getElementById("book-copies").value);

  if (title && author && category && copies >= 0) {
    const book = books.find((b) => b.title === title);
    if (book) {
      book.author = author;
      book.category = category;
      book.copies = copies;
      updateInventory();
      alert(`Book "${title}" updated successfully!`);
    } else {
      alert("Book not found!");
    }
  } else {
    alert("Please fill all fields correctly.");
  }
});

// Remove Book
removeBookBtn.addEventListener("click", () => {
  const title = document.getElementById("book-title").value;
  const bookIndex = books.findIndex((b) => b.title === title);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    updateInventory();
    alert(`Book "${title}" removed successfully!`);
  } else {
    alert("Book not found!");
  }
});

// Update Inventory Display
function updateInventory() {
  inventoryList.innerHTML = books
    .map(
      (book) => `
      <div>
        <strong>${book.title}</strong> by ${book.author} (${book.category}) - ${book.copies} copies available <br>
        <em>Book ID: ${book.id}</em>
      </div>
    `
    )
    .join("");
}

// Handle Suggestion Submission
submitSuggestionBtn.addEventListener("click", () => {
  if (suggestionInput.value.trim() === "") {
    alert("Please enter a suggestion!");
  } else {
    alert("Thank you for your suggestion!");
    suggestionInput.value = "";
  }
});

// Initial Inventory Load
updateInventory();