import { Book } from "./book.js";
export class Magazine extends Book {
  constructor(title, author, ISBN, issueNumber) {
    super(title, author, ISBN);
    this.issueNumber = issueNumber;
  }

  set newIssueNumber(newIssueNumber) {
    this.issueNumber = newIssueNumber;
  }

  get newIssueNumber() {
    return `${this._issueNumber}`;
  }
}
