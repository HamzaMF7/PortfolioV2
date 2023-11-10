import React, { useEffect } from "react";
import Heading from "./Heading";
import Project from "./Project";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../state/projectSlice";
import LoadingOverlay from "./LoadingOverlay";
import NotFound from "./NotFound";
import Tag from "./Tag";


const Projects = () => {
  const dispatch = useDispatch();
  const { filtredProjects, tags, isLoading, isSuccess } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div className="projects container">
      {/* {isLoading && <LoadingOverlay />}  */}
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
