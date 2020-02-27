import React, { Component } from 'react'

class Search extends Component {

    
render(){

    return (
        <div>
            <form>
                <div class="row">

                <div className="form-group col-md-8">

                <input type="text" className="form-control form-control-lg" placeholder="Search for Book..."/>
                </div>
                <div className="form-group col-md-4">

                <button type="submit" className="btn btn-primary btn-lg btn-block">Search..</button>
                </div>
                </div>
            </form>
        </div>
    )
}
}
export default Search;