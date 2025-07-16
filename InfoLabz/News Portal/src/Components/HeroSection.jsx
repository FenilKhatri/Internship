import React from 'react';

function HeroSection() {
      return (
            <div className="bg-primary text-white py-5">
                  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
                        <div className="title-section text-center text-md-start">
                              <h1 className="display-4 fw-bold mb-3">Stay Informed with Latest News</h1>
                              <p className="lead mb-0">
                                    Get the most recent and reliable news from around the world, updated in real-time.
                              </p>
                        </div>
                        <div className="photo-section text-center">
                              <i className="bi bi-newspaper display-1"></i>
                        </div>
                  </div>
            </div>

      );
}

export default HeroSection;
