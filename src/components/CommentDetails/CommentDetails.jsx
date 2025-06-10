import React, { useState } from 'react';
import './CommentDetails.css';
import janice from '../../assets/images/janice.webp';
import jill from '../../assets/images/jill.webp';

const CommentDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const comments = [
    {
      text: "''Once Marni held me accountable, it was easier for me to finally recognize when Mr. Right (Mark) came along.''",
      subtext: "If I hadn't followed the guiding hand of Marni, I wouldn't have been ready to accept the moments and opportunities presented to me every day.",
      image: janice,
      name: "Janice"
    },
    {
      text: "''I am now much more grounded and confident and I feel like I'm living the life that I wanted to live now.''",
      subtext: "When I first joined the program, the best initial results I got were me actually loving who I am. I think I always had an appreciation for myself, but I didn't truly believe that I was worthy of great things.",
      image: jill,
      name: "Jill"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comments.length) % comments.length);
  };

  return (
    <section className="comment-section">
      <div className="comment-container">
        <div className="first-comment-wrapper">
          <h2 className="comment-title">
            <span className="title-highlight">See how women have been impacted by the </span> <br /> power of love:
          </h2>

          <div
            key={`comment-${currentSlide}`}
            className={`comment-card ${currentSlide === 0 ? 'fade-in' : ''}`}
            data-active={currentSlide === 0}
          >
            <p className="comment-text">{comments[0].text}</p>
            <p className="comment-subtext">{comments[0].subtext}</p>
            <div className="comment-footer">
              <img src={comments[0].image} alt={comments[0].name} className="commenter-icon" />
              <span className="commenter-name">{comments[0].name}</span>
            </div>
          </div>
        </div>

        <div
          key={`mobile-comment-${currentSlide}`}
          className={`comment-card mobile-comment-card ${currentSlide === 1 ? 'fade-in' : ''}`}
          data-active={currentSlide === 1}
        >
          <p className="comment-text">{comments[1].text}</p>
          <p className="comment-subtext">{comments[1].subtext}</p>
          <div className="comment-footer">
            <img src={comments[1].image} alt={comments[1].name} className="commenter-icon" />
            <span className="commenter-name">{comments[1].name}</span>
          </div>
        </div>

        <div className="mobile-navigation">
          <button className="nav-button prev" onClick={prevSlide} aria-label="Previous comment">&lt;</button>
          <div className="dot-indicators">
            {comments.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to comment ${index + 1}`}
              />
            ))}
          </div>
          <button className="nav-button next" onClick={nextSlide} aria-label="Next comment">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default CommentDetails;
