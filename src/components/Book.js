// Imports
import React from "react";
//Book Class
const Book = (props) => {
  const { myBooks } = props;

  return (
    <ol className="books-grid">
      {myBooks.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 192,
                  backgroundImage: `url(${
                    book.imageLinks ? book.imageLinks.thumbnail : ""
                  })`,
                }}
              />
              <div className="book-shelf-changer">
                <select
                  onChange={(e) => props.onUpdate(book, e)}
                  value={book.shelf || "none"}
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      ))}
    </ol>
  );
};
// Extend Book Class
export default Book;
