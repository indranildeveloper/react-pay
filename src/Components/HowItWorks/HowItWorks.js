import React, { useState } from "react";
import workapi from "../api/work-api";
import "./styles.css";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it work?</h1>
          <div className="row">
            {workData.map((item) => {
              const { id, logo, title, info } = item;
              return (
                <div
                  key={id}
                  className="col-12 col-lg-4 text-center work-container-subdiv"
                >
                  <i
                    className={`fontawesome-style d-flex align-items-center justify-content-center ${logo}`}
                  ></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-hero-paragraph w-100">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
