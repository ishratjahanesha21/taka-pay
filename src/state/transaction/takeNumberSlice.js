import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const createTakeNumber = createAsyncThunk(
  "/takeNumber",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/take/recivernumber",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const takeNumberSlice = createSlice({
  name: "signup",
  initialState: {
    number:[],
    isLoading: false,
    success: false,
    errorr:'',
  },

  extraReducers: (builder) => {
    builder.addCase(createTakeNumber.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTakeNumber.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorr = null;
      state.number = action.payload;
      state.success = true;
    });
    builder.addCase(createTakeNumber.rejected, (state, action) => {
      state.isLoading = false;
      state.errorr = action.payload;
    });
  },
});

export default takeNumberSlice.reducer;