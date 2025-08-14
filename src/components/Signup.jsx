import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Submit fired!", userData); // Debug log

    // Basic validation
    if (!userData.username || !userData.email || !userData.password) {
      alert("Please fill in all fields");
      return;
    }

    // Save user data locally
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log("Form submitted successfully", userData);

    alert("Congratulations! Your account has been created.");
    
    // Navigate to AfterLoginHome
    navigate('/AfterLoginHome');
  };

  return (
    <div id="signin">
      <div className="Parent_container">
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
                <h1 className="heading" style={{ color: "white" }}>Sign Up</h1>
              </div>

              <form className="Form_class" onSubmit={submit}>
                <div className="email">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="password">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="button">
                  <button type="submit">Register</button>
                </div>

                <div className="tikbox">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>

                <div className="text">
                  <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
