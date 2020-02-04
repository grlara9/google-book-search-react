import React, { Component } from 'react'
import Search from './Search'
import BookList from './BookList'
import request from 'superagent'

export class Books extends Component {
    constructor(props){
        super(props)
        this.state ={
            books:[],
            search: ''
        }
        
    }
    searchBook = (e) =>{
    e.preventDefault();
    request 
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.state.search})
    .then((data)=> {
        this.setState({ books: [...data.body.items] })
    })        
    }
    handleSearch =(e) =>{
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Search searchpromise={this.searchBook} search={this.handleSearch}/>
                <BookList books={this.state.books}/>
            </div>
        )
    }
}

export default Books


