import { useSelector } from "react-redux";

function GlobalLoading() {
  const resumeIsLoading = useSelector((state) => state.resume.isLoading);
  const projectIsLoading = useSelector((state) => state.project.isLoading);

  const isLoading = resumeIsLoading || projectIsLoading;

  return isLoading;
}

export default GlobalLoading;
