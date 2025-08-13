import React from 'react'
import './Footer-common.css'
const FooterCommon = () => {
  return (
    <div id='footerCommon'>
      <footer className="footerContainer">
           <div className="footerContent">
            <p>Questions? Call <a href="tel:0008009191743">000-800-919-1743</a></p>
       
            <ul className="footerLinks">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Centre</ a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookie Preferences</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
       
            <div className="languageSelect">
              <select>
                <option value="en">🌐 English</option>
                <option value="hi">हिन्दी</option>
              </select>
            </div>
           </div>
        </footer>
    </div>
  )
}

export default FooterCommon
