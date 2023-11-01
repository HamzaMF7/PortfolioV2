import React from "react";
import { DotLoader } from "react-spinners";

const LoadingOverlay = () => {
  return (
    <div className="overlay">
      <div className="spinner">
        <DotLoader color="#14A800" size="80px" speedMultiplier="2" />
      </div>
    </div>
  );
};

export default LoadingOverlay;
