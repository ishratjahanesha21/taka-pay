import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost, } from "../../utilities/apiCaller";



export const createTakePassword = createAsyncThunk(
  "/takePassword",
  async ({data,userToken}, { rejectWithValue }) => {
    try {
      const response = await privatePost("/take/password",userToken, data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const takePasswordSlice = createSlice({
  name: "signup",
  initialState: {
    password:[],
    isLoading: false,
    success: false,
    errorr:'',
  },

  extraReducers: (builder) => {
    builder.addCase(createTakePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTakePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorr = null;
      state.password = action.payload;
      state.success = true;
    });
    builder.addCase(createTakePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorr = action.payload;
    });
  },
});

export default takePasswordSlice.reducer;