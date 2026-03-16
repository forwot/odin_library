const myLibrary = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

function displayMyLibrary(arr){
    for(let book of arr){
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`)
    }
}

