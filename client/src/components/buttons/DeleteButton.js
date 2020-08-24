import React from 'react'
import './buttons.css'

function DeleteButton({id, handleDelete}){
    return (
        <button type='button' value={id} className="alert button" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteButton