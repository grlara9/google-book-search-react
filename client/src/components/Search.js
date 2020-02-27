import React, { Component } from 'react'

class Search extends Component {

render(){

    return (
        <div>
            <form>
                <input type="text" placeholder="Search for Book..."/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
}
export default Search;