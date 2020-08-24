import React from 'react'
import './buttons.css'

function SaveButton({book, save}){
    return (
        <button type='button' className='success button' value={JSON.stringify(book)} onClick={save}>Save</button>
    )
}

export default SaveButton