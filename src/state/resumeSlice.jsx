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

export const deleteDegree = createAsyncThunk(
  "degree/delete-degree",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${URL}/resume/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const showDegree = createAsyncThunk(
  "degree/show-degree",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/resume/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateDegree = createAsyncThunk(
  "degree/update-degree",
  async ( payload , thunkAPI) => {
    try {
      const response = axios.put(`${URL}/resume/${payload.id}`, payload, {
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
  update: false,
  isExpanded : false ,
  message: "",
};
export const resetState = createAction("Reset_all");

const resumeSlice = createSlice({
  name: "degrees",
  initialState,
  reducers : {
    setIsExpanded: (state , action)=>{
      state.isExpanded = !state.isExpanded ;
    }
  },
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
      .addCase(deleteDegree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDegree.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteDegree.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(showDegree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showDegree.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.update = true;
        state.degrees = action.payload;
      })
      .addCase(showDegree.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateDegree.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDegree.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.update = false;
      })
      .addCase(updateDegree.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export const { setIsExpanded } = resumeSlice.actions ;
export default resumeSlice.reducer;
