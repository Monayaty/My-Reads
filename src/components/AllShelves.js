// Imports
import React, { Component } from 'react';
import Book from './Book';
// AllShelves Class
const AllShelves= (props) => {
      const { myBooks } = props;
      const currentlyReading = myBooks.filter((book) => (
        book.shelf === "currentlyReading"
      ));
      const wantToRead = myBooks.filter((book) => (
        book.shelf === "wantToRead"
      ));
      const read = myBooks.filter((book) => (
        book.shelf === "read"
      ));

      const ShelfTitle = [
        {id:"currentlyReading", title:"Curretly Reading", books:currentlyReading},
        {id:"wantToRead", title:"Want To Read", books:wantToRead},
        {id:"read", title:"Read", books:read}
      ]
      console.log(props)

        return(
            //AllShelves
            <div className="list-books-content"> 
              <div>
                 {/* Shelf */}
                  {
                    ShelfTitle.map((shelf) => (
                      <div className="bookshelf" key={ shelf.id }>
                      <h2 className="bookshelf-title">{ shelf.title }</h2>
                      <div className="bookshelf-books">
                        <Book onUpdate={ props.onUpdate } myBooks={shelf.books}/>
                      </div>
                    </div>
                    ))
                  } 
              </div>
            </div>
        )  
}
// Export AllShelves Class
export default AllShelves;