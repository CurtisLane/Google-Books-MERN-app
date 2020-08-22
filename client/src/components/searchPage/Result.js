import React from 'react'

function Result({title, authors, description, image, link}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Authors:</strong> {authors.join(', ')}</p>
                <p><strong>Description:</strong> {description}</p>
                <img src={image} alt={title} />
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