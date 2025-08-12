import React from 'react'
import Navbar_common from './Navbar-common'
import FooterCommon from './Footer-common'
import './6_page.css'

const SixthPageSignup = () => {
  return (
    <div id='sixPage'>
      <header>
        <Navbar_common />
      </header>

       <main className="payment-main">
        <div className="payment-container">
          <div className="lock-icon">
            🔒
          </div>
          <p className="step">STEP 4 OF 4</p>
          <h1 className="title">Choose how to pay</h1>
          <p className="subtext">Your payment is encrypted and you can change your payment method at anytime.</p>
          <p className="secure-text"><strong>Secure for peace of mind.</strong><br />Cancel easily online.</p>
    
          <div className="payment-options">
            <button className='pymt_button'>
                <div className="payment-option">
              <div className="label">Credit or Debit Card</div>
              <div className="icons">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" alt="Visa" />
                <img src="https://cdn-icons-png.flaticon.com/128/14082/14082959.png" alt="MasterCard" />
              </div>
            </div>
            </button>
    
            <button className='pymt_button'>
                <div className="payment-option">
              <div className="label">UPI AutoPay</div>
              <div className="icons">
                <img src="https://img.icons8.com/?size=96&id=5RcHTSNy4fbL&format=png" alt="BHIM" />
                <img src="https://img.icons8.com/?size=96&id=68067&format=png" alt="Paytm" />
                <img src="https://img.icons8.com/?size=96&id=OYtBxIlJwMGA&format=png" alt="PhonePe" />
                <img src="https://img.icons8.com/?size=160&id=BsiNqIHwKUq8&format=png" alt="GPay" />
              </div>
            </div>
            </button>
          </div>
    
          <p className="encryption-note">End-to-end encrypted 🔒</p>
        </div>
    </main>

      <footer>
        <FooterCommon />
      </footer>

    </div>
  )
}

export default SixthPageSignup
