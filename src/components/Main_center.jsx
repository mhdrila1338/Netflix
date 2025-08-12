import React, { useState } from 'react';
import './main_center.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main_center = () => {

  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/signin_initial', { state: { email } })

  }

  return (
   <div id='main-center'>
     <main className="main-container">
      <div className="content-container">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel anytime.</p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className="email" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" onChange={(e)=> setEmail(e.target.value)} value={email}/>
          <button className='sub_btn' type='submit' disabled={email ? false : true}>Get started</button>
        </form>
      </div>
    </main>
   </div>
  );
};

export default Main_center;
