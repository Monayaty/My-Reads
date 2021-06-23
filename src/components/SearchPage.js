// Imports
import React, { Component } from 'react';
import { search } from '../BooksAPI'
// SearchPage Class
class SearchPage extends Component {
    state = {
      results : []
    }
    onSearch = (e) => {
    // console.log(e.target.value)
    if (e.target.value == "")
    {
        this.setState({ results: [] })
    }
    else 
    {
      search(e.target.value).then((res)=>{
      // console.log(res)
      if (res.error)
      {
        this.setState({ results:[]})
      }
      else
      {
        this.setState({ results : res })
      }
    })
    } 
  } 
     render(){

        return(
             //search
          <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={() => this.props.showSearchPage(false)}>Close</button>
            <div className="search-books-input-wrapper">
              
              <input onChange={ this.onSearch } type="text" placeholder="Search by title or author"/>
              
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.results.map((result) => (
                  <li key={ result.id }>
                        <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${result.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title">{ result.title }</div>
                        <div className="book-authors">{ result.authors }</div>
                    </div>
                </li>
                ))
              }
            </ol>
          </div>
        </div>
        )
    }
  }
// Export SearchPage Class
export default SearchPage;