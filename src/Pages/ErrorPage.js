import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import NotFoundComponent from "../Components/NotFound/NotFoundComponent";
import Footer from "../Components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <NotFoundComponent />
      <Footer />
    </>
  );
};

export default ErrorPage;
