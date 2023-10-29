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

// export const deleteCustomer = createAsyncThunk(
//   "customer/delete-customer",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`${URL}/api/customer/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  projects: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const resetState = createAction("Reset_all");
export const restESL = createAction("Reset_Loading&Success&Error");

const projectSlice = createSlice({
  name: "projects",
  initialState,
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
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      //   .addCase(deleteCustomer.pending, (state) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(deleteCustomer.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = false;
      //     state.isSuccess = true;
      //   })
      //   .addCase(deleteCustomer.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isError = true;
      //     state.isSuccess = false;
      //     state.message = action.error;
      //   })
      .addCase(resetState, () => initialState)
      .addCase(restESL(), (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
      });
  },
});
export default projectSlice.reducer;
