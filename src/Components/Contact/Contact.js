import React, { useState } from "react";

import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  let name;
  let value;

  const handlePost = (e) => {
    name = e.target.name;
    value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, email, address, message } =
      formData;
    const response = await fetch("https://demo.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        message,
      }),
    });

    if (response) {
      alert("Data Stored");
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mx-auto">
            <div className="row">
              <div className="contact-left col-12 col-lg-5">
                <h1 className="main-heading fw-bold">
                  Contact with our sales team.
                </h1>
                <p className="main-hero-paragraph contact-paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  est numquam quos exercitationem, temporibus, commodi dolore
                </p>
                <figure>
                  <img
                    src="./images/team.jpg"
                    className="img-fluid mb-5"
                    alt="Team"
                  />
                </figure>
              </div>

              <div className="contact-right col-12 col-lg-7 d-flex align-items-center justify-content-center">
                <form method="post">
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handlePost}
                        name="firstName"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handlePost}
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handlePost}
                        name="phoneNumber"
                      />
                    </div>
                    <div className="col-12 col-lg-6 contact-input">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handlePost}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        className="form-control contact-input"
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handlePost}
                        name="address"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <textarea
                        className="form-control contact-input contact-text"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handlePost}
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-check checkbox-style">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      htmlFor="flexCheckChecked"
                      className="form-check-label"
                    >
                      I have read all Aggrement and ReactPay may contact me
                      through the given details
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn-style w-100 contact-btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
