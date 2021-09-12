import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFoundComponent = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
        <p>The page that you are looking for does not exists!</p>
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFoundComponent;
