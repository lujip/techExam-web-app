// AchievePart.jsx
import React from 'react'
import './AchievePart.css'
import img1 from '../../assets/images/shape-cluster-1-Cj2Q_yXf.webp'
import img2 from '../../assets/images/shape-cluster-2-CGgb0otm.webp'
import img3 from '../../assets/images/shape-cluster-3-CMJ7QHRB.webp'

const AchievePart = () => {
  return (
    <section className='achieve-part'>
      <h2 className='achieve-title'>What You'll Achieve</h2>
      <div className="achieve">
        <div className="images-container">
          <div className="image-item">
            <img src={img1} alt="Achievement 1" className="achieve-image" />
            <p className="image-text">Confidence & Self-Love</p>
          </div>
          <div className="image-item">
            <img src={img2} alt="Achievement 2" className="achieve-image" />
            <p className="image-text">Authentic Connections</p>
          </div>
          <div className="image-item">
            <img src={img3} alt="Achievement 3" className="achieve-image" />
            <p className="image-text">Lasting Relationships</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievePart
