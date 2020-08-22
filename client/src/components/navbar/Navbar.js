import React from 'react'
import './navbar.css'

function Navbar(){
    return (
        <div className="sticky">
            <nav className="top-bar" data-topbar role="navigation">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Google Books Search and Save</li>
                        <li><a href="/">Search</a></li>
                        <li><a href="/saved">Saved Books</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar