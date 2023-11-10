import React, { useEffect } from "react";
import Heading from "./Heading";
import Degree from "./Degree";
import { useDispatch, useSelector } from "react-redux";
import { getDegrees } from "../state/resumeSlice";
import LoadingOverlay from "./LoadingOverlay";
import NotFound from "./NotFound";
import AddItems from "./AddItems";

const Resume = () => {
  const dispatch = useDispatch();
  const { degrees, isLoading, isSuccess } = useSelector(
    (state) => state.resume
  );



  useEffect(() => {
    dispatch(getDegrees());
  }, []);

  return (
    <div className="resume container">
      {/* {isLoading && <LoadingOverlay />} */}
      <Heading
        title="Resume"
        text="Here is a quick summary of my education and certifications"
      />
      <AddItems degreesLength={degrees.length} />
      {isSuccess ? (
        <div className="box">
          {Array.from(degrees)
            ?.reverse()
            .map((degree) => (
              <Degree {...degree} key={degree.id} />
            ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Resume;
