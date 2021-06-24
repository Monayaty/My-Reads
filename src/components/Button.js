// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
// Button Class
class Button extends Component {
  render() {
    return (
      // Search Button
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    );
  }
}
// Export Button Class
export default Button;
