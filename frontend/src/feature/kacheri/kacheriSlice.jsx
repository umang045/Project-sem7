import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import KacheriService from "./KacheriService";
import generateExtraReducers from "../../Components/generateExtraReducers";

//get all kacheri
export const getKacheri = createAsyncThunk(
  "kacheri/get-all",
  async (ThunkAPI) => {
    try {
      return await KacheriService.getKacheri();
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const addKacheri = createAsyncThunk(
  "kacheri/get-one",
  async (data, ThunkAPI) => {
    console.log(data);
    
    try {
      return await KacheriService.addKacheri(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const delKacheri = createAsyncThunk(
  "kacheri/del-one",
  async (id, ThunkAPI) => {
    try {
      return await KacheriService.delKacheri(id);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

export const updateKacheri = createAsyncThunk(
  "kacheri/update-one",
  async (data, ThunkAPI) => {
    try {
      console.log(data.values);

      return await KacheriService.updateKacheri(data);
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  kacheri: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const kacheriSlice = createSlice({
  name: "kacheri",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    generateExtraReducers(getKacheri, "kacheri")(builder);
    generateExtraReducers(addKacheri, "addKacheri")(builder);
    generateExtraReducers(delKacheri, "delKacheri")(builder);
    generateExtraReducers(updateKacheri, "updateKacheri")(builder);
  },
});

export default kacheriSlice.reducer;
