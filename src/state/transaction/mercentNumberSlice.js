import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const takeMercentNumber = createAsyncThunk(
  "/takeMercentNumber",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/take/mercentnumber",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const takeMercentNumberSlice = createSlice({
  name: "payment",
  initialState: {
    number:[],
    isLoading: false,
    success: false,
    errorr:'',
  },

  extraReducers: (builder) => {
    builder.addCase(takeMercentNumber.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(takeMercentNumber.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorr = null;
      state.number = action.payload;
      state.success = true;
    });
    builder.addCase(takeMercentNumber.rejected, (state, action) => {
      state.isLoading = false;
      state.errorr = action.payload;
    });
  },
});

export default takeMercentNumberSlice.reducer;