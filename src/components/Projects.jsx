import React, { useEffect } from "react";
import Heading from "./Heading";
import Project from "./Project";
import "../styles/projects.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../state/projectSlice";
import LoadingOverlay from "./LoadingOverlay";
import NotFound from "./NotFound";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, isSuccess } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(getProjects());
  }, []);
  console.log(projects);

  return (
    <div className="projects ">
      {isLoading && <LoadingOverlay />}
      <Heading
        title="Projects"
        text="Some of the noteworthy projects I have built"
      />
      {isSuccess ? (
        <div className="projects-box">
          {projects?.map((project) => (
            <Project {...project} key={project.id}/>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Projects;
