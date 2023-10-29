import React from "react";
import { Route, Routes } from "react-router-dom";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Home from "../components/Home";

const RoutesComponent = () => {
  return (
    <div className="routes">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
