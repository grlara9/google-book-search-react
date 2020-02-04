import React, { Component } from 'react'
import Search from './Search'
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
        console.log(data)
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
            </div>
        )
    }
}

export default Books


