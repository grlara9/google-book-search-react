import React from 'react'



export default function BookList(props) {

    //const {title, vodescription} = props.books
  const style ={
    backgroundColor: '#214365',
    color: 'white'
  }
  const size = {
    fontSize: '15px'
  }
    return( 
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
          <div className="card">
              <img src={props.image} alt="text" className="card-img-top" />
                <p className="card-text" style={size}>Title: {props.title}</p>
                <p className="card-text">Author: {props.author}</p>
                <p className="card-text">Published Date: {props.published}</p>
                <button type="button" className="btn btn-info" style={style}><a href={props.preview}>View</a></button>
          </div>
      </div>
            )
    
}
