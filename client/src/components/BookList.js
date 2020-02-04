import React from 'react'

export default function BookList() {
    return (
        <div className="List">
            {
                props.books.map((book) =>{
                    return <BookCard />
                })
            }
        </div>
    )
}
