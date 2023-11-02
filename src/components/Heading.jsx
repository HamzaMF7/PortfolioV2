import React from "react";

const Heading = ({ text, title }) => {
  return (
    <div className="heading">
      <div className="title">{title}</div>
      {text && <p className="description">{text}</p>}
    </div>
  );
};

export default Heading;
