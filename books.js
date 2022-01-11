const addBtn = document.getElementById('add-btn');
const bookList = document.querySelector('#book-list');

let books = [];

// Displaying Added Element
const displayBooks = (id, title, author) => {
  const li = document.createElement('li');
  const br = document.createElement('br');
  li.innerHTML = `
  <h2>${title}</h2>
  <h2>${author}</h2>
  <hr>`;
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = 'Remove';
  li.insertBefore(removeBookBtn, li.lastElementChild);
  li.appendChild(br);
  bookList.appendChild(li);
  removeBookBtn.addEventListener('click', () => {
    books = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(books));
    li.remove();
  });
};

// Clear the Input Text
function clearInput() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

//  Printing the Error Message If the field is Empty
const printErrorMsg = (message) => {
  document.querySelector('.err-msg').innerHTML = message;
  setTimeout(() => {
    document.querySelector('.err-msg').innerHTML = '';
  }, 1000);
};

// Adding the Book to the Storage
function addBook(title, author) {
  const id = Date.now();
  this.id = id;
  this.title = title;
  this.author = author;
  const bookObj = { id, title, author };
  if (title === '' || author === '') {
    printErrorMsg('Please Fill the Input Fields');
  } else {
    books.push(bookObj);
    localStorage.setItem('books', JSON.stringify(books));
    clearInput();
  }
}
const getBookFromStorage = JSON.parse(localStorage.getItem("books"));
if (getBookFromStorage) {
  books = getBookFromStorage;
  books.forEach((book) => {
    displayBooks(book.id, book.title, book.author);
  });
}
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  addBook(title, author);
  displayBooks(this.id, this.title, this.author);
  clearInput();
});
document.addEventListener("DOMContentLoaded", getBookFromStorage);