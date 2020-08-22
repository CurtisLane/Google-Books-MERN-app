import React from 'react'
import Result from './Result'

function Results({books}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                <p><strong>Results</strong></p>
                {books.map(book => (
                    <Result 
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.previewLink}
                    />
                ))}

            </div>
        </div>
    )
}

export default Results