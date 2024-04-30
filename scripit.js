const myLibrary = [];

function Book(title, author, pages, checked) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.checked = checked;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let checked = document.querySelector("#is_read").checked;
  myLibrary.push(new Book(title, author, pages, checked));
  displayBooks();
}

let buttonClicked = document.querySelector("#button-lol");
buttonClicked.addEventListener("click", function () {
  addBookToLibrary();
});

function displayBooks() {
  const bookDisplayDiv = document.querySelector(".book_display");
  bookDisplayDiv.innerHTML = ""; // Clear previous content
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.innerHTML = `
      <span>Title: ${book.title}</span>
      <span>Author: ${book.author}</span>
      <span>No Pages: ${book.pages}</span>
      <span>Read: ${book.checked}</span>
    `;
    bookDisplayDiv.appendChild(bookDiv);
  });
}