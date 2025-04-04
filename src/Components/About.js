import React from 'react';
import bannerImage from '../Assets/banner.png'; // Ensure the correct path to the image
import '../CSS/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="banner-container">
        <img src={bannerImage} alt="StreamList Banner" className="banner-image" />
        <div className="banner-text">
          <h1>About StreamList</h1>
        </div>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>StreamList</strong> – your ultimate destination for discovering and organizing your favorite movies. Whether you love blockbusters, indie gems, or timeless classics, we provide a seamless experience for finding, saving, and managing your watchlist.
        </p>
        <p>
          Our platform integrates with the latest movie databases, ensuring you have up-to-date information on trending and upcoming films. Plus, with our cart feature, you can create a personalized collection of must-watch movies.
        </p>
        <p>Stay tuned for exciting new features, and happy streaming!</p>
      </div>
    </div>
  );
}

export default About;