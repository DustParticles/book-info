let library = [
  { title: "ninja", author: "tyler blevins", pages: 69, read: false },
  {
    title: "What if the world was flat?",
    author: "flat man",
    pages: 100,
    read: false,
  },
];

function bookMaker(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  let book_Info = new bookMaker(title, author, pages, read);
  library.push(book_Info);
}

// displays all books in library
function createCards() {
  removeCards();
  for (const book of library) {
    //alert(`${book.title} ${book.author} ${book.pages} ${book.read}`);
    let card_Container = document.querySelector(".cards");
    let create_Book = document.createElement("div");

    create_Book.innerHTML = `
    <div class="img_container"><img class="book_cover" src="https://m.media-amazon.com/images/I/41mlivt589L._AC_SY780_.jpg" alt="book cover"></div><div class="book_title" title="${book.title}">${book.title}</div>  
    <div class="author"><p class="actual_author_name">${book.author}</p>
    <div class="book_metadata"><span>pages ${book.pages}</span>  <span>read ${book.read}</span></div>
    <svg class="info_card" style="" viewBox="0 0 24 24">
    <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
     </svg></div> 
    
    `;
    create_Book.setAttribute("class", "card");
    card_Container.append(create_Book);
  }
}

function removeCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}

let overlay = document.querySelector(".overlay");
let overlay_close_button = document.querySelector(".overlay_close_button");
let add_Book_Button = document.querySelector(".add_book_button");
add_Book_Button.addEventListener("click", toggleBookOverlayButton);
overlay_close_button.addEventListener("click", toggleBookOverlayButton);

function toggleBookOverlayButton() {
  overlay.classList.toggle("open");
}

function resetFormValues() {
  document.querySelector(".add_book_form").reset();
}

let submit_button = document.querySelector(".submit_button");
submit_button.addEventListener("click", addBook);

//add book to library

function addBook() {
  let book_title = document.querySelector(".book_title_input").value;
  let book_author = document.querySelector(".book_author_input").value;
  let book_pages = document.querySelector(".book_pages_input").value;
  //let book_cover = document.querySelector(".book_cover_input").value;
  let book_read_or_not = document.querySelector(
    'input[name="read_or_not"]:checked'
  ).value;

  addBookToLibrary(book_title, book_author, book_pages, book_read_or_not);
  createCards();
  resetFormValues();
  toggleBookOverlayButton();
}

//display book
createCards();
