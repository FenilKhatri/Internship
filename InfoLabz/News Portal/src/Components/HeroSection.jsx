import React from 'react';

function HeroSection() {
      return (
            <div className="bg-primary">
                  <div className="container d-md-flex align-items-center justify-content-between text-white p-5">
                        <div className="title-section">
                              <h1 className="title display-4 fw-bold">Stay Informed with Latest News</h1>
                              <p className="text">Get the most recent and reliable news from around the world, updated in real-time.</p>
                        </div>
                        <div className="photo-section text-center">
                              <i className="bi bi-newspaper display-1 text-white"></i>
                        </div>
                  </div>
            </div>
      );
}

export default HeroSection;
