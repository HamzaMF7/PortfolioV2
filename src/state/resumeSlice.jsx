import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../api/Url";

export const getDegrees = createAsyncThunk(
  "degrees/get-degrees",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/resume`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addDegree = createAsyncThunk(
  "degree/add-degree",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/resume`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  degrees: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const resetState = createAction("Reset_all");

const resumeSlice = createSlice({
  name: "degrees",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDegrees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDegrees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.degrees = action.payload;
      })
      .addCase(getDegrees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addDegree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDegree.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(addDegree.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default resumeSlice.reducer;
