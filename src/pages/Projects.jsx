import React, { useEffect } from "react";
import Heading from "../components/Heading";
import Project from "../components/Project";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../state/projectSlice";
import NotFound from "../components/NotFound";
import Tag from "../components/Tag";
import ScrollToTop from "../customHook/ScrollToTop";


const Projects = () => {
  const dispatch = useDispatch();
  const { filtredProjects, tags, isSuccess } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  ScrollToTop();

  return (
    <div className="projects container">
      <Heading
        title="Projects"
        text="Some of the noteworthy projects I have built"
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
              <Project {...project} key={project.id} />
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
