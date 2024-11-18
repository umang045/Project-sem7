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

//get info by vibhag
export const getInfoByVibhag = createAsyncThunk(
  "vrgikrn/get-info",
  async (ThunkAPI) => {
    try {
      // console.log(data);

      return await vargikrnService.getInfoByVibhag();
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

//get floors
export const getFloors = createAsyncThunk(
  "vrgikrn/get-floors",
  async (id, ThunkAPI) => {
    try {
      // console.log(data);
      return await vargikrnService.getFloors(id);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

//del floors
export const delFloorsInfo = createAsyncThunk(
  "vrgikrn/del-floors",
  async (data, ThunkAPI) => {
    try {
      console.log(data);
      return await vargikrnService.delFloorsInfo(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const getVargi = createAsyncThunk(
  "vrgikrn/get-data",
  async (data, ThunkAPI) => {
    try {
      // console.log(data);
      return await vargikrnService.getVargi(data);
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
    generateExtraReducers(getInfoByVibhag, "getinfo")(builder);
    generateExtraReducers(getFloors, "getfloors")(builder);
    generateExtraReducers(delFloorsInfo, "delFloorsInfo")(builder);
    generateExtraReducers(getVargi, "getVargi")(builder);
  },
});

export default vargikrnSlice.reducer;
