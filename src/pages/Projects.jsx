import React, { useEffect } from "react";
import Heading from "../components/Heading";
import Project from "../components/Project";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../state/projectSlice";
import NotFound from "../components/NotFound";
import Tag from "../components/Tag";
import ScrollToTop from "../customHook/ScrollToTop";

import descData from "../api/descriptions.json";

const Projects = () => {
  const dispatch = useDispatch();
  const { filtredProjects, tags, isSuccess } = useSelector(
    (state) => state.project
  );
  const {descriptions} = descData ;

  // console.log('====================================');
  // console.log(descriptions[1]);
  // console.log('====================================');

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  ScrollToTop();

  return (
    <div className="projects container">
      <Heading
        title="Projects"
        text="Projects"
      />
      {isSuccess ? (
        <>
          <div className="tags">
            {tags?.map((title, index) => (
              <Tag title={title} filter={true} key={index} />
            ))}
          </div>
          <div className="projects-box">
            {filtredProjects?.map((project) => (
              <Project {...project} descriptions={descriptions[project.id-1]} key={project.id} />
            ))}
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Projects;
