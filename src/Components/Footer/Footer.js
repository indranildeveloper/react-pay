import React from "react";

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-12 col-lg-3 text-center mb-3">
                <h3 className="text-white fw-bold">Company Info</h3>
                <ul className="p-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Get Help</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 text-center mb-3">
                <h3 className="text-white fw-bold">Learn More</h3>
                <ul className="p-0">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Licensing</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 text-center mb-3">
                <h3 className="text-white fw-bold">Need Help</h3>
                <ul className="p-0">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Tips</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Technical</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 text-center mb-3">
                <h3 className="text-white fw-bold">Follow Us</h3>
                <div className="row">
                  <div className="col-3 mx-auto">
                    <a href="#">
                      <i className="fab fa-facebook d-flex align-items-center justify-content-center fontawesome-style"></i>
                    </a>
                  </div>
                  <div className="col-3 mx-auto">
                    <a href="#">
                      <i className="fab fa-instagram d-flex align-items-center justify-content-center fontawesome-style"></i>
                    </a>
                  </div>
                  <div className="col-3 mx-auto">
                    <a href="#">
                      <i className="fab fa-twitter d-flex align-items-center justify-content-center fontawesome-style"></i>
                    </a>
                  </div>
                  <div className="col-3 mx-auto">
                    <a href="#">
                      <i className="fab fa-linkedin d-flex align-items-center justify-content-center fontawesome-style"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-white" />
            <div className="mt-5">
              <p className="text-white text-center main-hero-paragraph p-0">
                Copyright &copy; 2021, ReactPay All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
