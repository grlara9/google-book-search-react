import React from 'react'

export default function Search(props) {
    return (
        <div>
            <form>
                <input onChange={props.search} type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
