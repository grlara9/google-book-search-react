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
                   { 
                    book.map((books) => (
                       <BookList 
                            key={books.id}
                            image={books.volumeInfo.imageLinks.thumbnail}
                            title={books.volumeInfo.title}
                            author={books.volumeInfo.authors}
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


