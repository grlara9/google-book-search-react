import React, { Component } from 'react'
import Search from './Search'
export class Books extends Component {
    constructor(props){
        super(props)
        this.state ={
            books:[],
            search: ''
        }
        
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
                <Search search={this.handleSearch}/>
            </div>
        )
    }
}

export default Books


