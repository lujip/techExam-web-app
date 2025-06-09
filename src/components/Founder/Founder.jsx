import React from 'react'
import './Founder.css'
import founderImg from '../../assets/images/marni-image-cluster-0aljjjUR.webp'

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-image">
          <img src={founderImg} alt="Founder" />
        </div>
        <div className="founder-content">
          <h2 className="founder-name">Meet our founder</h2>
          <h2 className="founder-name2">Marni</h2>
          <p className="founder-text">
            Having been married for 17 years, divorced, and successfully dated again in today's comples social environment,
            and now happily married, Marni undestands waht it feels like to be lonely and sick of wasting time going on dates
            and having relationships with unavailable men that go nowhere. 
            <br />
            <br />
            Through her own journey to find love, Marni discovered that creating a process to shorten the journey for other women
            suffering from the inability to create emotionally safe and fulfilling life relationships was truly the mussion of 
            her soul and purpose.
          </p>
          <button className='founder-button'>Discover Marni's Proven Process</button>
        </div>
      </div>
    </section>
  )
}

export default Founder 