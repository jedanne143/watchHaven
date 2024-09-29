import React from 'react'
import { useState} from 'react';
import {NavLink} from 'react-router-dom'
import Brand from './Brand'
import "./Navbar.css"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLink = () => {
    if (menuOpen){
      setMenuOpen(false)
    }
  }
  return (

    <nav className='navbar'>  
        <Brand/>
        <div className="hamburgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={menuOpen ? "open" : ""}>
          <NavLink className="navItem"  to="/" onClick= {handleLink}>Home</NavLink> 
          <NavLink className="navItem" to="/movies" onClick= {handleLink}>Movies &#x2315;  </NavLink>
          <NavLink className="navItem" to="/series" onClick= {handleLink}>TV Series &#x2315;</NavLink>
          <NavLink className="navItem" to="/comingsoon" onClick= {handleLink}>Coming Soon</NavLink>
        </div>
    </nav> 
  )
}

export default Navbar

