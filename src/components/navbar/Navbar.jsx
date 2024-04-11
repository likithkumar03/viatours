import React from 'react'
import logo from '../../assets/logo-1.svg.png'
import './Navbar.scss';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
             <img src={logo} alt="" />
             <input type="text" placeholder='Search destinations or activities' className='search'/>
        </div>
        <div className="navlinks">
          <div className="navmenu">
            <h3>Destination</h3>
            <h3>Activies</h3>
            <h3>USD</h3>
            <h3>Sign up</h3>

            <button className='btn-1'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
