import React from 'react';
import './main_center.css';

const Main_center = () => {
  return (
    <main className="main-container">
      <div className="content-container">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel anytime.</p>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="email">
          <input type="text" placeholder="Email address" className='inp'/>
          <button className='sub_btn'><a href="">Get Started</a></button>
        </div>
      </div>
    </main>
  );
};

export default Main_center;
