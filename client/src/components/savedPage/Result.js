import React from 'react'
import './style.css'
import LinkButton from '../buttons/LinkButton'
import DeleteButton from '../buttons/DeleteButton'

function Result({id, title, authors, description, image, link}) {
    return (
        <div className="grid-x grid-margin-x searchFormCallout">
            <div className="callout primary cell small-10 small-offset-1">
                {image ? <img src={image} alt={title} className="bookImg" /> : <p>No Image Available</p>}
                <p><strong>Title:</strong> {title}</p>
                {authors.length ? <p><strong>Authors:</strong> {authors.join(', ')}</p> : <p>No Authors Available</p>}
                {description ? <p><strong>Description:</strong> {description}</p> : <p>No Description Available</p>}
                <span>
                    
                <LinkButton href={link} />
                <DeleteButton />
                </span>
            </div>
        </div>
    )
}

export default Result