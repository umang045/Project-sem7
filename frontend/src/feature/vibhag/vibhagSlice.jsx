import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import generateExtraReducers from "../../Components/generateExtraReducers";
import vibhagService from "./vibhagService";

export const getAllVibhag = createAsyncThunk(
  "vibhag/get-all",
  async (ThunkAPI) => {
    try {
      return await vibhagService.getAllVibhag();
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const addVibhag = createAsyncThunk(
  "vibhag/add-one",
  async (data, ThunkAPI) => {
    try {
      return await vibhagService.addVibhag(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  vibhag: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const vibhagSlice = createSlice({
  name: "vibhag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    generateExtraReducers(getAllVibhag, "vibhag")(builder);
    generateExtraReducers(addVibhag, "addVibhag")(builder);
  },
});

export default vibhagSlice.reducer;
