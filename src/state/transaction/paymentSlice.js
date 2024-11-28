import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const createPayment = createAsyncThunk(
  "/payment",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/payment",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment:[],
    isLoading: false,
    success: false,
    error:'',
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.payment = action.payload;
      state.success = true;
    });
    builder.addCase(createPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default paymentSlice.reducer;