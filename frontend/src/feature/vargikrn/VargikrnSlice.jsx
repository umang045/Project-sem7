import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vargikrnService from "./VargikrnService";
import generateExtraReducers from "../../Components/generateExtraReducers";

//add floors
export const addFloors = createAsyncThunk(
  "vrgikrn/add-floor",
  async (data, ThunkAPI) => {
    try {
      console.log(data);

      return await vargikrnService.addFloors(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

//add information
export const addInfo = createAsyncThunk(
  "vrgikrn/add-info",
  async (data, ThunkAPI) => {
    try {
      console.log(data);

      return await vargikrnService.addInfo(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  vargikrn: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const vargikrnSlice = createSlice({
  name: "vargikaran",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    generateExtraReducers(addFloors, "floors")(builder);
    generateExtraReducers(addInfo, "information")(builder);
  },
});

export default vargikrnSlice.reducer;
