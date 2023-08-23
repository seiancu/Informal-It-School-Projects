import { Book } from "./book.js";

export class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  set newName(newName) {
    this.name = newName;
  }

  get newName() {
    return `${this.name}`;
  }

  addBook = (book) => {
    this.books = [...this.books, book];
  };

  removeBook = (ISBN) => {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
    console.log(this.books);
  };

  findBooksByAuthor = (author) => {
    let bookByAuthor = this.books.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );
    console.log(bookByAuthor);
  };

  listBooks = () => {
    this.books.forEach((book) => console.log(book));
  };

  getTotalBooks = () => {
    let totalBooks = 0;
    this.books.forEach((book) => (totalBooks += 1));
    console.log(totalBooks);
  };

  getBooksByAuthor = (author) => {
    let bookByAuthor = this.books.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase()
    );
    console.log(bookByAuthor);
  };

  getBooksWithTitleContaining = (keyword) => {
    let booksTitleContaing = this.books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log(booksTitleContaing);
  };

  getUniqueAuthors = () => {
    let uniqueAuthors = this.books.filter(
      (book, _, arr) => arr.filter((b) => b.author === book.author).length === 1
    );

    console.log(uniqueAuthors);
  };

  getTotalBooksByAuthor = (author) => {
    let bookAuthorCount = this.books.reduce((map, book) => {
      map.set(book.author, (map.get(book.author) || 0) + 1);
      return map;
    }, new Map());
    console.log(bookAuthorCount);
  };

  hasAnyBooksByAuthor = (author) => {
    let anyBooksByAuthor = this.books.some((book) => {
      return book.author === author;
    });
    console.log(anyBooksByAuthor);
  };

  hasAllBooksByAuthor = (author) => {
    let anyBooksByAuthor = this.books.every((book) => {
      return book.author === author;
    });
    console.log(anyBooksByAuthor);
  };

  getBookTitle = () => {
    let bookTitles = this.books.map((book) => {
      return book.title;
    });
    console.log(bookTitles);
  };
}
