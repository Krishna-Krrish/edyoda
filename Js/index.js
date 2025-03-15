// Define variables
let libraryName = "My Awesome Library";
let isOpen = true;

// Data types
let bookTitle = "The Great Gatsby";
let author = "F. Scott Fitzgerald";
let publishedYear = 1925;
let isAvailable = true;

// String concatenation
let bookInfo = bookTitle + " by " + author + " (" + publishedYear + ")";

// Object representing a book
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publishedYear: 1960,
  isAvailable: true,
};

// Operators
let totalBooks = 5;
let booksCheckedOut = 2;
let booksAvailable = totalBooks - booksCheckedOut;

// Display information in the console
console.log("Welcome to " + libraryName);

if (isOpen) {
  console.log("The library is open!");
} else {
  console.log("Sorry, the library is closed.");
}

console.log("Book information: " + bookInfo);

console.log("Books available: " + booksAvailable);
