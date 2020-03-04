import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Search from './components/Search'
import axios from "axios"
import Books from './components/Books'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={

      books: [],
      searchField:''
    }
  }

  searchBook = (e) =>{
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
    .then((data) =>{
      console.log(data)
      this.setState({ books: [...data.data.items ] })
    })
    
    .catch((error) => {
      console.log(error)
    })
  }

  handleSearch = (e) => {
   
    this.setState({ searchField: e.target.value})
  }
  render() {
    return (

      <div className="App container">
      <Jumbotron>
        <h1 className="lead text-center font-weight-bold mb-3">Google Search Book App</h1>
          <Search book={this.searchBook} search={this.handleSearch}/>
        </Jumbotron>
        <Books result={this.state.books}/>
     
    </div>
      )
  
}
}
export default App;
