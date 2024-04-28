const myLibrary = [];

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
  myLibrary.push(new Book(title, author, pages))
  console.log(myLibrary)
}

let buttonClicked = document.querySelector("#button-lol")
buttonClicked.addEventListener("click", function() {
    alert("test")
    addBookToLibrary()
})
