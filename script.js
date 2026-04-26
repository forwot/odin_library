const myLibrary = [];
const libContainer = document.querySelector('.lib-container');

// New Book class
class Book {
    constructor(title, author, stat) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.stat = stat;
    }

    changeStatus(){
        this.stat = this.stat === "Read" ? "Not read" : "Read";
    }
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

        const statusCell = document.createElement('td')
        const statusButton = document.createElement('button');
        const dltCell = document.createElement('td');
        const dltButton = document.createElement('button');       

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;

        statusButton.textContent = book.stat;
        dltButton.textContent = "DELETE";

        statusButton.addEventListener("click", () => {
            book.changeStatus();
            statusButton.textContent = book.stat;
        })

        dltButton.addEventListener("click", () => {
            removeBook(book.id);
        })

        dltCell.appendChild(dltButton);
        statusCell.appendChild(statusButton);

        newRow.appendChild(bookTitle);
        newRow.appendChild(bookAuthor);
        newRow.appendChild(statusCell);
        newRow.appendChild(dltCell);
        
        libContainer.appendChild(newRow);
    }
}

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputStat = document.querySelector('#stat');
const addButton = document.querySelector('.add-button');

addButton.addEventListener("click", () => {

    if( inputTitle.value.trim() !== "" && inputAuthor.value.trim() !== ""){
        addBookToLibrary(inputTitle.value, inputAuthor.value, inputStat.value);
        displayMyLibrary();

        inputAuthor.value = "";
        inputTitle.value = "";
    }
    else{
        alert("Please fill in all fields.")
    }
})

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);

    if (index > -1) {
        myLibrary.splice(index, 1);
    }

    displayMyLibrary();
}