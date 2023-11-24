import React from "react";
import { Route, Routes } from "react-router-dom";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Home from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default RoutesComponent;
