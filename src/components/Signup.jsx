import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigater=useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handlechange=(e)=>{
    setUserData({
      ...userData,[e.target.name]: e.target.value
    })
  }

  const submit=(e)=>{
    e.preventDefault();
    if(!userData.email&&!userData.password){
      alert("Enter a email and password")
      console("its working")
    }
    else{
      localStorage.setItem('userData',JSON.stringify(userData))
      console.log("form submitted", userData)
      alert("Congratulations . Your new account has been created successfully")
      navigater('/AfterLoginHome')
    }
    
  }
  
  return (
    <div id='signin'>
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

            <form className='Form_class' onSubmit={submit}>
              <div className="email">
                <input type="text" name='username' placeholder='Username' value={userData.username} onChange={handlechange}/>
              </div>

              <div className="email">
                <input type="email" name='email' placeholder='Email' value={userData.email} onChange={handlechange}/>
              </div>

              <div className="password">
                <input type="password" name='password' placeholder='Password' value={userData.password} onChange={handlechange}/>
              </div>

              <div className="button">
                <button type='submit'>Register</button>
              </div>

              <div className="tikbox">
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
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
    </div>
  );
};

export default SignUp;