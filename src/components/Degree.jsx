import React from "react";
import "../styles/degree.scss";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
AOS.init();

const Degree = ({ title, education, description }) => {
  return (
    <div className="timeline-item" data-aos="zoom-in">
      <div className="degree">
        <div className="pulse">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <h2 className="academy">{education}</h2>
        <h3 className="title-degree">{title}</h3>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default Degree;
