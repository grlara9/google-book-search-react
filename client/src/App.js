import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Search from './components/Search'
import axios from "axios"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={

      books:[],
      searchField:''
    }
  }

  searchBook = (e) =>{
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
    .then((data) =>{
      console.log(data)
    })
    .then((promise) => {
      this.setState({ books: [...promise.data.items ]})
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
     
    </div>
      )
  
}
}
export default App;
