import React from 'react'
import './style.css'

function Search() {
    return (
        <>
            <div className="grid-x grid-margin-x searchTopCallout">
                <div className="callout primary cell small-10 small-offset-1">
                    <h5>(React) Google Books Search</h5>
                    <p>Search for and Save Books of Interest</p>
                </div>
            </div>
            <div className="grid-x grid-margin-x searchFormCallout">
                <div className="callout primary cell small-10 small-offset-1">
                    <p>Book Search</p>
                    <label>
                        <small>Book</small>
                        <input type='text' />
                        <a class="button primary" href="/">Search</a>
                    </label>                    
                </div>
            </div>
            
        </>
    )
}

export default Search