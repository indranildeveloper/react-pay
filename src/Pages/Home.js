import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
