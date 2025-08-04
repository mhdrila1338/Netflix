import React from 'react'
import Navbar_common from './Navbar-common'
import FooterCommon from './Footer-common'
import './3_page.css'

const SignupThirdPage = () => {
  return (
    <div id='ThirdPage'>
      <header>
        <Navbar_common />
      </header>
      <main className='mainThirdPage'>
        <div className="verifyContent">
            <div className="iconWrapper">
              <span className="iconCircle">🔒</span> {/* You can replace with an SVG or icon */}
            </div>
            <p className="step">STEP 2 OF 4</p>
            <h1 className="heading">Great, now let us verify your email</h1>
            <p className="description">
              Click the link we sent to <b>gfzgfdhxg@gmail.com</b> to verify.
            </p>
            <p className="subText">
              Verifying your email will improve account security and help you receive important Netflix communications.
            </p>
            <button className="skipButton">Skip</button>
        </div>
      </main>
      <footer>
        <FooterCommon />
      </footer>
    </div>
  )
}

export default SignupThirdPage
