import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-center flex-column">
              <h1 className="display-2">
                Online Payment made <br /> easy for you!
              </h1>
              <p className="main-hero-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur incidunt veniam totam illo temporibus ducimus
                perferendis illum fuga consectetur quos in odio quaerat magnam
                accusantium sequi delectus placeat, dolorem eum?
              </p>
              <h3>Get the Early Access!</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 ps-5 form-control-text"
                  placeholder="Enter Your Best Email..."
                />
                <div className="input-group-button">Get It Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
              <img
                src="./images/hero1.jpg"
                className="img-fluid"
                alt="heroimg"
              />
              <img
                src="./images/hero2.jpg"
                className="img-fluid hero-img-two"
                alt="heroimg"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
