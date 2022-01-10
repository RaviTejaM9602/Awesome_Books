const bookName = document.querySelector('#title');
const authName = document.querySelector('#author');
const addBtn = document.getElementById('add-btn');
const bookList = document.querySelector('#book-list');

let books = [];

function clearInput(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}

const printErrorMsg = (message) => {
  document.querySelector('.err-msg').innerHTML = message;
  setTimeout(() => {
    document.querySelector('.err-msg').innerHTML = '';
  }, 1000);
};

function addBook(title, author){
  const id = Date.now();
  this.id = id;
  this.title = title;
  this.author = author;
  const bookObj = {
                 id,
                title,
                author};
   if (title === '' || author === ''){
     printErrorMsg('Please Fill the Input Fields');
   }else {
     books.push(bookObj)
     localStorage.setItem('books',JSON.stringify(books));
     clearInput();
   }
}

document.addEventListener('DOMContentLoaded', () => {
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook(title, author);
});
});