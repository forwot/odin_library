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

class Library {
    #books = [];

    addBook(book){
        this.#books.push(book);
    }

    removeBook(id){
        const index = this.#books.findIndex(book => book.id === id);
        if (index > -1) {
            this.#books.splice(index, 1);
        }
    }

    get allbooks() {
        return this.#books;
    }
}

class LibraryUI{
    #libContainer;
    constructor(libContainer_selector){
        this.#libContainer = libContainer_selector;
    }
    
    displayBooks(lib){
        this.#libContainer.replaceChildren();
        
        for(let book of lib.allbooks){
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
                lib.removeBook(book.id);
                this.displayBooks(lib);
            })
    
            dltCell.appendChild(dltButton);
            statusCell.appendChild(statusButton);
    
            newRow.appendChild(bookTitle);
            newRow.appendChild(bookAuthor);
            newRow.appendChild(statusCell);
            newRow.appendChild(dltCell);
            
            this.#libContainer.appendChild(newRow);
        }
    }

    addButton(){

    }
}

const myLibrary = new Library();
const myUI = new LibraryUI(document.querySelector('.lib-container'));

// ADD button 
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputStat = document.querySelector('#stat');
const addButton = document.querySelector('.add-button');

addButton.addEventListener("click", () => {

    if( inputTitle.value.trim() !== "" && inputAuthor.value.trim() !== ""){
        const book = new Book(inputTitle.value, inputAuthor.value, inputStat.value)
        myLibrary.addBook(book);
        myUI.displayBooks(myLibrary);

        inputAuthor.value = "";
        inputTitle.value = "";
    }
    else{
        alert("Please fill in all fields.")
    }
})