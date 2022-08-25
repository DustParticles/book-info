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
  library.push(bookInfo);
}

function createCard() {
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
