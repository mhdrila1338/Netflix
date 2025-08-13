import React from 'react'
import './5_page.css'
import Navbar_common from './Navbar-common'
import FooterCommon from './Footer-common'

const SignupFifthPage = () => {
  return (
    <div>
        <header>
            <Navbar_common />
        </header>
        <main id='fifthPage'>
         <div className="plan-wrapper">
           <p className="step-text">STEP 3 OF 4</p>
           <h1 className="plan-title">Choose the plan that's right for you</h1>

           <div className="plans-grid">
             <div className="plan-card mobile">
               <div className="plan-header">Mobile<br /><span>480p</span></div>
               <div className="plan-info">
                 <p><strong>Monthly price</strong><br />₹149</p>
                 <p><strong>Video and sound quality</strong><br />Fair</p>
                 <p><strong>Resolution</strong><br />480p</p>
                 <p><strong>Supported devices</strong><br />Mobile phone, tablet</p>
                 <p><strong>Devices your household can watch at the same time</strong><br />1</p>
                 <p><strong>Download devices</strong><br />1</p>
               </div>
             </div>

             <div className="plan-card basic">
               <div className="plan-header popular">Most Popular</div>
               <div className="plan-header">Basic<br /><span>720p</span></div>
               <div className="plan-info">
                 <p><strong>Monthly price</strong><br />₹199</p>
                 <p><strong>Video and sound quality</strong><br />Good</p>
                 <p><strong>Resolution</strong><br />720p (HD)</p>
                 <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
                 <p><strong>Devices your household can watch at the same time</strong><br />1</p>
                 <p><strong>Download devices</strong><br />1</p>
               </div>
             </div>

             <div className="plan-card standard">
               <div className="plan-header standerd">Standard<br /><span>1080p</span></div>
               <div className="plan-info">
                 <p><strong>Monthly price</strong><br />₹499</p>
                 <p><strong>Video and sound quality</strong><br />Great</p>
                 <p><strong>Resolution</strong><br />1080p (Full HD)</p>
                 <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
                 <p><strong>Devices your household can watch at the same time</strong><br />2</p>
                 <p><strong>Download devices</strong><br />2</p>
               </div>
             </div>

             <div className="plan-card premium">
               <div className="plan-header premium">Premium<br /><span>4K + HDR</span></div>
               <div className="plan-info">
                 <p><strong>Monthly price</strong><br />₹649</p>
                 <p><strong>Video and sound quality</strong><br />Best</p>
                 <p><strong>Resolution</strong><br />4K (Ultra HD) + HDR</p>
                 <p><strong>Spatial audio</strong><br />Included</p>
                 <p><strong>Supported devices</strong><br />TV, computer, mobile phone, tablet</p>
                 <p><strong>Devices your household can watch at the same time</strong><br />4</p>
                 <p><strong>Download devices</strong><br />6</p>
               </div>
             </div>
           </div>

           <p className="plan-note">
             HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
             Not all content is available in all resolutions. See our <a href="#">Terms of Use</a> for more details.
           </p>

           <p className="plan-note">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
           <p className="plan-note">Live events are included with any Netflix plan and contain ads.</p>

           <button className="next-button"><a href="./6_page.jsx">Next</a></button>
         </div>
        </main>
        <FooterCommon />
   </div>
  )
}

export default SignupFifthPage
