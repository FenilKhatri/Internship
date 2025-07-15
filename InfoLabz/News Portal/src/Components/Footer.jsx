import React from 'react';

function Footer() {
      return (
            <footer className="bg-dark text-white mt-auto">
                  <div className="container">
                        <div className="row py-5 text-center text-md-start">
                              <div className="col-md-4 mb-4">
                                    <h5 className="fw-bold">NEWS PORTAL</h5>
                                    <p>Your trusted source for reliable news from around the world. Stay informed with our comprehensive coverage.</p>
                              </div>
                              <div className="col-md-4 mb-4">
                                    <h6 className="fw-bold">Quick Links</h6>
                                    <ul className="list-unstyled">
                                          <li><a href="#" className="text-white text-decoration-none d-block mb-2">About Us</a></li>
                                          <li><a href="#" className="text-white text-decoration-none d-block mb-2">Contact</a></li>
                                          <li><a href="#" className="text-white text-decoration-none d-block mb-2">Privacy Policy</a></li>
                                          <li><a href="#" className="text-white text-decoration-none d-block">Terms & Conditions</a></li>
                                    </ul>
                              </div>
                              <div className="col-md-4 mb-4">
                                    <h6 className="fw-bold">Follow Us</h6>
                                    <div>
                                          <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
                                          <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-5"></i></a>
                                          <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
                                          <a href="#" className="text-white me-3"><i className="bi bi-linkedin fs-5"></i></a>
                                    </div>
                              </div>
                        </div>
                        <hr className="text-white" />
                        <p className="text-center py-3 m-0">© 2025 Global News Portal. All rights reserved. | Designed for Educational Assignment</p>
                  </div>
            </footer>
      );
}

export default Footer;