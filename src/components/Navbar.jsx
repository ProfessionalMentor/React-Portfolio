import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    
    <div id="navbar">

        <div className="list">
            <ul>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/project" ><li>Project</li></Link>
                <Link to="/services" ><li>Services</li></Link>
                <Link to="/about" ><li>About</li></Link>
            </ul>
        </div>
        <div className="logo">
          <h1>Portfolio</h1>
        </div>

    </div>

    
    </>
  )
}

export default Navbar