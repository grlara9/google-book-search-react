import React, { Component } from 'react'
import BookList from './BookList'


export class Books extends Component {
    showBooks = () => {
        const book = this.props.result;

        if(book.length === 0) return null;

        console.log(book)

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                   { book.map(b => (
                       <BookList 
                       
                       />
                   ))}
                </div>
            </React.Fragment>
        )
    } 
    
    render() {
        return (
            <React.Fragment>
                { this.showBooks()}
            </React.Fragment>
        )
    }
}

export default Books


