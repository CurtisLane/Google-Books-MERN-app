import React from 'react'

function Form() {
    return (
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
    )
}

export default Form