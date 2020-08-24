import React from 'react'
import Result from './Result'

function Results({books}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                <p><strong>Saved Books</strong></p>
                {books.map(book => (
                    <Result 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    authors={book.authors ? book.authors : []}
                    description={book.description}
                    image={book.image ? book.image : ''}
                    link={book.link}
                    />
                ))}

            </div>
        </div>
    )
}

export default Results