import React from 'react'
import './LandingPage.css'
import '../../index.css'
import mainImage from '../../assets/images/pdf-image-Dr2FM4My.webp'
import logo from '../../assets/images/circle-text-image-bIYuDFeA.webp'

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <div className="content-wrapper">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Logo</span>
          </div>
          <div className="main-content">
            <div className="text-content">
              <h2>How to attract your dream partner</h2>
              <p>Overcome the beliefs that block your ability to connect with high quality men and learn the real reason
              why smart, successful women are still single after 30.</p>
              <button>
            <span className="desktop-text">Download Your Guide Now</span>
            <span className="mobile-text">Download Your Guide</span>
          </button>
            </div>
            <div className="image-content">
              <img src={mainImage} alt="Main" />
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default LandingPage
