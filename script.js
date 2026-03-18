const myLibrary = [];
const libContainer = document.querySelector('.lib-container');

function Book(title, author, stat) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.stat = stat;
}

Book.prototype.toggleRead = function(status){
    this.stat = status;
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

        // statusButton.classList.add('status-button');     both not in use atm
        // dltButton.classList.add('delete-button');        

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;

        statusButton.textContent = book.stat;
        dltButton.textContent = "DELETE";
        dltButton.dataset.id = book.id;

        statusButton.addEventListener("click", () => {
            if(book.stat === "Read"){
                book.toggleRead("Not read")
            }
            else{
                book.toggleRead("Read");
            }
            statusButton.textContent = book.stat;
        })

        dltButton.addEventListener("click", () => {
            const bookId = dltButton.dataset.id;
            removeBook(bookId);
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



function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);

    if (index > -1) {
        myLibrary.splice(index, 1);
    }

    displayMyLibrary();
}