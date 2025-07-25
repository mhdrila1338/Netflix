import React from 'react'
import "./SignIn.css"
const SignInPage = () => {
  return (
    <div>
      <header>
        <div className="topHeader">
            <div className="image_area">
                <img src="./images/logo.png" alt="" />
            </div>
        </div>
      </header>

      <main>

        <div className="container">
            <div className="sub_container">
                <div className="form_container">
                   <h1 className="heading" style={{color:"white"}}>Sign In</h1>
               </div>

               <form action="" className='Form_class'>
                   <div className="email">
                       <input type="email" placeholder='Email or mobile number'/>
                   </div>

                   <div className="password">
                       <input type="password" placeholder='Password'/>
                   </div>

                   <div className="button">
                    <button><a href="">Sign In</a></button>
                   </div>

                   <span className='or'> OR </span>

                   <div className="signInCode">
                    <button className="code_box">
                        Use a sign-in code
                    </button>
                   </div>

                   <div className="forgotPswd">
                    <span><a href="">Forgot password?</a></span>
                   </div>
                   
                   <div className="tikbox">
                    <input type="checkbox"/>
                    <label htmlFor="">Remember me</label>
                   </div>

                   <div className="newNetflix">
                    <span className="newInner">
                        New to Netflix?
                        <a href="">Sign up Now</a>
                    </span>                   
                   </div>

                   <div className="text">
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                   </div>
               </form>
           </div>
        </div>
      </main>
    </div>
  )
}

export default SignInPage
