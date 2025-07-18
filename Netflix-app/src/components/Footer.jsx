import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="main_container">
            <div className="contact">
                <span className='call_session'><a href="">Question? Call 000-800-919-1743</a></span>
            </div>
            <div className="links">
                <ul className='link_list'>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Speed Test</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                    <li><a href="">Legal Notices</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="">Ways to Watch</a></li>
                    <li><a href="">Corporate Information</a></li>
                    <li><a href="">Only on Netflix</a></li>
                    <li><a href="">Media Center</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <select name="" id="" className='btn_footer'>
                <option value=""><a href="">English</a></option>
                <option value=""><a href="">हिन्दी</a></option>
            </select>
            <div className='footer_text'>
            <p>Netflix India</p>
        </div>
        <div className='footer_text'>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="">Learn more.</a></p>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer
