// Imports
import React, { Component } from "react";
import { getAll, update } from "../BooksAPI";
import Book from "./Book";
// AllShelves Class
class AllShelves extends Component {
  state = {
    books: []
  }

  // Component did mount function
  componentDidMount() {
    getAll().then((books) => {
      this.setState({ books });
    });
  }
  // Update Search Function
  updateSearchState = (state) => {
    this.setState({
      showSearchPage: state,
    });
  };

  onUpdate = (book, e) => {
    const shelf = e.target.value;
    update(book, shelf).then((res) => {
      const slice = this.state.books.slice();
      const targetBook = slice.find((selectedbook) => {
        return book.id === selectedbook.id;
      });
      if (targetBook) {
        targetBook.shelf = shelf;
        this.setState({
          books: slice,
        });
      }
    });
  };

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
  
    const ShelfTitle = [
      {
        id: "currentlyReading",
        title: "Curretly Reading",
        books: currentlyReading,
      },
      { id: "wantToRead", title: "Want To Read", books: wantToRead },
      { id: "read", title: "Read", books: read },
    ];
  
    return (
      //AllShelves
      <div className="list-books-content">
        <div>
          {/* Shelf */}
          {ShelfTitle.map((shelf) => (
            <div className="bookshelf" key={shelf.id}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <Book onUpdate={this.onUpdate} myBooks={shelf.books} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
// Export AllShelves Class
export default AllShelves;
