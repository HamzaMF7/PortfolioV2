import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import Tag from "./Tag";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import DescModal from "./DescModal";
AOS.init();

const Project = ({
  image,
  name,
  description,
  language,
  lien,
  descriptions,
}) => {
  console.log(descriptions);
  return (
    <div className="project" data-aos="zoom-in">
      <div className="project-image">
        <img src={require(`../assets/${image}`)} alt="card" />
      </div>
      <div className="project-info">
        <h2>{name}</h2>
        <p>{descriptions?.briefDescription.split(" ").slice(0,18).join(" ")}...</p>
        <DescModal description={descriptions}/>
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
