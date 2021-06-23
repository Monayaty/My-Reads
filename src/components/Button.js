// Imports
import React, { Component } from 'react';
// Button Class
class Button extends Component{
    render(){
        return(
            // Search Button
            <div className="open-search">
                <button onClick={() => this.props.showSearchPage(true)}>
                    Add a book
                </button>
            </div>
        )
    }
}
// Export Button Class
export default Button;