console.log("we are back with project 2");
/* to do
 1. store all the data to the localStorage
 2.give delete option to delete the book from library
 3.add a scrollbar to view the book
*/

// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor

function Display() {

}

// add methods to display prototype

Display.prototype.add = function (book) {
    console.log("adding to UI from console");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}
    
    
Display.prototype.clear = function () {
    // first grab the form and then reset the form
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}
Display.prototype.validate = function (book) {

    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }

}
Display.prototype.show = function (messageType,displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${messageType}   alert-dismissible fade show" role="alert">
        <strong>Message:</strong> ${displayMessage} 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    setTimeout(function(){
        message.innerHTML="";
    }, 1500);
}


// add submit event listener to libraryform

let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryFormSubmit);
// addEventListener("event",function name()
//  {

//  }) ;

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("you have submitted library from");

    // default behaviour of submiting form is reloading the page.so 
    // if we use preventDefault(),it prevent the default behaviour.
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Author').value;
    // type have 3 options,friction,programmig,cooking.
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    // .checked shows us to which check box is checked
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    // aapne console ma nay uper UI webpage ma display krvu pade aathi display object
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('sucess','your book has been successfully added');

    }
    else {
        // show error
        display.show('error', 'sorry you can not add this book');
    }
   
}

