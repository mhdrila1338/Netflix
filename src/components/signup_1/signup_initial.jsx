import React from 'react'
import './signup_initial.css'
const Signin_initial = () => {
  return (
   <div className="firts_page">
     <div id='signin_initial'>
        <header>
            <div className="Nav_container">
                <div className="image_area">
                    <a href=""><img src="./images/logo.png" alt="" /> </a>
                    <a href=""><button className='signIn_size'><b>Sign In </b></button></a>
                </div>
            </div>
        </header>
        <main>
          <div className='main_container'>
            <div className="main-sub_container">
              <div className="image_container">
                <img src="./images/laptop.png" alt="laptop_other_items_image" className='laptop'/>
              </div>
              <div className="text_area">
                <span>STEP 1 OF 4</span>
                <h1>Finish setting up your account</h1>
              </div>
              <div className="para_area">
                <span><p>
                 Netflix is personalised for you. Create a password to watch on any device at any time.
                 </p></span>
              </div>
              <div className="next_button">
                <button><a href="/2_page.jsx">Next</a></button>
              </div>
            </div>
          </div>
        </main>
    </div>
   </div>
  )
}

export default Signin_initial
