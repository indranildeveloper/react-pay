import React, { useState } from "react";
import serviceapi from "../api/service-api";
import "./styles.css";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to Send Money
          </h1>
          <div className="row">
            {serviceData.map((data, index) => {
              const { id, logo, title, info } = data;
              return (
                <div
                  className="col-10 col-lg-4 work-container-subdiv"
                  key={index}
                >
                  <i
                    className={`fontawesome-style d-flex align-items-center justify-content-center ${logo}`}
                  ></i>
                  <h2 className="sub-heading text-center">{title}</h2>
                  <p className="main-hero-paragraph text-center">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
