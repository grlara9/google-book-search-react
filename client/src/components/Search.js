import React from 'react'

export default function Search(props) {
    return (
        <div>
            <form onSubmit={props.searchpromise} action="">
                <input onChange={props.search} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
