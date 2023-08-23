import { Book } from "./book.js";
import { Magazine } from "./magazine.js";
import { Library } from "./library.js";

// Book One initialisation
const bookOne = new Book();

bookOne.title = "Book One Title";

bookOne.author = "Book One Author";

bookOne.ISBN = 123456789;

//Book Two initialization
const bookTwo = new Book();

bookTwo.title = "Book Two Title";
bookTwo.author = "Book Two Author";
bookTwo.ISBN = 456789123;

// Book Three Initialization
const bookThree = new Book();

bookThree.title = "The Great Gatsby";
bookThree.author = "F. Scott Fitzgerald";
bookThree.ISBN = 9780743273565;

// Book Four Initialization
const bookFour = new Book();

bookFour.title = "Tender Is the Night";
bookFour.author = "F. Scott Fitzgerald";
bookFour.ISBN = 9780684801544;

// Book Five Initialization
const BookFive = new Book();

BookFive.title = "This Side of Paradise";
BookFive.author = "F. Scott Fitzgerald";
BookFive.ISBN = 9781509826622;

// Book Six Initialization
const BookSix = new Book();

BookSix.title = "The Girl with the Dragon Tattoo";
BookSix.author = "Stieg Larsson";
BookSix.ISBN = 9780307949486;

// Book Seven Initialization
const bookSeven = new Book();

bookSeven.title = "The Catcher in the Rye";
bookSeven.author = "J.D. Salinger";
bookSeven.ISBN = 9780316769488;

// Magazine One inistialisation
const magazineOne = new Magazine();

magazineOne.title = "Magazine One Title";

magazineOne.author = "Magazine One Author";

magazineOne.ISBN = 987654321;

magazineOne.issueNumber = 10;

// Magazine Two initialization
const magazineTwo = new Magazine();

magazineTwo.title = "Magazine Two Title";
magazineTwo.author = "Magazine Two Author";
magazineTwo.ISBN = 987321654;
magazineTwo.issueNumber = 3;

// Library initialization
const libraryOne = new Library();

libraryOne.name = "Library One";

// Adding Book One to Library One
libraryOne.addBook(bookOne);
console.log(libraryOne);

// Adding Book Two to Library One
libraryOne.addBook(bookTwo);
console.log(libraryOne);

// Adding Book Three to Library One
libraryOne.addBook(bookThree);

// Adding Book Four to Library One
libraryOne.addBook(bookFour);

// Adding Book Five to Library One
libraryOne.addBook(BookFive);

// Adding Book Six to Library One
libraryOne.addBook(BookSix);

// Adding Book Seven to Library One
libraryOne.addBook(bookSeven);

// Adding Magazine One to the Library One
libraryOne.addBook(magazineOne);
console.log(libraryOne);

// Adding Magazine Two to Library One
libraryOne.addBook(magazineTwo);

// Removing Book method using ISBN
libraryOne.removeBook(987654321);
console.log(libraryOne);

// Find books by author method
libraryOne.findBooksByAuthor("F. Scott Fitzgerald");

// List all the books in  the library method
libraryOne.listBooks();

// Get the numbers of books in the library method
libraryOne.getTotalBooks();

// Get books by author method
libraryOne.getBooksByAuthor("F. Scott Fitzgerald");

// Get books by keyword cointained in the title method
libraryOne.getBooksWithTitleContaining("The");

// Get the books wrote by unique authors method
libraryOne.getUniqueAuthors();

// List all the books wrote by an author method
libraryOne.getTotalBooksByAuthor("F. Scott Fitzgerald");

// Are any books in the library by a specific author method
libraryOne.hasAnyBooksByAuthor("Book Two Author");

// Are all the books in the library by a specific author method
libraryOne.hasAllBooksByAuthor("Book Two Author");

// List all the titles from the library method
libraryOne.getBookTitle();
