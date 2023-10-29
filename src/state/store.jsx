import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import resumeReducer from './resumeSlice'

export const store = configureStore({
  reducer: {
    project: projectReducer,
    resume: resumeReducer,
  },
});
