// Imports
import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './Styles/App.css'
import AllShelves from './components/AllShelves'
import Button from './components/Button'
import SearchPage from './components/SearchPage'
import Header from './components/Header'

// Main BooksApp Class
class BooksApp extends Component {
  state = {
    books : [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  // Component did mount function
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }
  // Update Search Function
  updateSearchState = state =>
  {
    this.setState({
      showSearchPage: state
    })
  }

  onUpdate = (book, e) => {
    // console.log(e.target.value,book)
    const shelf = e.target.value
    BooksAPI.update(book, shelf).then((res)=>{
      // console.log(res)
      const slice = this.state.books.slice()
      const targetBook = slice.find((selectedbook)=>{
        return book.id == selectedbook.id
      })
      targetBook.shelf = shelf
      this.setState({
        books : slice
      })
    })
  }
  render() {
   
    // let validBooks = false
    // const { books } = this. state
    // if(books.length > 0 && books !== undefined && books !== null)
    // {
    //   validBooks =  true
    // }
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          //SearchPage Component
         <SearchPage showSearchPage={this.updateSearchState}/>

        ) : (
          <div className="list-books">
            {/* Header Component */}
            <Header />

           {/* All 3 Shelves Component */}
          {
            this.state.books && this.state.books.length > 0 && 
            (<AllShelves onUpdate={ this.onUpdate } myBooks={ this.state.books }/>)
          }
           {/* Search Button Component */}
           <Button showSearchPage={this.updateSearchState}/>

          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
