import React from "react";
import "../styles/heading.scss";

const Heading = ({ text, title }) => {
  return (
    <div className="heading">
      <div className="title">{title}</div>
      {text && <div className="description">{text}</div>}
    </div>
  );
};

export default Heading;
