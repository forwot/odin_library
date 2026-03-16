const myLibrary = [];

function Book(title, author, stat) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.stat = stat;
}

function addBookToLibrary(title, author, stat) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, stat);
  myLibrary.push(book);
}

function displayMyLibrary(){
    for(let book of myLibrary){
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Status: ${book.stat}`)
    }
}

let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputStat = document.querySelector('#stat');
let addButton = document.querySelector('.add-button');

addButton.addEventListener("click", () => {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let stat = inputStat.value;

    addBookToLibrary(title, author, stat);
    displayMyLibrary();
})

