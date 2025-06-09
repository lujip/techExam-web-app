import React, { useState } from 'react'
import './FeedbackDetails.css'
import img1 from '../../assets/images/mask-group-120-DkyejoM-.webp'

const FeedbackDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: "Feedback Detail 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Feedback Detail 2",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Feedback Detail 3",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item">
              <button 
                className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <span className="plus-symbol">{activeAccordion === index ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="feedback-image">
          <img src={img1} alt="Feedback" />
        </div>
      </div>
    </section>
  )
}

export default FeedbackDetails
