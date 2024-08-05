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
  async (data,ThunkAPI) => {
    try {
      return await KacheriService.addKacheri(data);
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
  },
});

export default kacheriSlice.reducer;
