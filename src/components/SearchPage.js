// Imports
import React, { Component } from "react";
import { getAll, search, update } from "../BooksAPI";
import { Link } from "react-router-dom";
// SearchPage Class
class SearchPage extends Component {
  state = {
    results: [],
    homeBooks: [],
  };

  componentDidMount() {
    getAll().then((books) => this.setState({ homeBooks: books }));
  }

  onUpdate = (book, e) => {
    const shelf = e.target.value;
    update(book, shelf).then((res) => {
      const slice = this.state.results.slice();
      const targetBook = slice.find((selectedbook) => {
        return book.id === selectedbook.id;
      });
      if (targetBook) {
        targetBook.shelf = shelf;
        this.setState({
          results: slice,
        });
      }
    });
  };

  onSearch = (e) => {
    if (e.target.value === "") return this.setState({ results: [] });

    search(e.target.value).then((res) => {
      if (res.error) {
        this.setState({ results: [] });
      } else {
        this.state.homeBooks.forEach((book) => {
          // add shelf property to result books
          const target = res.find((r_book) => r_book.id === book.id);
          if (target) target.shelf = book.shelf;
        });
        this.setState({ results: res });
      }
    });
  };
  render() {
    return (
      //search
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.onSearch}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((result) => (
              <li key={result.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url(${
                          result.imageLinks ? result.imageLinks.thumbnail : ""
                        })`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={result.shelf || "none"}
                        onChange={(e) => this.onUpdate(result, e)}
                      >
                        <option value="" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{result.title}</div>
                  <div className="book-authors">
                    {result.authors ? result.authors.join(", ") : ""}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
// Export SearchPage Class
export default SearchPage;
