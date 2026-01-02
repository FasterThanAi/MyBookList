// book class : repersent a book 
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
// ui task : handle ui task 
class UI{
    static displayBooks(){
        const storedBooks=[
            {
                title:'Book one',
                author:'Rishu',
                isbn:'45545'
            }
        ];
        const books=storedBooks;
        books.forEach((book)=>
            UI.addBookToList(book));
        }
        static addBookToList(book){ // function to create row in table
            const list=document.getElementById('book-list');
            const row=document.createElement('tr');
            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="# class="btn btn-danger bg-red-500">X</a></td>
            `;
            list.appendChild(row);
        }
        static clearFields(){
            document.querySelector('#title').value=''
            document.querySelector('#author').value=''
            document.querySelector('#isbn').value=''
        }
    }

// store class : handle storage 

// events: display book 

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// events : add book 

document.getElementById('book-form').addEventListener('submit',(e)=>{
    // get form value
    // prevent dafault action
    e.preventDefault();
    const title=document.querySelector('#title').value
    const author=document.querySelector('#author').value
    const isbn=document.querySelector('#isbn').value
    // intialise book 
    const book=new Book(title,author,isbn);

    // console.log(book);
    // add book to list

    UI.addBookToList(book)
    // clear field 
    UI.clearFields();
})


// events : remove book 

