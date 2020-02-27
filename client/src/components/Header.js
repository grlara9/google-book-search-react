import React, { Component } from 'react'
import Search from './Search'
import BookList from './BookList'
import request from 'superagent'
import { Jumbotron, Button } from 'reactstrap';

export class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            
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
    render(){

        return (
            <div>

            <Jumbotron>
            <h1 className="display-3">Google Search Book App</h1>
            <hr className="my-2" />
            <Search searchpromise={this.searchBook} search={this.handleSearch} />
        </Jumbotron>

            </div>
        )
    }
}

export default Header