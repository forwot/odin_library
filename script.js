const myLibrary = [];
const libContainer = document.querySelector('.lib-container');

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
    libContainer.replaceChildren();

    for(let book of myLibrary){
        const newRow = document.createElement('tr');
        const bookTitle = document.createElement('td');
        const bookAuthor = document.createElement('td');
        const bookStat = document.createElement('td');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookStat.textContent = book.stat

        newRow.appendChild(bookTitle);
        newRow.appendChild(bookAuthor);
        newRow.appendChild(bookStat);

        libContainer.appendChild(newRow);

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

    if( title !== "" && author !== ""){
        addBookToLibrary(title, author, stat);
        displayMyLibrary();

        inputAuthor.value = "";
        inputTitle.value = "";
    }
    else{
        alert("Please fill in all fields.")
    }
})


