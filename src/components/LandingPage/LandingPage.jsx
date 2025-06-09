import React from 'react'
import './LandingPage.css'
import '../../index.css'
import img1 from '../../assets/images/pdf-image-Dr2FM4My.webp'

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="logo">Logo</div>
      
      <div className="landing-content">
        <div className="text-content">
          <h2>How to attract your dream partner</h2>
          <p>Overcome the beliefs that block your ability to connect with high quality men and learn the real reason
            why smart, successful women are still single after 30.
          </p>
          <button>
            <span className="desktop-text">Download Your Guide Now</span>
            <span className="mobile-text">Download Your Guide</span>
          </button>
        </div>
        
        <div className="image-content">
          <img src={img1} alt="img1" />
        </div>
      </div>
    </section>    
  )
}

export default LandingPage
