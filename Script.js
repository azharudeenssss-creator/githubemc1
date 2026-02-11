// Elements
const addBtn = document.getElementById("add-pop-button");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const cancelBtn = document.getElementById("cancel-pop");
const form = document.getElementById("book-form");

const titleInput = document.getElementById("book-title-input");
const authorInput = document.getElementById("book-author-input");
const descInput = document.getElementById("book-description-input");

const bookList = document.getElementById("book-list");
const searchInput = document.getElementById("search");

let editBook = null;

// ---------------- OPEN POPUP ----------------
addBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
    form.reset();
    editBook = null;
    edit = clear ();
    document.getElementById("popup-title").innerText = "Add Book";
    document.getElementById("submit-btn").innerText = "ADD";
});



// ---------------- CLOSE POPUP ----------------
function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

cancelBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

// ---------------- ADD / EDIT BOOK ----------------
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const desc = descInput.value;
    

    if (editBook) {
        editBook.querySelector("h2").innerText = title;
        editBook.querySelector("p").innerText = desc;
        
    } else {
        const book = document.createElement("article");
        book.classList.add("book-container");

        book.innerHTML = `
           <img src ="shopping (1).webp">
            <h2>${title}</h2>
            <p>${desc}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        bookList.appendChild(book);
    }

    closePopup();
});

// ---------------- DELETE & EDIT ----------------
bookList.addEventListener("click", function (e) {

    // Delete
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

    // Edit
    if (e.target.classList.contains("edit-btn")) {
        editBook = e.target.parentElement;

        titleInput.value = editBook.querySelector("h2").innerText;
        descInput.value = editBook.querySelector("p").innerText;
       

        popup.style.display = "block";
        overlay.style.display = "block";

        document.getElementById("popup-title").innerText = "Edit Book";
        document.getElementById("submit-btn").innerText = "UPDATE";
      
    }
});

// ---------------- SEARCH ----------------
searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const books = document.querySelectorAll(".book-container");

    books.forEach(book => {
        const title = book.querySelector("h2").innerText.toLowerCase();

        if (title.includes(value)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});
