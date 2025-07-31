import React, { useState } from 'react';
import './SignIn.css';

const SignInPage = () => {
  const[input,setInput]=useState({
    email:'',
    password:''
  });

  const handleChange=(e)=>{
    setInput({
      ...input,[e.target.name]:e.target.value
    })
  };

  const loginSubmit=(e)=>{
    e.preventDefault(); 

    const storedData= JSON.parse(localStorage.getItem('userData'));
      
    if(storedData && storedData.email === input.email && storedData.password === input.password)
    {
      alert("Login successful")
      console.log("is working",input)
    }
    else{
      alert("Invalid email or password")
    }
  };

  return (
    <div className='Parent_container'>
      <header>
        <div className="topHeader">
          <div className="image_area">
            <img src="./images/logo.png" alt="Logo" />
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="sub_container">
            <div className="form_container">
              <h1 className="heading" style={{ color: "white" }}>Sign In</h1>
            </div>

            <form className='Form_class' onSubmit={loginSubmit}>
              <div className="email">
                <input type="email" name='email' placeholder='Email' value={input.email} onChange={handleChange}/>
              </div>

              <div className="password">
                <input type="password" name='password' placeholder='Password' value={input.password} onChange={handleChange}/>
              </div>

              <div className="button">
                <button type='submit'>Sign In</button>
              </div>

              <span className='or'> OR </span>

              <div className="signInCode">
                <button className="code_box">
                  <a href="">Use a sign-in code</a>
                </button>
              </div>

              <div className="forgotPswd">
                <span><a href="">Forgot password?</a></span>
              </div>

              <div className="tikbox">
                <input type="checkbox" />
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

      <footer>
        <div className="footer_container">
          <div className="footer_innerContainer">
            <div className="footer_child">
              <span className="footerText">Questions? Call 000-800-919-1743 (Toll-Free)</span>
              <ul className="footer_ul">
                <li className="footer_li"><a href="">FAQ</a></li>
                <li className="footer_li"><a href="">Help Centre</a></li>
                <li className="footer_li"><a href="">Terms of Use</a></li>
                <li className="footer_li"><a href="">Privacy</a></li>
                <li className="footer_li"><a href="">Cookie Preferences</a></li>
                <li className="footer_li"><a href="">Corporate Information</a></li>
              </ul>
              <div className="language_selector">
                <select className="btn_footer" aria-label="Select Language">
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;