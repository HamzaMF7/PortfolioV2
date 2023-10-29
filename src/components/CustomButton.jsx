import React from "react";
import "../styles/customButton.scss";

const CustomButton = ({ icon: IconComponent, text }) => {
  return (
    <div className="button">
      <div className="icon">
        {IconComponent && <IconComponent className="home-icon" />}
      </div>
      <span className="text">{text}</span>
    </div>
  );
};

export default CustomButton;
