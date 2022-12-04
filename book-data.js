let overlay = document.querySelector(".overlay");
let read_status_button = document.querySelector(".read_button_flip");
// Listen for when interacted
let overlay_close_button = document.querySelector(".overlay_close_button");
let add_Book_Button = document.querySelector(".add_book_button");

add_Book_Button.addEventListener("click", toggleBookOverlayButton);
overlay_close_button.addEventListener("click", toggleBookOverlayButton);

let library = [];

class bookMaker {
  constructor(title, author, pages, book_cover, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.book_cover = book_cover;
    this.read = read;
    this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
  }

  change_read = function () {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    }
    return this.read;
  };
}

function addBookToLibrary(title, author, pages, book_cover, read) {
  let book_Info = new bookMaker(title, author, pages, book_cover, read);
  library.push(book_Info);
}

// displays all books in library
function createCards() {
  removeCards();
  let counter = 0;
  for (const book of library) {
    //alert(`${book.title} ${book.author} ${book.pages} ${book.read}`);
    let card_Container = document.querySelector(".cards");
    let create_Book = document.createElement("div");

    create_Book.innerHTML = `
    <div class="img_container">
      <div class="more_info_container">
                
              <button data-list-index="${counter}" onclick="toggleDeleteButton(this)" class="more_info_button">
              <svg data-list-index="${counter}" class="up_arrow open" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
              </svg>
              <svg data-list-index="${counter}" class="down_arrow" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </button>
                
              <button data-list-index="${counter}" onclick="removeSpecificCard(this)" class="remove_card">Delete</button></div>
      <img class="book_cover" src="${book.book_cover}" alt="book cover"></div>
      <div class="book_title" title="${book.title}">${book.title}</div>  
      <div class="author"><p title="${
        book.author
      }" class="actual_author_name">${book.author}</p>
      <div class="book_metadata">
          <span title="${book.pages}" class="info_card_text">Pages ${
      book.pages
    }</span>
          <button data-list-index="${counter}" onclick="toggleReadStatus(this)" class="read_button_flip">
            <span class="info_card_text">${book.read ? "Read" : "Unread"}</span>
          </button>
      </div>
      <div class="svg_container"> 
      <svg class="info_card" style="" viewBox="0 0 24 24">
      <path fill="currentColor" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
       </svg></div> 
       </div>
    
    `;
    create_Book.setAttribute("class", "card");
    create_Book.setAttribute("data-list-index", `${counter}`);
    card_Container.append(create_Book);
    ++counter;

    // Close the dropdown menu if the user clicks outside of it
  }
}

// detect when person clicks on change read button add it to create card

// then call function to change

function toggleReadStatus(element) {
  // figure out index of book
  console.log("bruh?");
  console.log(element);
  let index = element.getAttribute("data-list-index");
  // change book value in library
  let status = library[`${index}`].change_read();
  // then change cards display read
  createCards();
}

function removeCards() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}

function removeSpecificCard(element) {
  let get_index = element.getAttribute("data-list-index");
  library.splice(get_index, 1);
  createCards();
}

function changeIcon(element) {
  let get_index = element.getAttribute(`data-list-index`);
  let up_arrow = document.querySelector(
    `.up_arrow[data-list-index="${get_index}"]`
  );
  let down_arrow = document.querySelector(
    `.down_arrow[data-list-index="${get_index}"]`
  );
  up_arrow.classList.toggle("open");
  down_arrow.classList.toggle("open");
}

function toggleBookOverlayButton() {
  overlay.classList.toggle("open");
}

function toggleDeleteButton(element) {
  console.log("jeb_");
  // check elements index
  let index = element.getAttribute("data-list-index");

  changeIcon(element);
  // then select the right delete button index and toggle
  let delete_button = document.querySelector(
    `.remove_card[data-list-index="${index}"]`
  );
  console.log(delete_button);
  delete_button.classList.toggle("open");
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
  let book_cover = document.querySelector(".book_cover_input").value;
  let book_read_or_not = document.querySelector(
    'input[name="read_or_not"]:checked'
  ).value;
  addBookToLibrary(
    book_title,
    book_author,
    book_pages,
    book_cover,
    book_read_or_not
  );
  createCards();
  resetFormValues();
  toggleBookOverlayButton();
}
addBookToLibrary(
  "The Illusion",
  "unkown?",
  1337,
  "https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2022/05/frontiers-human-neuroscience-expanding-hole-illusion.jpg?ssl=1",
  false
);
addBookToLibrary(
  "how to git gud",
  "Tyler Blevins",
  69,
  "https://m.media-amazon.com/images/I/41mlivt589L._AC_SY780_.jpg",
  false
);
//display book
createCards();
