import React from 'react'
import './2_page.css'
const Signup_first_page = () => {
  return (
     <div id='signupFirstPage'>
        <header>
            <div className="Nav_container">
                <div className="image_area">
                    <a href=""><img src="./images/logo.png" alt="" /> </a>
                    <a href=""><button className='signIn_size'><b>Sign In </b></button></a>
                </div>
            </div>
        </header>
        
        <main>
            <div className="parentContainer">
                <div className="subContainer">
                    <form action="" className='formContainer'>
                        <div className="textArea">
                            <span>STEP 1 OF 4</span>
                            <h1>Create a password to start your membership</h1>
                        </div>
                        <div className="inpurAreas">
                            <div>
                                <span className='SpanFontSize'>Just a few more steps and you're done!</span>
                            </div>
                            <span className='SpanFontSize'>We hate paperwork, too.</span>
                            <div className="inputField">
                               <ul className='inputUl'>
                                <li className='inputLi1'>
                                    <div className='inpBox1'>
                                        <label htmlFor="">Email</label>
                                        <div>
                                            <input type="email" />
                                        </div>
                                    </div>
                                </li>
                                <li className='inputLi2'>
                                    <div className="inpBox2">
                                        <input type="password" placeholder='Add a Password'/>
                                    </div>
                                </li>
                               </ul>
                            </div>
                        </div>

                         <div className="nextButton">
                            <button><a href="">Next</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <footer className="footerContainer">
           <div className="footerContent">
            <p>Questions? Call <a href="tel:0008009191743">000-800-919-1743</a></p>
       
            <ul className="footerLinks">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Centre</a></li>
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

export default Signup_first_page
