// Imports
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./Styles/App.css";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

// Main BooksApp Class
class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
