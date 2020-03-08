import React from 'react'



export default function BookList(props) {

    //const {title, vodescription} = props.books

    return(
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
              <img src={props.image} alt="text" className="card-img-top" />
                <p className="card-text">Title: {props.title}</p>
                <p className="card-text">Author: {props.author}</p>
          </div>
      </div>
            )
    
}
