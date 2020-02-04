import React from 'react'
import BookCard from './BookCard'

export default function BookList(props) {
    return(

        <div className="List">
            {
                props.books.map((book, k) =>{
                    
                    return <BookCard image={book.volumeInfo.imageLinks.thumbnail} 
                    key={k}
                    title={book.volumeInfo.title} author={book.volumeInfo.authors} 
                    published={book.volumeInfo.publishedDate}/>
                })
            }
        </div>
            )
    
}
