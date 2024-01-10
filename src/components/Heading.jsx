import React from "react";

const Heading = ({ text, title }) => {
  return (
    <div className="heading">
      <div className="gradient-text">{title}</div>
      {text && <p className="sub-title">{text}</p>}
    </div>
  );
};

export default Heading;
