import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import Tag from "./Tag";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
AOS.init();

const Project = ({ image, name, description, language, lien }) => {
  return (
    <div className="project" data-aos="zoom-in">
      <div className="project-image">
        <img src={require(`../assets/${image}`)} alt="card" />
      </div>
      <div className="project-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="tools">
          {language?.map((e, index) => (
            <Tag title={e} key={index} />
          ))}
        </div>
        <div className="view">
          <a href={lien} target="_blank" rel="noreferrer">
            <BsFillEyeFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
