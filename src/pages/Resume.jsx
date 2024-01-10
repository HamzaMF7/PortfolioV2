import React, { useEffect } from "react";
import Heading from "../components/Heading";
import Degree from "../components/Degree";
import { useDispatch, useSelector } from "react-redux";
import { getDegrees } from "../state/resumeSlice";
import NotFound from "../components/NotFound";
import AddItems from "../components/AddItems";
import ScrollToTop from "../customHook/ScrollToTop";

const Resume = () => {
  const dispatch = useDispatch();
  const { degrees, isSuccess } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getDegrees());
  }, []);

  ScrollToTop();

  return (
    <div className="resume container">
      <Heading
        title="Resume"
        text="Resume"
      />
      <AddItems degreesLength={degrees.length} />
      {isSuccess ? (
        <div className="box">
          {Array.from(degrees)
            ?.reverse()
            .map(({id , ...degree}) => (
              <Degree {...degree} key={id} />
            ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Resume;
