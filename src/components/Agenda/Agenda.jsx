import React, { useState } from 'react'
import './Agenda.css'

const Agenda = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const agendaContent = {
    1: {
      title: "Day 1",
      content: [
        "Identify your personal 10% blindspot (everyone has one) that sends quality men running for the hills and clear limiting beliefs that keep you stuck in the scarcity mindset (so you can attract a quality man who's words and actions actually match).",
        "By the end of the day, you'll know EXACTLY why you're single and what next steps are required to get you closer to magnetizing high-caliber men and creating the life you love."
      ],
      list: [
        { number: "1", title: "Understand why", description: "Even though you've read all the self-help books and followed all the rules-you're still single and how to make our secret technology work for you so that you attract the hot, high quality man your heart desires." },
        { number: "2", title: "Learn 4 Characteristics that Attract Men", description: "Not just any men, but men who are open, vulnerable, and committed, so that no man will ever disappear on you again." },
        { number: "3", title: "Reprogram Your Dating GPS", description: "Understand why now matter HOW you meet a man it won't ever work until you reprogram your dating GPS so that you become \"the destination\" for the men you want." },
        { number: "4", title: "Learn what \"feminine\" means now", description: "Especially as a successful woman so that you don't have to jump into the girly-girl bucket to attract a high quality man." },
        { number: "5", title: "Remove Limiting Beliefs", description: "Eliminate the \"nothing works for me\" belief in your head so that the universe knows you are loveable and sends you the right man to love." }
      ]
    },
    2: {
      title: "Day 2",
      content: [
        "Deep dive into advanced topics and practical applications. Hands-on exercises and real-world examples.",
        "We'll explore complex scenarios and build robust solutions together."
      ],
      list: [
        { number: "1", title: "Advanced Concepts", description: "Exploring complex patterns and solutions" },
        { number: "2", title: "Real-world Cases", description: "Analyzing practical applications" },
        { number: "3", title: "Problem Solving", description: "Tackling common challenges" },
        { number: "4", title: "Optimization", description: "Improving performance and efficiency" },
        { number: "5", title: "Integration", description: "Connecting with external systems" }
      ]
    },
    3: {
      title: "Day 3",
      content: [
        "Final day focusing on implementation and best practices. Wrapping up with project work and future directions.",
        "You'll leave with a clear roadmap for continued growth and success."
      ],
      list: [
        { number: "1", title: "Project Planning", description: "Structuring your implementation" },
        { number: "2", title: "Development", description: "Building the core functionality" },
        { number: "3", title: "Testing", description: "Ensuring quality and reliability" },
        { number: "4", title: "Deployment", description: "Taking your project live" },
        { number: "5", title: "Next Steps", description: "Planning for future development" }
      ]
    }
  };

  return (
    <div className="agenda-container">
      <div className="agenda-title">
        <h2>What's on the <br /> agenda.</h2>
      </div>
      <div className="agenda-content">
        <nav className="day-navigation">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              className={`day-button ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              Day {day}
            </button>
          ))}
        </nav>
        <div className="agenda-content-text">
          <h3>{agendaContent[selectedDay].title}</h3>
          {agendaContent[selectedDay].content.map((paragraph, index) => (
            <p key={index} className="content-paragraph">{paragraph}</p>
          ))}
          <div className="agenda-list-container">
            <div className="numbered-list">
              {agendaContent[selectedDay].list.map((item) => (
                <div key={item.number} className="list-item">
                  <div className="number">{item.number}</div>
                  <div className="item-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agenda
