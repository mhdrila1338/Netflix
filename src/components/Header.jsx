import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div id='header-section'>
     <header className='header'>
        <div className='container_main'>
            <div className="logo">
                <img src="./images/logo.png" alt="logo" />
            </div>

            <div className="content">
                <select name="" id="" className='dropdown'>
                  <option value="">English</option>
                  <option value="">हिन्दी</option>
                </select>
                <button className='btn'><Link to="/login">Sign In</Link></button>
            </div>
        </div>
    </header>
   </div>
  )
}

export default Header