import React, { Component } from 'react'
import Search from './Search'
import BookList from './BookList'
import request from 'superagent'
import { Container, Row, Col} from 'reactstrap';

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
        this.setState({ search: e.target.value })
    }
    render() {
        return (
            <div>
                <Search searchpromise={this.searchBook} search={this.handleSearch}/>
                <Container>
                    <Row>
                        <Col sm={3}>
                <BookList books={this.state.books}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Books


