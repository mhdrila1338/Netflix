import React, { useState } from 'react'
import './4_page.css'
import Navbar_common from './Navbar-common'
import FooterCommon from './Footer-common'
const SignupFourthPage = () => {
  return (
    <div id='fourthPage'>
      <header>
        <Navbar_common />
      </header>
      <main className='main_container'>
         <div className="choose-plan-container">
            <div className="checkmark-icon">✔</div>
            <p className="step-text">STEP 3 OF 4</p>
            <h1 className="choose-heading">Choose your plan.</h1>
      
            <ul className="features-list">
                <li> No commitments, cancel anytime.</li>
                <li> Everything on Netflix for one low price.</li>
                <li> No ads and no extra fees. Ever.</li>
            </ul> 

            <button className="next-button"><a href="./5_page.jsx">Next</a></button>
        </div>
      </main>
      <footer>
        <FooterCommon />
      </footer>
    </div>
  )
}

export default SignupFourthPage
