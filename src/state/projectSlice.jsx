import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../api/Url";

export const getProjects = createAsyncThunk(
  "projects/get-projects",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/projects`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  projects: [],
  tags: [],
  filtredProjects: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};
export const resetState = createAction("Reset_all");

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    filterByTag: (state, action) => {
      const filtered_projects = state.projects.filter((project) => {
        return state.tags.every((tag) => project.language.includes(tag));
      });
      state.filtredProjects = filtered_projects;
    },

    selectedTag: (state, action) => {
      const newTag = action.payload;
      if (!state.tags.includes(newTag)) {
        state.tags = [...state.tags, newTag];
      }
    },
    removedTag: (state, action) => {
      const removedTag = action.payload;
      const filtredTags = state.tags.filter(
        (tag) => tag.trim().toLowerCase() !== removedTag.trim().toLowerCase()
      );
      state.tags = filtredTags;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.projects = action.payload;
        state.filtredProjects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(resetState, () => initialState);
  },
});

export const { filterByTag, selectedTag, removedTag } = projectSlice.actions;
export default projectSlice.reducer;
