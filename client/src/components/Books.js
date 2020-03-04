import React, { Component } from 'react'
import Search from './Search'
import BookList from './BookList'
import request from 'superagent'
import { Container, Row, Col} from 'reactstrap';

export class Books extends Component {
    showBooks = () => {
        const book = this.props.result
    } 
    
    render() {
        return (
            <p>work</p>
        )
    }
}

export default Books


