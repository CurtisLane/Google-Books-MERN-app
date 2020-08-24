import React from 'react'
import './buttons.css'

function LinkButton({href}){
    return (
        <a className='button' href={href}>Visit Page</a>
    )
}

export default LinkButton