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
      console.log(data);
      return await vibhagService.addVibhag(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const delVibhag = createAsyncThunk(
  "vibhag/del-one",
  async (id, ThunkAPI) => {
    try {
      // console.log(id);
      return await vibhagService.delVibhag(id);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const getOneVibhag = createAsyncThunk(
  "vibhag/get-one",
  async (id, ThunkAPI) => {
    try {
      // console.log(id);
      return await vibhagService.getOneVibhag(id);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const getVibhagByKacheri = createAsyncThunk(
  "vibhag/getVibahg-byKacheri",
  async (data, ThunkAPI) => {
    try {
      console.log(data);
      return await vibhagService.getVibhagByKacheri(data);
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
    generateExtraReducers(delVibhag, "delVibhag")(builder);
    generateExtraReducers(getOneVibhag, "getOneVibhag")(builder);
    generateExtraReducers(getVibhagByKacheri, "getVibhagByKacheri")(builder);
  },
});

export default vibhagSlice.reducer;
