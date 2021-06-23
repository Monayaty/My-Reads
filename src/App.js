// Imports
import React, { Component } from 'react'
import { Route } from "react-router-dom";
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

  // Update Search Function
  updateSearchState = state =>
  {
    console.log("error", this)
    this.setState({
      showSearchPage: state
    })
  }

  render() {
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
           <AllShelves />

           {/* Search Button Component */}
           <Button showSearchPage={this.updateSearchState}/>

          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
