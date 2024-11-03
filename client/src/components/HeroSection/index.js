import React from "react";
import "./heroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ title, desc, btnlabel, btnAddress }) => {
  return (
    <div>
      <div className="heroSection">
        <h1 className="heroSection_title">{title}</h1>
        <h5 className="heroSection_desc">{desc}</h5>
      </div>

      <div className="mainButton_container">
        <button className="mainButton_button">
          <Link className="mainButton_Link" to={btnAddress}>
            {btnlabel}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
