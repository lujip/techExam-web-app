import React from 'react'
import './AssociatedComp.css'
import oprahLogo from '../../assets/images/oprah-logo.svg'
import drphilLogo from '../../assets/images/Dr.Phil-logo.svg'
import cosmopolitanLogo from '../../assets/images/cosmopolitan-logo.svg'
import glamourLogo from '../../assets/images/galmour-logo.svg'
import abcLogo from '../../assets/images/ABC-logo.svg'

const AssociatedComp = () => {
  return (
    <section className="associated-section">
      <div className="logos-container">
        <div className="logo-item">
          <img src={oprahLogo} alt="Oprah" />
        </div>
        <div className="logo-item">
          <img src={drphilLogo} alt="Dr. Phil" />
        </div>
        <div className="logo-item">
          <img src={cosmopolitanLogo} alt="Cosmopolitan" />
        </div>
        <div className="logo-item">
          <img src={glamourLogo} alt="Glamour" />
        </div>
        <div className="logo-item">
          <img src={abcLogo} alt="ABC" />
        </div>
      </div>
    </section>
  )
}

export default AssociatedComp
