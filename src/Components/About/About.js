import React, { useState } from "react";

import useapi from "../api/use-api";
import "./style.css";

const About = () => {
  const [aboutData, setAboutData] = useState(useapi);
  return (
    <>
      <section className="common-section our-services ms-5 ps-5">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center service-left-img mx-auto">
              <img src="./images/about.jpg" className="img-fluid" alt="About" />
            </div>
            <div className="col-12 col-lg-7 service-list">
              <h3 className="mini-title">
                ...Available @ Google Play Store and IOS App Store
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutData.map((data, index) => {
                const { id, title, info } = data;
                return (
                  <div className="row service-info" key={index}>
                    <div className="col-1 service-number">{id}</div>
                    <div className="col-11 service-data">
                      <h2>{title}</h2>
                      <p className="main-hero-paragraph">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn-style btn-style-second w-auto px-5">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services ms-5 px-5">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 service-list">
              <h3 className="mini-title">...Get Support in Any Language</h3>
              <h1 className="main-heading">
                24/7 World Class Support ready for you
              </h1>
              {aboutData.map((data, index) => {
                const { id, title, info } = data;
                return (
                  <div className="row service-info" key={index}>
                    <div className="col-1 service-number">{id}</div>
                    <div className="col-11 service-data">
                      <h2>{title}</h2>
                      <p className="main-hero-paragraph">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn-style btn-style-second w-auto px-5">
                Learn More
              </button>
            </div>
            <div className="col-12 col-lg-5 text-center service-left-img">
              <img
                src="./images/support.jpg"
                className="img-fluid"
                alt="About"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
