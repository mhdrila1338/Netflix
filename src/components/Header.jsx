import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='container_main'>
            <div className="logo">
                <img src="./images/logo.png" alt="logo" />
            </div>

            <div className="content">
                <select name="" id="" className='dropdown'>
                  <option value=""><a href="">English</a></option>
                  <option value=""><a href="">हिन्दी</a></option>
                </select>
                <button className='btn'><a href="">Sign In</a></button>
            </div>
        </div>
    </header>
  )
}

export default Header