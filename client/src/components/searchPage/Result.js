import React from 'react'
import ReadMoreAndLess from 'react-read-more-less'
import './style.css'
import LinkButton from '../buttons/LinkButton'
import SaveButton from '../buttons/SaveButton'

function Result({title, authors, description, image, link, save}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                {image ? <img src={image} alt={title} className="bookImg" /> : <p>No Image Available</p>}
                <p><strong>Title:</strong> {title}</p>
                {authors.length ? <p><strong>Authors:</strong> {authors.join(', ')}</p> : <p>No Authors Available</p>}
                {
                    description ? 
                    <p><strong>Description:</strong>  
                    <ReadMoreAndLess
                        ref={ReadMoreAndLess.ReadMore}
                        className='read-more-content'
                        charLimit={250}
                        readMoreText='Read more'
                        readLessText='Read less'
                    >
                        {description}
                    </ReadMoreAndLess>
                    </p> :
                    <p>No Description Available</p>
                }                <span>
                    
                <LinkButton href={link} />
                <SaveButton book={{title: title, authors:authors, description:description, image:image, link:link}} save={save} />
                </span>
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