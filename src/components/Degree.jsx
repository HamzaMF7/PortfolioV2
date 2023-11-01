import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { PiNotePencilDuotone } from "react-icons/pi";
import AOS from "aos";
import { useParams } from "react-router-dom";
import { deleteDegree, getDegrees, showDegree } from "../state/resumeSlice";
import "../styles/degree.scss";

AOS.init();

const Degree = ({ id, title, education, description }) => {
  const dispatch = useDispatch();

  const deleteDegreeHandler = async () => {
    await dispatch(deleteDegree(id));
    dispatch(getDegrees());
  };

  const updateDegreeHandler = () => {
    dispatch(showDegree(id));
  };

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
        <div className="icons">
          <div className="delete" onClick={deleteDegreeHandler}>
            <AiOutlineDelete />
          </div>
          <div className="update" onClick={updateDegreeHandler}>
            <PiNotePencilDuotone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Degree;
