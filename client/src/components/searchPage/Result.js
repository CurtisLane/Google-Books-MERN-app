import React from 'react'
import './style.css'

function Result({title, authors, description, image, link}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                {image ? <img src={image} alt={title} className="bookImg" /> : <p>No Image Available</p>}
                <p><strong>Title:</strong> {title}</p>
                {authors.length ? <p><strong>Authors:</strong> {authors.join(', ')}</p> : <p>No Authors Available</p>}
                {description ? <p><strong>Description:</strong> {description}</p> : <p>No Description Available</p>}
                {/* link and save buttons go here */}
            </div>
        </div>
    )
}

export default Result

// key={book.id}
// title={book.volumeInfo.title}
// authors={book.volumeInfo.authors}
// description={book.searchInfo.textSnippet}
// image={book.volumeInfo.imageLinks.thumbnail}
// link={book.volumeInfo.previewLink}