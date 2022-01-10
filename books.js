let booksList = JSON.parse(localStorage.getItem('books') || '[]');
const bookList = document.querySelector('#book-list');
const title = document.querySelector('#title');
const authorName = document.querySelector('#author');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBook(book) {
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

