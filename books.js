const addBtn = document.querySelector('.add-btn');
const bookList = document.querySelector('#book-list');

let books = [];
/// //

// Displaying Added Element
const displayBooks = (id, title, author) => {
  bookList.classList.add('with-border');
  const li = document.createElement('li');
  const br = document.createElement('br');
  // li.parentElement.classList.add('with-border');
  li.innerHTML = `
  <h2> "${title}" by "${author}"</h2>`;
  const removeBookBtn = document.createElement('button');
  removeBookBtn.textContent = 'Remove';
  li.appendChild(removeBookBtn);
  li.appendChild(br);
  bookList.appendChild(li);
  removeBookBtn.addEventListener('click', () => {
    books = books.filter((book) => book.id !== id);
    if (books.length === 0) {
      bookList.classList.remove('with-border');
    } else {
      bookList.classList.add('with-border');
    }
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
  }
}
const getBookFromStorage = JSON.parse(localStorage.getItem('books'));
if (getBookFromStorage) {
  books = getBookFromStorage;
  books.forEach((book) => {
    displayBooks(book.id, book.title, book.author);
  });
}
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  addBook(title, author);
  displayBooks(this.id, this.title, this.author);
  clearInput();
});
document.addEventListener('DOMContentLoaded', getBookFromStorage);

// navs on clicks
const bookLists = document.querySelector('.books');
const addNewBook = document.querySelector('.create');
const contact = document.querySelector('.contact');

const formContainer = document.querySelector('.form-container');
const bookContainer = document.querySelector('.main-books');
const contactContainer = document.querySelector('.contact-container');

bookLists.addEventListener('click', () => {
  bookContainer.style.display = 'block';
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  bookLists.classList.toggle('blue');
  addNewBook.classList.remove('blue');
  contact.classList.remove('blue');
});

addNewBook.addEventListener('click', () => {
  formContainer.style.display = 'block';
  bookContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  bookLists.classList.remove('blue');
  contact.classList.remove('blue');
  addNewBook.classList.toggle('blue');
});

contact.addEventListener('click', () => {
  contactContainer.style.display = 'block';
  formContainer.style.display = 'none';
  bookContainer.style.display = 'none';
  contact.classList.toggle('blue');
  bookLists.classList.remove('blue');
  addNewBook.classList.remove('blue');
});

// date
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentDate = new Date();
const date = ` ${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
const time = currentDate.toLocaleTimeString();
const websiteDate = document.querySelector('.date');
websiteDate.innerHTML = `${date} ${time}`;