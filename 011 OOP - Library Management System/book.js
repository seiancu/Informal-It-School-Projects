export class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }

  get newTitle() {
    return this.title;
  }

  set newTitle(newTitle) {
    this.title = newTitle;
  }

  get newAuthor() {
    return this.author;
  }

  set newAuthor(newAuthor) {
    this.author = newAuthor;
  }

  get newISBN() {
    return this.ISBN;
  }

  set newISBN(newISBN) {
    this.ISBN = newISBN;
  }
}
