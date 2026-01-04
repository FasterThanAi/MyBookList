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
            const list=document.getElementById('book-list'); // find table 
            const row=document.createElement('tr'); // create new table 
            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger bg-red-500 delete">X</a></td>
            `;
            list.appendChild(row); // push the new row in table 
        }
        static deleteBook(ele){
            // make sure ele has delete class 
            if(ele.classList.contains('delete')){
                // its parrent should be removed i.e whole row 
                ele.parentElement.parentElement.remove();
            }
        }
        // 
        // <div class="alert alert-danger"></div>
        static showAlert(message , className){
            const div=document.createElement('div')
            if(className === 'danger') {
            div.className = `bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4`;
        } else {
            div.className = `bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4`;
        }
            div.appendChild(document.createTextNode(message));
            // placeholder to display
            const container=document.querySelector('.container') 
            const form=document.querySelector('#book-form');
            // We want to put the alert INSIDE the white card, just above the form
        // The parent of the form is the white card div
            form.parentElement.insertBefore(div, form);
            // 3 sec alert vanish 
            setTimeout(() => document.querySelector('.bg-red-100, .bg-green-100').remove()
                
            , 3000);
        }
        static clearFields(){
            document.querySelector('#title').value=''
            document.querySelector('#author').value=''
            document.querySelector('#isbn').value=''
        }
    }

// store class : handle storage 

// events: display book 

document.addEventListener('DOMContentLoaded', UI.displayBooks); // as the page load 
// it run ui.displayBooks 

// events : add book 

document.getElementById('book-form').addEventListener('submit',(e)=>{
    // get form value
    // prevent dafault action
    e.preventDefault();
    const title=document.querySelector('#title').value
    const author=document.querySelector('#author').value
    const isbn=document.querySelector('#isbn').value

    // validate 
    if(title==='' || author===''|| isbn===''){
        UI.showAlert('Please Fill all the column ','danger')
    }
    else{
        const book=new Book(title,author,isbn);

    // console.log(book);
    // add book to list

    UI.addBookToList(book)

    // show book success fully added validation 
    UI.showAlert('Book Added Successfully','success')
    // clear field 

    UI.clearFields();
    }
    // intialise book 
    
})


// events : remove book 
    // targetting certain element 
document.querySelector('#book-list').addEventListener('click',(e)=>{
    // console.log(e.target);
    UI.deleteBook(e.target)
    
    //show message of book removed 
    UI.showAlert('Book Deleted Successfully','success')
})

