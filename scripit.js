const myLibrary = [
  {
    title : "Tuesdays with Morrie",
    author: "Mitch Albom",
    pages: "224"
  },
  {

  }
];



function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  myLibrary.push(new Book(title, author, pages));
  console.log(myLibrary);
}

let buttonClicked = document.querySelector("#button-lol");
buttonClicked.addEventListener("click", function () {
  addBookToLibrary();
});

myLibrary.forEach((Book) => {
  const bookDisplayDiv = document.querySelector(".book_display");
  const bookDiv = document.createElement("div");
  const titleP = document.createElement("p");
  titleP.textContent = "Title: " + Book.title;
  bookDiv.appendChild(titleP);
  bookDisplayDiv.appendChild(bookDiv);
});