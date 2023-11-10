import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import resumeReducer from "./resumeSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    resume: resumeReducer,
    theme : themeReducer,
  },
});
