import React from 'react'
import './2_page.css'
import FooterCommon from './Footer-common'
import Navbar_common from './Navbar-common'


const Signup_first_page = () => {
  return (
     <div id='signupFirstPage'>
        <Navbar_common />
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
                            <button><a href="./3_page.jsx">Next</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <FooterCommon />

     </div>
  )
}

export default Signup_first_page
