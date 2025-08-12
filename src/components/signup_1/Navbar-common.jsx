import React from 'react'
import './Navbar-coomon.css'
const Navbar_common = () => {
  return (
    <div id='navbarCommon'>
      <header>
            <div className="Nav_container">
                <div className="image_area">
                    <a href=""><img src="./images/logo.png" alt="" /> </a>
                    <a href=""><button className='signIn_size'><b>Sign In </b></button></a>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar_common
