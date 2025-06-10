import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <p>Copyright © 2022 Dating with Dignity. All Rights Reserved.</p>
          <span className="separator">|</span>
          <div className="footer-links">
            <a href="/terms">Terms of Service</a>
            
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
