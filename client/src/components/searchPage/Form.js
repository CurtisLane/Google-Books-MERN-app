import React from 'react'

function Form({handleInputChange, handleFormSubmit}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                <p><strong>Book Search</strong></p>
                <label>
                    <small>Book</small>
                    <input type='text' name="query" onChange={handleInputChange} autoComplete="off" />
                    <a className="button primary" href="/" onClick={handleFormSubmit}>Search</a>
                </label>                    
            </div>
        </div>
    )
}

export default Form